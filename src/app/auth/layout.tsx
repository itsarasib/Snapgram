"use client";
import Image from "next/image";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const isAutheticated = false;
  return (
    <div>
      {isAutheticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            {children}
          </section>

          <Image
            src={"/assets/images/side-img.svg"}
            alt="side bar"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            width={50}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
