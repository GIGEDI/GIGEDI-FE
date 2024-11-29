import colors from '../../../styles/color';
import typography from '../../../styles/typography';
import shootLogo from '../../../../public/images/shoot/shootLogo.png';

const ConnectFigma: React.FC = () => {

    const handleFigmaLogin = () => {
        const figmaURL=import.meta.env.VITE_FIGMA_URL;
        window.location.href = figmaURL;
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center mt-[250px] overflow-hidden">
            <img src={shootLogo} className='h-[66px] mb-[55px]'/>
            <div style={typography.links.large}>SHOOT integrating with your FIGMA account</div>
            <button 
                className="flex items-center justify-center mt-[12px] gap-[8px] rounded-lg bg-[colors.grayscale[80]] w-full h-[53px] hover:border-[1px] hover:border-[#9CFFBF]"
                onClick={handleFigmaLogin}
                style={{ 
                    width: '494px', 
                    height: '53px', 
                    marginTop: '80px',
                    backgroundColor: colors.grayscale[80],
                    ...typography.title.xsmall
                }}
            >
                Connect FIGMA
            </button>
        </div>
    );
};

export default ConnectFigma;
