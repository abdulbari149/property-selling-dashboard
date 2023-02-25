import React, { useState } from "react";
import InputField from "../shared/InputField";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import AuthHeader from "./Header";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex w-[30rem] max-w-[100%] flex-col justify-start px-5">
      <AuthHeader
        title="Welcome Back"
        subTitle="Welcome back! Please enter your details."
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="name@gmail.com"
        value={data.email}
        onChange={handleChange}
      />
      
      <InputField
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
        value={data.password}
        onChange={handleChange}
      />

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

        <Link href={"/auth/password/forget"} passHref>
          <p className="pl-1 capitalize text-[#475BE8]">Forgot Password</p>
        </Link>
      </div>

      <button className="btn-primary btn bg-[#475BE8] text-[17px] font-normal capitalize">
        Sign In
      </button>

      <button className="btn-outline btn mt-4 border-stone-300 font-normal">
        <FcGoogle size={25} />
        <span className="font-norml pl-2 text-[18px] capitalize">
          Sign in With Google
        </span>
      </button>

      <div className="mt-[20px] flex w-full max-w-md items-center justify-center ">
        Don&apos;t Have an account?{" "}
        <Link href={"/auth/signup"} passHref>
          <p className="pl-1 capitalize text-[#475BE8]">Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
