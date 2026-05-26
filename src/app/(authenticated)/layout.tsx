import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/Navbar";

function AuthenticatedLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className="w-full bg-base-300">
      <Navbar />
      <div className="h-[calc(100vh-var(--navbar-height))]">{children}</div>
    </main>
  );
}

export default AuthenticatedLayout;
