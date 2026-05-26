"use client";


import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/Navbar";

import { LoaderCircleIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function AuthenticatedLayout({ children }: Readonly<PropsWithChildren>) {
  const pathname = usePathname();
  const router = useRouter();
  const session = authClient.useSession();

  if (session.isPending) {
    return (
      <div className="container h-full">
        <main className="flex flex-col items-center justify-between">
          <p className="flex gap-2">
            <LoaderCircleIcon className="animate-spin" />
            <span>Authenticating...</span>
          </p>
        </main>
      </div>
    );
  }

  if (!session?.data) {
    const redirectQuery = new URLSearchParams();
    if (pathname !== "/") {
      redirectQuery.set("redirect", pathname);
    }

    router.push(redirectQuery.size > 0 ? `/login?${redirectQuery.toString()}` : "/login");
    return null;
  }

  if (session.data.session.expiresAt && session.data.session.expiresAt < new Date()) {
    router.push("/login?error=Session%20Expired");
    return null;
  }

  return (
    <main className="w-full bg-base-300">
      <Navbar />
      <div className="h-[calc(100vh-var(--navbar-height))]">{children}</div>
    </main>
  );
}

export default AuthenticatedLayout;
