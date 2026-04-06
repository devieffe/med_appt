import { useEffect } from 'react'

const SITE = 'StayHealthy'

/**
 * Sets document.title and the meta description for the current page.
 * @param {string} title   — Page-specific title (will be appended with "| StayHealthy")
 * @param {string} [description] — Optional meta description override
 */
export default function usePageTitle(title, description) {
    useEffect(() => {
        document.title = title ? `${title} | ${SITE}` : SITE

        if (description) {
            let tag = document.querySelector('meta[name="description"]')
            if (tag) tag.setAttribute('content', description)
        }

        return () => {
            document.title = SITE
        }
    }, [title, description])
}
