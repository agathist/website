import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: HTMLButtonElement['type']
}

const DISABLED_STYLES = {
  opacity: 0.8,
  cursor: 'not-allowed',
}

export function Button({
  children,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  const handleClick = React.useCallback(() => {
    if (disabled) return

    onClick?.()
  }, [disabled, onClick])

  return (
    <button
      /**
       * It's more accessible to use aria-disabled than the disabled attribute,
       * according to https://css-tricks.com/making-disabled-buttons-more-inclusive
       *
       * Seems that using the `disabled` attr will hide it from screen readers.
       * This does mean we need some style workarounds though
       */
      aria-disabled={disabled}
      className="relative rounded bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-[length:115%] px-4 py-2 transition-all active:top-[1px]"
      onClick={handleClick}
      style={disabled ? DISABLED_STYLES : {}}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
