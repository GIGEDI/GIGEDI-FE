import colors from '../../../styles/color';
import typography from '../../../styles/typography';
import shootLogo from '../../../../public/images/shoot/shootLogo.png';
import { Link } from 'react-router-dom';

const ConnectDiscord = () => {
    
    const handleDiscordLogin = () => {
        const discordURL=import.meta.env.VITE_DISCORD_URL;
        window.location.href = discordURL;
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center mt-[250px] overflow-hidden">
            <img src={shootLogo} className='h-[66px] mb-[55px]'/>

            <div style={typography.title.medium}> 
                <p className='text-center' >
                    SHOOT intergrating with your DISCORD account
                </p>
                <p className='text-center'>
                    to get alarm from SHOOT
                </p>
            </div>
            <button 
                onClick={handleDiscordLogin}
                style={{ 
                    width: '454.95px', 
                    height: '53px', 
                    marginTop: '80px', 
                    borderRadius:'8px',
                    backgroundColor: colors.grayscale[80],
                    ...typography.title.xsmall
                }}
            >
                Connect DISCORD
            </button>
            <Link to ='/'>
                <button 
                    style={{ 
                        width: '454.95px', 
                        height: '53px', 
                        marginTop: '40px', 
                        borderRadius:'8px',
                        backgroundColor: colors.primary[50],
                        ...typography.title.xsmall,
                        color: colors.grayscale[90]
                    }}
                >
                    Do it later
                </button>
            </Link>
            
        </div>
    );
};

export default ConnectDiscord;