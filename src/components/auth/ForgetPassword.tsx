import React from "react";
import InputField from "../shared/InputField";

const ForgetPassword = () => {
  return (
    <div className="flex w-[25rem] max-w-[100%] flex-col justify-start px-5">
      <div className="space-y-[10px]">
        <h1 className="text-center text-[35px] font-bold lg:text-start">
          Welcome Back
        </h1>
        <p className="text-center text-[16px] font-normal text-stone-400 lg:text-start">
          Welcome back! Please enter your details.
        </p>
      </div>

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="name@gmail.com"
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

        <p className="capitalize text-[#475BE8]">Forgot Password</p>
      </div>

      <button className="btn-primary btn bg-[#475BE8] text-[17px] font-normal capitalize">
        Submit
      </button>


      <div className="mt-[20px] flex w-full max-w-md items-center justify-center ">
        Don&apos;t Have an account?{" "}
        <p className="pl-1 capitalize text-[#475BE8]">Sign up</p>
      </div>
    </div>
  );
};

export default ForgetPassword;
