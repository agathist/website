import React from "react";

export type TextareaProps = {
  id?: string;
  label?: string;
  rows?: number;
};

export function Textarea({ id, label, rows = 4 }: TextareaProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && <div>{label}</div>}
      <textarea
        className="w-full rounded p-2 text-black"
        id={id}
        name={id}
        rows={rows}
      ></textarea>
    </label>
  );
}
