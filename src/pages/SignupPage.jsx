import Sign_Up from '../components/Sign_Up'

import usePageTitle from '../hooks/usePageTitle'

export default function SignupPage() {
    usePageTitle('Sign Up', 'Create your StayHealthy account to access personalised wellness tools and appointment booking.')
    return (
        <>
            <div className="container mt-4">
                <div className="hero">
                    <h1>Create Your Account</h1>
                    <p>Join Stay Healthy to unlock personalized wellness, appointments, and expert support.</p>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <Sign_Up />
                    </div>
                </div>
            </div>
        </>
    )
}
