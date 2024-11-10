import React from "react";
// import Sidebar from "@/components/Sidebar";
// import MobileNavigation from "@/components/MobileNavigation";
// import Header from "@/components/Header";
// import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { getCurrentUser } from "@/lib/actions/user.action";
import Sidebar from "@/components/Sidebar";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/signin");

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} /> 

      <section className="flex h-full flex-1 flex-col">
        <div className="main-content">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;
