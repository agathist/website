import React from "react";

export type InputProps = {
  id?: string;
  label?: string;
  type?: "text";
};

export function Input({ id, label, type = "text" }: InputProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && <div>{label}</div>}
      <input
        className="w-full rounded bg-white p-2 text-black"
        id={id}
        name={id}
        type={type}
      />
    </label>
  );
}
