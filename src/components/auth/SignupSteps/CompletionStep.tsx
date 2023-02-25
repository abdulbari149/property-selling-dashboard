import React from "react";
import InputField from "../../shared/InputField";
import AuthHeader from "../Header";

interface CompletionStepProps {
  data: { password: string; confirmPassword: string };
  updateData: (data: Partial<CompletionStepProps["data"]>) => void;
}

const CompletionStep: React.FunctionComponent<CompletionStepProps> = ({
  data,
  updateData,
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
        name="password"
        value={data.password}
        type="password"
        label="Password*"
        placeholder="*******"
        onChange={(e) => updateData({ password: e.target.value })}
      />

      <InputField
        label="Confirm Password*"
        type="password"
        placeholder="*******"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={(e) => updateData({ confirmPassword: e.target.value })}
      />

      <button className="btn mt-4 border-[#0f1016] bg-[#0f1016] text-[17px] font-normal capitalize hover:bg-[#2e2f35]">
        Submit
      </button>
    </div>
  );
};

export default CompletionStep;
