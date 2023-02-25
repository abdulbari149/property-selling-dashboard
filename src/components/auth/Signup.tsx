import React, { useRef, useState } from "react";
import BreadCrumb from "./BreadCrumb";
import RegisterationStep from "./SignupSteps/RegisterationStep";
import BasicInformationStep from "./SignupSteps/BasicInformationStep";
import CompletionStep from "./SignupSteps/CompletionStep";
import { type PhoneNumber, type StepsType } from "./types";

interface SignupData {
  phone: PhoneNumber;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const steps = [
  {
    id: 1,
    value: "Register",
    caret: true,
  },
  {
    id: 2,
    value: "Basic Information",
    caret: true,
  },
  {
    id: 3,
    value: "Completion",
  },
];

const Signup = () => {
  const [data, setData] = useState<SignupData>({
    phone: "PK",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (data: Partial<SignupData>) => {
    setData((prevData) => ({ ...prevData, ...data }));
  };
  const [currentStep, setCurrentStep] = useState<StepsType>("registeration");
  const noOfStepsCompletedRef = useRef(1);

  const handleStep = (nextStep: StepsType) => {
    noOfStepsCompletedRef.current += 1;
    setCurrentStep(nextStep);
  };

  const StepsComponent: Record<StepsType, React.ReactNode> = {
    registeration: (
      <RegisterationStep
        data={{ email: data.email, phone: data.phone }}
        updateData={handleChange}
        handleStep={handleStep}
      />
    ),
    "basic-information": (
      <BasicInformationStep
        data={{ firstName: data.firstName, lastName: data.lastName }}
        updateData={handleChange}
        handleStep={handleStep}
      />
    ),
    completion: (
      <CompletionStep
        data={{
          password: data.password,
          confirmPassword: data.confirmPassword,
        }}
        updateData={handleChange}
      />
    ),
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex w-full items-center justify-between px-2 pt-[50px]">
        {steps.map((step) => (
          <BreadCrumb
            key={step.id}
            {...step}
            active={noOfStepsCompletedRef.current >= step.id}
          />
        ))}
      </div>
      {currentStep in StepsComponent ? StepsComponent[currentStep] : null}
    </div>
  );
};

export default Signup;
