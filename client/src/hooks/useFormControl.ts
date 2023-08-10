import { useState } from "react";

type FormState = Record<string, any>;

type OnChangeFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => void;
type OnSubmitFunction = (e: React.FormEvent<HTMLFormElement>) => void;
type OnResetFunction = (e: React.FormEvent<HTMLFormElement>) => void;

/**
 * @description Custom hook to handle form changes. It takes a initial state for the form, as well as a callback function to be executed when the form is submitted.
 * @param initialState - Initial state for the form, it must be an object with the form fields as keys.
 * @param callbackFn - Callback function to be executed when the form is submitted.
 * @returns An array with the onChange, onSubmit and value. The  onChange function event of the form fields.
 * The onSubmit is the function to be passed to the onSubmit event of the form.
 * The value is the current state of the form.
 * The onReset is the function to be passed to the onReset event of the form, reseting it to its initial state.
 * @example
 * const initialState = {
 * input: "",
 * password: "",
 * };
 * const handleSubmit = () => {
 * console.log("Form submitted");
 * };
 * const [onChange, onSubmit, value] = useFormChange<ILoginFormState>(
 * initialState,
 * handleSubmit
 * );
 */

export const useFormControl = <T extends FormState>(
  initialState: T,
  callbackFn: () => void
): {
  onChange: OnChangeFunction;
  onSubmit: OnSubmitFunction;
  onReset: OnResetFunction;

  value: T;
} => {
  const [value, setValue] = useState<T>(initialState);

  const onChange: OnChangeFunction = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit: OnSubmitFunction = (e) => {
    e.preventDefault();
    callbackFn();
  };

  const onReset: OnResetFunction = () => {
    setValue(initialState);
  };

  return { onChange, onSubmit, onReset, value };
};
