export type InputProps = {
  disabled?: boolean
  id?: string
  label?: string
  required?: boolean
  type?: HTMLInputElement['type']
} & Record<string, unknown>

export function Input({
  disabled = false,
  id,
  label,
  required = false,
  type = 'text',
  ...rest
}: InputProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      {label && <div className="text-xl">{label}</div>}

      <input
        {...rest}
        className="w-full rounded bg-white p-2 text-black disabled:opacity-50"
        disabled={disabled}
        id={id}
        name={id}
        required={required}
        type={type}
      />
    </label>
  )
}
