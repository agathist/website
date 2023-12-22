import React from "react";
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import { Textarea } from "./Textarea.tsx";

export function ContactUsForm() {
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const result = {} as Record<string, unknown>;

      for (const [key, value] of formData) {
        result[key] = value;
      }

      console.log(result);
      // TODO: do something with the result
    },
    [],
  );

  return (
    <form
      className="flex flex-col gap-8"
      id="contact-us"
      onSubmit={handleSubmit}
    >
      <Input id="firstName" label="First Name" />
      <Input id="lastName" label="Last Name" />
      <Input id="email" label="Email" />
      <Textarea id="projectSummary" label="Tell us about your project" />

      <Button type="submit">Submit</Button>
    </form>
  );
}
