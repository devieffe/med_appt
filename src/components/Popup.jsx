import { useEffect, useRef } from 'react'

/**
 * Popup — generic lightbox overlay / modal container.
 *
 * Props:
 *   onClose    — called when backdrop or × button is clicked
 *   title      — optional heading text
 *   subtitle   — optional small text below title
 *   children   — modal body content
 *   maxWidth   — CSS max-width string, default '520px'
 *   closeBtn   — show × button, default true
 */
export default function Popup({ onClose, title, subtitle, children, maxWidth = '520px', closeBtn = true }) {
    const modalRef = useRef(null)
    const titleId = 'popup-title'

    // Close on Escape
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        // Move focus into modal on open
        modalRef.current?.focus()
        return () => document.removeEventListener('keydown', onKey)
    }, [onClose])

    const handleBackdrop = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <div
            className="popup-overlay"
            onClick={handleBackdrop}
            role="presentation"
        >
            <div
                ref={modalRef}
                className="popup-modal text-start"
                style={{ maxWidth }}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                {closeBtn && (
                    <button
                        type="button"
                        className="btn-close popup-close"
                        aria-label="Close"
                        onClick={onClose}
                    />
                )}
                {title && <h5 id={titleId} className="mb-1">{title}</h5>}
                {subtitle && <p className="text-muted small mb-3">{subtitle}</p>}
                {children}
            </div>
        </div>
    )
}
