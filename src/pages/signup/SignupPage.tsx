import shootLogo from '../../../public/images/shoot/shootLogo.png';
import colors from '../../styles/color';
import typography from '../../styles/typography';
import googleLogo from '../../assets/logo/googleLogo.png';
import { Link } from 'react-router-dom';

const SignupPage = () => {
   const handleGoogleLogin = () => {
    const googleURL = import.meta.env.VITE_GOOGLE_URL;
    window.location.href = googleURL;
   };

   return (
    <div className="fixed inset-0 flex flex-col items-center mt-[250px] overflow-hidden">
           <div className="flex flex-col items-center w-full max-w-[494px] px-4">
               <img 
                   src={shootLogo} 
                   alt="shootLogo" 
                   className="w-[315px] h-[66.23px] mb-[55.54px]"
               />
               <div className='flex flex-col w-full'>
                   <div className='mb-[12px]' style={typography.title.medium}>
                       Create your account
                   </div>
                   <button 
                       className="flex items-center justify-center gap-[8px] rounded-lg bg-Grayscale-80 w-full h-[56px] hover:border-[1px] hover:border-[#9CFFBF]"
                       onClick={handleGoogleLogin}
                   >
                       <img src={googleLogo} alt='googleLogo' className="w-[24px] h-[24px]" />
                       <span style={typography.title.small}>Sign Up With Google</span>
                   </button>
                   
                   <div className='flex flex-col items-center justify-center mt-[16px]'>
                       <div>
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
       </div>
   );
};

export default SignupPage;