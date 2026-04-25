import React from 'react'
import './Card.css'
import DownloadButton from '../../Atoms/DownloadButton/DownloadButton'

type CardProps = {
  title: string
  description: string
  imageUrl?: string
  fileUrl?: string
  filename?: string
  showAction?: boolean
}

export default function Card({ title, description, fileUrl, filename }: CardProps) {
  const showAction = typeof (arguments[0] as CardProps).showAction === 'undefined' ? true : (arguments[0] as CardProps).showAction

  return (
    <article className="card" aria-labelledby="card-title">
      <header className="card__header">
        {(arguments[0] as CardProps).imageUrl ? (
          <img src={(arguments[0] as CardProps).imageUrl} alt="card visual" className="card__image" />
        ) : null}
        <h3 id="card-title" className="card__title">{title}</h3>
      </header>

      <section className="card__body">
        <p className="card__description">{description}</p>
      </section>

      <footer className="card__footer">
        {showAction && fileUrl ? (
          <div className="card__action">
            <DownloadButton fileUrl={fileUrl} filename={filename} label="Download" />
          </div>
        ) : null}
      </footer>
    </article>
  )
}
