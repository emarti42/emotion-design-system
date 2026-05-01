import React, { useState } from 'react'
import './Accordion.css'
import Card from '../../Molecules/Card/Card'

type AccordionItem = {
  id: string
  title: string
  description: string
  imageUrl?: string
  fileUrl?: string
  filename?: string
  showAction?: boolean
}

type AccordionProps = {
  items: AccordionItem[]
}

// Organism: composes Card molecules and provides interactive behavior.
export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items.length ? items[0].id : null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="accordion" role="list">
      {items.map((it) => {
        const isOpen = openId === it.id
        const panelId = `accordion-panel-${it.id}`
        const btnId = `accordion-btn-${it.id}`

        return (
          <div className="accordion__item" key={it.id} role="listitem">
            <div className="accordion__header">
              <button
                id={btnId}
                type="button"
                className={`accordion__button ${isOpen ? 'accordion__button--open' : ''}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(it.id)}
              >
                <span className="accordion__title">{it.title}</span>
                <span className="accordion__chev" aria-hidden>{isOpen ? '▾' : '▸'}</span>
              </button>
            </div>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
            >
              <Card
                title={it.title}
                description={it.description}
                imageUrl={it.imageUrl}
                fileUrl={it.fileUrl}
                filename={it.filename}
                showAction={it.showAction}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
