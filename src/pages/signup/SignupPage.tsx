import shootLogo from '../../../public/images/shoot/shootLogo.png';
import colors from '../../styles/color';
import typography from '../../styles/typography';
import googleLogo from '../../assets/logo/googleLogo.png';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=354662253053-amfnieo2m0ohp831hr6i0a1mhveidqp8.apps.googleusercontent.com&redirect_uri=http://localhost:5173/login&response_type=code&scope=openid email profile&access_type=offline'
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" , top: '300px'}} 
            />
             <div className='flex flex-col mt-[15.54px] w-[494px]'>
            <div style={typography.title.medium}>Create your account</div>
            <button 
                className="flex items-center justify-center mt-[12px] gap-[8px] rounded-lg bg-[colors.grayscale[80]] w-full h-[53px] hover:border-[1px] hover:border-[#9CFFBF]"
                onClick={handleGoogleLogin}
                style={{ 
                    width: '100%', 
                    height: '53px', 
                    backgroundColor: colors.grayscale[80],
                    ...typography.title.small
                }}
            >
                <img src={googleLogo} alt='googleLogo' style={{ width: '24px', height: '24px' }} />
                <span style={typography.title.small}>Sign Up With Google</span>
            </button>
            
            <div className='flex flex-col items-center justify-center'>
                <div className='mt-[16px]'>
                    Already have an account?
                    <Link to="/signin" className="ml-1 underline">
                        Sign In
                    </Link>
                </div>
                <div className='mt-[40px]' style={typography.detail.small}>
                    <p className='text-center' style={{ color: colors.grayscale[70] }}>
                        By continuing, you agree to our
                    </p>
                    <p className='text-center' style={{ color: colors.grayscale[70] }}>
                        Terms of Services & Privacy Policy
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignupPage;
