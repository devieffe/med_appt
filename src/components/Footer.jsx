import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="py-4 mt-4" style={{ background: '#ffffff', color: '#212529' }}>
            <div className="container py-4">
                <div className="row g-4 pt-1 pb-4 justify-content-between">
                    <div className="col-md-5">
                        <h5 style={{ color: '#212529' }}>StayHealthy</h5>
                        <p className="mb-4">Your trusted guide to health. We connect you with top doctors and empower better decisions every day.</p>
                        <small>&copy; 2026 Stay Healthy. All rights reserved.</small>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <h5 style={{ color: '#212529' }}>Quick Links</h5>
                        <ul className="list-unstyled mb-0" aria-label="Footer navigation">
                            <li><Link to="/" className="text-decoration-none" style={{ color: '#212529' }}>Home</Link></li>
                            <li><Link to="/services" className="text-decoration-none" style={{ color: '#212529' }}>Services</Link></li>
                            <li><Link to="/appointments" className="text-decoration-none" style={{ color: '#212529' }}>Appointments</Link></li>
                            <li><Link to="/health-blog" className="text-decoration-none" style={{ color: '#212529' }}>Health Blog</Link></li>
                            <li><Link to="/reviews" className="text-decoration-none" style={{ color: '#212529' }}>Reviews</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 style={{ color: '#212529' }}>Contact us</h5>
                        <p className="mb-1">Email: info@stayhealthy.com</p>
                        <p className="mb-2">Phone: +1 (555) 123-4567</p>
                        <div>
                            <a href="#" className="me-3" style={{ color: '#212529' }} aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="me-3" style={{ color: '#212529' }} aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" style={{ color: '#212529' }} aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
