import type { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import AuthBackgroundImage from "public/assets/auth-bg-image.png";

const AuthLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-screen flex h-screen max-h-screen w-screen overflow-hidden">
      <div className="grid h-[100%] w-[100%] max-w-[100%] place-content-center lg:w-6/12 ">
        {children}
      </div>
      <div className="hidden aspect-video h-[100%] w-6/12 max-w-[50%] lg:inline-block">
        <Image
          src={AuthBackgroundImage}
          alt="Signup Page Image"
          loading="lazy"
          className="h-[100%] w-[100%] object-cover"
          role="presentation"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
