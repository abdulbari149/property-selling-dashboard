import React from "react";
import InputField from "../../shared/InputField";
import AuthHeader from "../Header";
import { StepsType } from "../types";

interface BasicInformationStepProps {
  data: { firstName: string; lastName: string };
  updateData: (data: Partial<BasicInformationStepProps["data"]>) => void;
  handleStep: (nextStep: StepsType) => void;
}

const BasicInformationStep: React.FunctionComponent<
  BasicInformationStepProps
> = ({ data, handleStep, updateData }) => {
  return (
    <div className="my-auto flex w-[30rem] max-w-[100%] flex-col justify-start px-5">
      <AuthHeader
        title="Create An Account"
        subTitle={
          "Lets begin Onboarding your business to manage and\nsell properties"
        }
      />

      <InputField
        name="firstName"
        value={data.firstName}
        type="text"
        label="First Name*"
        placeholder="John"
        onChange={(e) => updateData({ firstName: e.target.value })}
      />

      <InputField
        label="Last Name*"
        type="text"
        placeholder="bob"
        name="lastName"
        value={data.lastName}
        onChange={(e) => updateData({ lastName: e.target.value })}
      />

      <button
        onClick={() => handleStep("completion")}
        className="btn mt-4 border-[#0f1016] bg-[#0f1016] text-[17px] font-normal capitalize hover:bg-[#2e2f35]"
      >
        Next
      </button>
    </div>
  );
};

export default BasicInformationStep;
