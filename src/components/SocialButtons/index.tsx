"use client";

import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export function SocialButtons() {
  return (
    <div className="flex flex-col gap-4 bg-base-100 p-4">
      <button
        type="button"
        className="btn btn-primary btn-outline w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
          })
        }
      >
        <FaGoogle className="size-5" />
        Continue with Google
      </button>
      {/* <button
        type="button"
        className="btn btn-primary btn-outline w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "apple",
          })
        }
      >
        <FaApple className="size-5" />
        Continue with Apple
      </button>
      <button
        type="button"
        className="btn btn-primary btn-outline w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "microsoft",
          })
        }
      >
        <FaMicrosoft className="size-5" />
        Continue with Microsoft
      </button>
      <button
        type="button"
        className="btn btn-primary btn-outline w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "github",
          })
        }
      >
        <FaGithub className="size-5" />
        Continue with GitHub
      </button> */}
    </div>
  );
}
