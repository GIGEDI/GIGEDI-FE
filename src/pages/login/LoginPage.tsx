import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/logo/googleLogo.png';
import shootLogo from '../../../public/images/shoot/shootLogo.png';
import typography from '../../styles/typography';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        const googleURL = import.meta.env.VITE_GOOGLE_URL;
        window.location.href = googleURL;
    };

    return (
        <div className="flex flex-col items-center mt-[220px] w-full min-h-screen overflow-hidden">
            <img
                src={shootLogo}
                alt="shootLogo"
                className="w-[315px] h-[66.23px] mb-[55.54px]"
            />
            <div className="flex flex-col">
                <div style={typography.title.medium}>Sign in to your account</div>

                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center mt-[12px] gap-[8px] rounded-lg bg-Grayscale-80 w-[494px] h-[56px] hover:border-[1px] hover:border-[#9CFFBF]"
                >
                    <img src={googleLogo} className="w-[24px]" />
                    <span style={typography.title.small}>Continue With Google</span>
                </button>

                <div className="flex flex-row items-center justify-center mt-[16px] text-center">
                    Don't have an account yet?
                    <button className="ml-1 underline" onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;