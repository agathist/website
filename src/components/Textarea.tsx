export type TextareaProps = {
  disabled?: boolean
  id?: string
  label?: string
  required?: boolean
  rows?: number
}

export function Textarea({
  disabled = false,
  id,
  label,
  required = false,
  rows = 4,
}: TextareaProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && <div className="text-xl">{label}</div>}

      <textarea
        className="w-full rounded bg-white p-2 text-black disabled:opacity-50"
        disabled={disabled}
        id={id}
        name={id}
        required={required}
        rows={rows}
      ></textarea>
    </label>
  )
}
