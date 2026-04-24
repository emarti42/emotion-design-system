import React from 'react'
import './DownloadButton.css'

type DownloadButtonProps = {
  fileUrl: string
  filename?: string
  label?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function DownloadButton({
  fileUrl,
  filename,
  label = 'Download',
  className = '',
  variant = 'primary',
}: DownloadButtonProps) {
  return (
    <a
      className={`download-button download-button--${variant} ${className}`}
      href={fileUrl}
      download={filename}
      aria-label={label}
      rel="noopener noreferrer"
    >
      <span className="download-button__label">{label}</span>
      <svg
        className="download-button__icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

