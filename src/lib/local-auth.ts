import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { mkdir, open, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

type User = { name: string; email: string };
type Account = User & { salt: string; passwordHash: string };
type Session = { user: User; expiresAt: number };

export const sessionCookie = "dev-atlas-session";

const dataDir = join(process.cwd(), ".dev-atlas-auth");
const accountsDir = join(dataDir, "accounts");
const sessionsDir = join(dataDir, "sessions");

function deriveKey(password: string, salt: string) {
  return new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, (error, key) => {
      if (error) reject(error);
      else resolve(key);
    });
  });
}

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

async function readJson<T>(path: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(path, "utf8")) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export async function createAccount(user: User, password: string) {
  const salt = randomBytes(16).toString("hex");
  const passwordHash = (await deriveKey(password, salt)).toString("hex");
  const account: Account = { ...user, salt, passwordHash };
  await mkdir(accountsDir, { recursive: true, mode: 0o700 });

  const target = join(accountsDir, `${hash(user.email)}.json`);
  let file;
  try {
    file = await open(target, "wx", 0o600);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") return false;
    throw error;
  }
  try {
    await file.writeFile(JSON.stringify(account));
  } catch (error) {
    await file.close();
    await rm(target, { force: true });
    throw error;
  }
  await file.close();
  return true;
}

export async function verifyAccount(email: string, password: string): Promise<User | null> {
  const account = await readJson<Account>(join(accountsDir, `${hash(email)}.json`));
  const key = await deriveKey(password, account?.salt ?? "unknown-account");
  if (!account || !timingSafeEqual(key, Buffer.from(account.passwordHash, "hex"))) {
    return null;
  }
  return { name: account.name, email: account.email };
}

export async function createSession(user: User, maxAge: number) {
  const token = randomBytes(32).toString("hex");
  const session: Session = { user, expiresAt: Date.now() + maxAge * 1000 };
  await mkdir(sessionsDir, { recursive: true, mode: 0o700 });
  await writeFile(join(sessionsDir, hash(token)), JSON.stringify(session), {
    flag: "wx",
    mode: 0o600,
  });
  return token;
}

export async function getSessionUser(token: string) {
  const session = await readJson<Session>(join(sessionsDir, hash(token)));
  if (!session) return null;
  if (session.expiresAt <= Date.now()) {
    await deleteSession(token);
    return null;
  }
  return session.user;
}

export async function deleteSession(token: string) {
  await rm(join(sessionsDir, hash(token)), { force: true });
}
