"use client"

type ConfirmSubmitButtonProps = {
  children: React.ReactNode
  message: string
  className?: string
  disabled?: boolean
}

export default function ConfirmSubmitButton({
  children,
  message,
  className = "",
  disabled = false,
}: ConfirmSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={className}
      onClick={(event) => {
        if (!window.confirm(message)) {
          event.preventDefault()
        }
      }}
    >
      {children}
    </button>
  )
}
