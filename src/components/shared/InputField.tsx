import React, { useState, type HTMLInputTypeAttribute } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { type E164Number } from "libphonenumber-js/types";

type CommonFieldProps = {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

interface InputFieldProps {
  type: "text" | "email" | "datetime" | "number";
}

interface PhoneFieldProps {
  type: "phone";
  onChange: (value: E164Number) => void;
}

interface PasswordFieldProps {
  type: "password";
}

const InputField: React.FC<InputFieldProps & CommonFieldProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <div className="c form-control  mt-[15px] w-full">
      <label className="label">
        <span className="label-text text-[16px]">{label}</span>
      </label>
      <input
        {...inputProps}
        className="input-bordered input w-full max-w-md focus:outline-none"
      />
    </div>
  );
};

const PhoneField: React.FunctionComponent<
  PhoneFieldProps & CommonFieldProps
> = ({ onChange, label, ...inputProps }) => {
  return (
    <div className="form-control mt-[15px] w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="input-group max-w-md rounded-lg border-[1px] border-stone-300 pl-[4px]">
        <PhoneInput
          defaultCountry="US"
          onCountryChange={(country) => console.log(country)}
          onChange={(phone) => {
            if (phone) onChange(phone);
            else return;
          }}
          className="input w-full max-w-md focus:outline-none"
          numberInputProps={{
            className: "focus:outline-none hover:outline-none",
            ...inputProps,
          }}
          smartCaret
          international
          withCountryCallingCode
          countryCallingCodeEditable={false}
          focusInputOnCountrySelection
          autoFocus
        />
      </div>
    </div>
  );
};

const PasswordField: React.FunctionComponent<
  PasswordFieldProps & CommonFieldProps
> = ({ label, ...inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="c form-control mt-[15px] w-full focus:outline-none">
      <label className="label">
        <span className="label-text text-[16px]">{label}</span>
      </label>
      <div className="input-group w-full max-w-md items-center rounded-lg border-[1px] border-stone-300">
        <input
          {...inputProps}
          type={showPassword ? "text" : "password"}
          className="input w-full focus:outline-none"
        />
        <button
          onClick={() =>
            setShowPassword((prevShowPassword) => !prevShowPassword)
          }
          className="mx-3 border-none text-stone-500 outline-none"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} color="inherit" />
          ) : (
            <AiOutlineEye size={20} color="inherit" />
          )}
        </button>
      </div>
    </div>
  );
};

type InputFieldContainerProps = CommonFieldProps &
  (InputFieldProps | PasswordFieldProps | PhoneFieldProps);

const InputFieldContainer: React.FC<InputFieldContainerProps> = (props) => {
  if (props.type === "phone") {
    return <PhoneField {...props} />;
  } else if (props.type === "password") {
    return <PasswordField {...props} />;
  } else {
    return <InputField {...props} />;
  }
};

export default InputFieldContainer;
