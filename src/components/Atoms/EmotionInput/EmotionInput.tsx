import { ChangeEvent } from 'react'
import './EmotionInput.css'

type InputState = 'default' | 'error' | 'success'

type EmotionInputProps = {
  id?: string
  label?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  state?: InputState
  errorMessage?: string
  type?: string
  className?: string
  disabled?: boolean
}

export default function EmotionInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  state = 'default',
  errorMessage,
  type = 'text',
  className = '',
  disabled = false,
}: EmotionInputProps) {
  const inputId = id || `emotion-input-${Math.random().toString(36).slice(2, 9)}`
  const errorId = `${inputId}-error`

  const stateClass =
    state === 'error' ? 'emotion-input--error' : state === 'success' ? 'emotion-input--success' : ''

  return (
    <div className={`emotion-input ${stateClass} ${className}`.trim()}>
      {label ? (
        <label className="emotion-input__label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className="emotion-input__control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={state === 'error' ? 'true' : 'false'}
        aria-describedby={state === 'error' && errorMessage ? errorId : undefined}
        disabled={disabled}
      />

      {state === 'error' && errorMessage ? (
        <div id={errorId} className="emotion-input__error" role="alert">
          {errorMessage}
        </div>
      ) : null}
    </div>
  )
}
