import { NextPage } from "next";
import Image from "next/image";
import AuthBackgroundImage from "public/assets/auth-bg-image.png";
import { FcGoogle } from 'react-icons/fc'

const Signup: NextPage = () => {
  return (
    <div className="max-w-screen flex h-screen max-h-screen w-screen overflow-hidden">
      <div className="grid h-[100%] w-[100%] lg:w-6/12 max-w-[100%] place-content-center ">
        <div className="flex w-[25rem] max-w-[100%] flex-col justify-start px-5">
          <div className="space-y-[10px]">
            <h1 className="font-bold text-[35px]">Welcome Back</h1>
            <p className="font-normal text-[16px] text-stone-400 ">
              Welcome back! Please enter your details.
            </p>
          </div>

          <div className="c form-control mt-[32px] w-full">
            <label className="label">
              <span className="label-text text-[16px]">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-bordered input w-full max-w-md"
            />
          </div>

          <div className="form-control mt-[15px] w-full max-w-md">
            <label className="label">
              <span className="label-text text-[16px]">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="input-bordered input w-full max-w-md"
            />
          </div>

          <div className="my-4 flex items-center justify-between">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  className="checkbox-primary checkbox"
                />
                <span className="label-text pl-2">Remember me</span>
              </label>
            </div>

            <p className="capitalize text-[#475BE8]">Forgot Password</p>
          </div>

          <button className="btn-primary btn bg-[#475BE8] font-normal text-[17px] capitalize">
            Sign In
          </button>

          <button className="btn-outline btn mt-4 font-normal border-stone-300">
            <FcGoogle size={25} />
            <span className="text-[18px] capitalize font-norml pl-2">Sign in With Google</span>
          </button>

          <div className="mt-[20px] flex w-full max-w-md justify-center items-center ">
            Don&apos;t Have an account? <p className="pl-1 capitalize text-[#475BE8]">Sign up</p>
          </div>
        </div>
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

export default Signup;
