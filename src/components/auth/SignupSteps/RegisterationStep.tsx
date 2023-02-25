import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../shared/InputField";
import AuthHeader from "../Header";
import type { StepsType, PhoneNumber } from "../types";
import { isValidPhoneNumber } from "react-phone-number-input";

interface RegisterStepProps {
  data: {
    email: string;
    phone: PhoneNumber;
  };
  updateData: (newData: Partial<RegisterStepProps["data"]>) => void;
  handleStep: (nextStep: StepsType) => void;
}

const RegisterStep: React.FC<RegisterStepProps> = ({
  data,
  updateData,
  handleStep,
}) => {
  return (
    <div className="my-auto flex w-[30rem] max-w-[100%] flex-col justify-start px-5">
      <AuthHeader
        title="Create An Account"
        subTitle={
          "Lets begin Onboarding your business to manage and\nsell properties"
        }
      />

      <InputField
        name="phone"
        value={data.phone}
        type="phone"
        label="Phone Number*"
        onChange={(phone) => {
          if (isValidPhoneNumber(phone.toString())) {
            updateData({ phone: phone as PhoneNumber });
          }
        }}
      />

      <InputField
        label="Email*"
        type="email"
        placeholder="name@gmail.com"
        name="email"
        value={data.email}
        onChange={(e) => updateData({ email: e.target.value })}
      />

      <button
        onClick={() => handleStep("basic-information")}
        className="btn mt-4 border-[#0f1016] bg-[#0f1016] text-[17px] font-normal capitalize hover:bg-[#2e2f35]"
      >
        Next
      </button>

      <button className="btn-outline btn mt-4 border-stone-300 font-normal">
        <FcGoogle size={25} />
        <span className="font-norml pl-2 text-[18px] capitalize">
          Sign in With Google
        </span>
      </button>

      <div className="mt-[20px] flex w-full max-w-md items-center justify-center ">
        Already have an account?{" "}
        <Link href={"/auth/login"} passHref>
          <p className="pl-1 capitalize text-[#475BE8]">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterStep;
