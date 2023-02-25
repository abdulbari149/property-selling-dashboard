import { type E164Number } from "libphonenumber-js/types";

export type PhoneNumber = E164Number | undefined;
export type StepsType = "registeration" | "basic-information" | "completion";
