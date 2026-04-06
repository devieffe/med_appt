import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingsWidget from './BookingsWidget'

export default function AppLayout() {
    return (
        <div className="page-wrap">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <header>
                <Navbar />
            </header>
            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
            <BookingsWidget />
        </div>
    )
}
