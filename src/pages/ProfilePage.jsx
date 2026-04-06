import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import usePageTitle from '../hooks/usePageTitle'

export default function ProfilePage() {
    usePageTitle('My Profile', 'Manage your StayHealthy profile, personal details, and account settings.')
    const { isAuthenticated } = useSelector((state) => state.auth)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="container mt-4">
            <div className="hero mb-4">
                <h1>My Profile</h1>
                <p>View and edit your account details.</p>
            </div>
            <ProfileCard />
        </div>
    )
}
