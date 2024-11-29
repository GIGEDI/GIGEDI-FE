import React, { useState } from 'react';
import ShootLogo from '../../../assets/logo/ShootLogo.svg';
import DiscordLogo from '../../../assets/logo/DiscordLogo.svg';
import SettingInput from './SettingInput';
import PopUp from './PopUp';

const UserSetting: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleDeleteClick = () => setShowPopup(true);
    const handleDisconnect = () => {
        setShowPopup(false);
    };
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <h2 className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">Personal Accounts</h2>
                <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-14" y1="0" x2="100%" y2="0" stroke="var(--Grayscale-75, #3E3F40)" strokeWidth="1" />
                </svg>
            
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <img src={ShootLogo} className="w-[24px] h-auto" />
                            <span className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">Use your accounts to get alarms from SHOOT</span>
                        </div>

                        <p className="w-[586px] text-white text-[13px] font-normal font-['Pretendard'] leading-tight">Personal Discord account is used to give you alarm from SHOOT.</p>                        

                        <div className="flex items-center gap-2">
                            <img src={DiscordLogo} className="w-[24px] h-auto mt-[37.5px]" />
                            <span className="text-Grayscale_0 text-[17px] mt-[37.5px] font-bold font-['Pretendard'] leading-relaxed">Use your accounts to get alarms from SHOOT</span>
                        </div>

                        <SettingInput/>
                        <button
                            className="w-[585px] mt-[10px] h-11 px-5 py-2.5 bg-[#3d3e3f] rounded-lg border border-[#525658] inline-flex items-center justify-center gap-2 hover:bg-[#4d4e4f] transition-colors duration-200"
                        >
                            <span className="text-[#f0f0f0] text-sm font-bold font-['Pretendard'] leading-[21px]">
                                Connect My Discord Account
                            </span>
                        </button>
                            
                        <h2 className="text-Grayscale_0 text-[17px] mt-28 font-bold leading-relaxed" style={{marginTop:'99px'}}>Delete Account</h2>
                        <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                            <line x1="-14" y1="0" x2="100%" y2="0" stroke="var(--Grayscale-75, #3E3F40)" strokeWidth="1" />
                        </svg>
                        <p className="flex w-[586px] text-white text-[13px] font-normal font-['Pretendard'] leading-tight">
                            After deleting your account, you’ll receive an email 
                            <br/>confirming that all your data have removed from our server. 
                        </p>                        
                        <div className="text-[13px] font-normal font-['Pretendard'] underline leading-tight cursor-pointer focus:outline-none"
                                onClick={handleDeleteClick}>
                                Delete my account
                        </div>
                    </div>
                </div>
            </div>
            <PopUp 
                isOpen={showPopup}
                onDisconnect={handleDisconnect}
                onClose={handleClosePopup}
            />
        </div>
    );
};

export default UserSetting;
