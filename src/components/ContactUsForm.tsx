import React from "react";
import { z } from "zod";
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import { Textarea } from "./Textarea.tsx";

// Zod helpers/values
const required_error = "Field is required";
const required = { required_error };
const cannotBeEmpty = "Field cannot be empty";

const formSchema = z.object({
  firstName: z.string(required).min(1, cannotBeEmpty).max(64),
  lastName: z.string(required).min(1, cannotBeEmpty).max(64),
  email: z.string(required).min(1, cannotBeEmpty).email(),
  projectSummary: z.string(required).min(1, cannotBeEmpty).max(2500),
});

// Coding these as data makes it easier to map errors to each field
const FIELDS = [
  { Component: Input, id: "firstName", label: "First Name" },
  { Component: Input, id: "lastName", label: "Last Name" },
  { Component: Input, id: "email", label: "Email", type: "email" },
  {
    Component: Textarea,
    id: "projectSummary",
    label: "Tell us about your project",
  },
];

// TODO: Remove when real API exists
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SubmitState = "idle" | "pending";

const BUTTON_TEXT: Record<SubmitState, string> = {
  idle: "Submit",
  pending: "Submitting...",
};

export function ContactUsForm() {
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");

  const [errors, setErrors] = React.useState<
    { key: string; message: string }[]
  >([]);

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      /**
       * We have to save the current target as it is the form, and we will lose
       * this reference by the time we're resetting it if we don't.
       *
       * Another option would be to use a ref on the form
       */
      const target = e.currentTarget;

      // Clear previous errors
      setErrors([]);

      // Get the key/values of the form
      const formData = Object.fromEntries(new FormData(target));

      // Validate the result
      const result = formSchema.safeParse(formData);

      if (!result.success) {
        const nextErrors = result.error.issues.map((issue) => ({
          key: String(issue.path.at(0)),
          message: issue.message,
        }));

        setErrors(nextErrors);
        return;
      }

      setSubmitState("pending");

      // TODO: submit the form to the API here
      await wait(1000);

      // TODO: Need an API success/fail state + messages

      console.log(result);
      target.reset();
      setSubmitState("idle");
    },
    [],
  );

  return (
    <form
      className="flex flex-col gap-4"
      id="contact-us"
      onSubmit={handleSubmit}
    >
      {FIELDS.map(({ Component, ...fieldProps }) => (
        <div key={fieldProps.id}>
          <Component {...fieldProps} />

          {/**
           * Having the potentially empty div here helps with spacing and
           * less layout shift when errors are present
           *
           * TODO: might make sense to move errors to a prop to the inputs
           */}
          <div className="flex flex-col gap-1 py-2">
            {errors
              .filter((err) => err.key === fieldProps.id)
              .map((err) => (
                <div className="text-sm text-pink-500" key={err.message}>
                  {err.message}
                </div>
              ))}
          </div>
        </div>
      ))}

      <Button disabled={submitState === "pending"} type="submit">
        {BUTTON_TEXT[submitState]}
      </Button>
    </form>
  );
}
