import { Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import WelcomeBanner from "@/components/WelcomeBanner";

export default function DashboardPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md antialiased">
      <SiteHeader />
      <main className="flex-1 px-margin-mobile md:px-margin py-space-xl relative z-10">
        <Suspense fallback={null}>
          <WelcomeBanner />
        </Suspense>
      </main>
    </div>
  );
}
