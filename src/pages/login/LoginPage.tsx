import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/logo/googleLogo.png';
import shootLogo from '../../../public/images/shoot/shootLogo.png';
import typography from '../../styles/typography';
import colors from '../../styles/color';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        const googleURL = import.meta.env.VITE_GOOGLE_URL;
        window.location.href = googleURL;
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-[494px] px-4">
                <img
                    src={shootLogo}
                    alt="shootLogo"
                    className="w-[315px] h-[66.23px] mb-[15.54px]"
                />
                <div className="w-full">
                    <div className="text-xl font-medium font-['Pretendard'] mb-[12px]">
                        Sign in to your account
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center gap-[8px] rounded-lg w-full h-[53px] hover:border-[1px] hover:border-[#9CFFBF]"
                        style={{
                            backgroundColor: colors.grayscale[80],
                            ...typography.title.small,
                        }}
                    >
                        <img src={googleLogo} className="w-[24px]" />
                        <span style={typography.title.small}>Continue With Google</span>
                    </button>

                    <div className="flex flex-row items-center justify-center mt-[16px]">
                        Don't have an account yet?
                        <button className="ml-1 underline" onClick={() => navigate('/signup')}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;