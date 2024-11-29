import React, { useState } from 'react';
import logoBack from '../../assets/logoBack.svg';
import UserProfile from './componenets/UserProfile';
import UserSetting from './componenets/UserSetting';

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile');

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-center bg-cover">
            <img
                src={logoBack}
                alt="Profile Logo"
                className="absolute w-[460px] h-auto mx-auto justify-center"
            />

            <div className="relative w-[1064px] h-[722px] bg-[#1d1e1e]/70 rounded-[10px] border border-[#9bffbe] p-12">
                <div className="grid grid-cols-[250px_1fr] gap-8 h-full">
                    <div className="space-y-[20px]">
                        <h1 className="text-Grayscale_0 text-[25px] font-bold font-['Pretendard'] leading-[37.50px]">My Page</h1>
                        <nav className="space-y-[14px]">
                            <div
                                className={`text-[19px] font-bold font-['Pretendard'] leading-7 ${activeTab === 'profile' ? 'text-[#20f5bd]' : 'text-Grayscale_0'}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                Profile
                            </div>
                            <div
                                className={`text-[19px] font-bold font-['Pretendard'] leading-7 ${activeTab === 'settings' ? 'text-[#20f5bd]' : 'text-Grayscale_0'}`}
                                onClick={() => setActiveTab('settings')}
                            >
                                Settings
                            </div>
                        </nav>
                    </div>

                    {activeTab === 'profile' ? <UserProfile /> : <UserSetting />}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
