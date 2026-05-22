import Image from "next/image";
import { SocialButtons } from "@/components/SocialButtons";

async function LoginPage() {
  return (
    <section className="w-full h-full flex-col flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-primary">
        <Image
          src={"/icon.png"}
          width={128}
          height={128}
          priority
          alt="The Polaroid Project"
        />
        <h1 className="text-5xl mb-2">The Polaroid Project</h1>
        <p>
          Collecting & documenting pictures taken with our friends for the past
          decade
        </p>
      </div>
      <div className="flex grow justify-center items-center">
        <div className="translate-y-[-50%]">
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
