import React, { useState, useEffect } from 'react';
import figmaLogo from '../../../assets/logo/figmaLogo.png';
import add from '../../../assets/add.svg';
import deleteIcon from '../../../assets/delete.svg';
import PopUp from './PopUp';
import { figmaCheckApi } from '../../../api/figmaCheckApi';
import { figmaDisconnectApi } from '../../../api/figmaDisconnectApi';

interface FigmaInfo {
   figmaId: string;
   email: string;
}

const UserProfile: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [figmaInfo, setFigmaInfo] = useState<FigmaInfo | null>(null);
    const [inputs, setInputs] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFigmaAccountInfo = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                console.log("Not found Figma account information");
                setLoading(false);
                return;
            }

            try {
                const data = await figmaCheckApi(token);
                console.log("Figma account info:", data);
                setFigmaInfo(data);
                setInputs([data.email]);
            } catch (err) {
                console.error("Error fetching figma info:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFigmaAccountInfo();
    }, []);

    const handleAddInput = () => {
        const figmaURL = import.meta.env.VITE_FIGMA_URL;
        window.location.href = figmaURL;
        setInputs([...inputs, ""]);
    };

    const handleDeleteInput = (index: number) => {
        setInputs(inputs.filter((_, i) => i !== index));
    };

    const handleDeleteClick = () => setShowPopup(true);

    const handleDisconnect = async () => {
        setShowPopup(false);
        const deleteFigmaAccountInfo = async () => {
            console.log("deleteFigmaAccountInfo");
            const token = localStorage.getItem("accessToken");
            if (!token) {
                console.log("Not found Figma account information");
                setLoading(false);
                return;
            }
            
            try {
                const data = await figmaDisconnectApi(token, figmaInfo!.email);
                console.log("Figma account disconnected:", data);
                setFigmaInfo(null);
                setInputs([]);
            } catch (err) {
                console.error("Error disconnecting Figma account:", err);
            } finally {
                setLoading(false);
            }
        };

        await deleteFigmaAccountInfo();
    };

    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <h2 className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">
                    Personal Accounts
                </h2>
                <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-14" y1="0" x2="100%" y2="0" stroke="var(--Grayscale-75, #3E3F40)" strokeWidth="1" />
                </svg>
    
                <div className="space-y-4">
                    <div className="flex flex-col ml-0 space-y-2" style={{ marginLeft: 0 }}>
                        <div className="flex items-center gap-2">
                            <img src={figmaLogo} className="w-[24px] h-auto" />
                            <span className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">
                                FIGMA Account
                            </span>
                        </div>
    
                        {figmaInfo?.email ? (
                            <>
                                <p className="mt-5 text-[17px] font-normal font-['Pretendard'] leading-relaxed text-Grayscale-60">
                                    {figmaInfo.email}
                                </p>
                                <div className="flex flex-col items-start gap-2 mt-[10px]">
                                    <button
                                        className="text-[13px] text-white underline"
                                        onClick={handleDeleteClick}
                                    >
                                        Disconnect account
                                    </button>
                                    <button
                                        className="text-[13px] text-white underline"
                                        onClick={handleAddInput}
                                    >
                                        Add another figma account
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                {inputs.map((input, index) => (
                                    <div key={index} className="relative w-[584px] mt-4">
                                        <input
                                            type="email"
                                            value={input || (loading ? "Loading..." : "")}
                                            placeholder="Enter your email"
                                            className="w-full h-[62px] px-5 py-[18px] rounded-lg border border-[#525658] text-[#6f7274] text-[17px] font-normal font-['Pretendard'] leading-relaxed placeholder:text-[#6f7274] bg-transparent outline-none"
                                            onChange={(e) => {
                                                const newInputs = [...inputs];
                                                newInputs[index] = e.target.value;
                                                setInputs(newInputs);
                                            }}
                                        />
                                        <button
                                            className="absolute transform -translate-y-1/2 right-4 top-1/2"
                                            onClick={() => handleDeleteInput(index)}
                                        >
                                            <img src={deleteIcon} className="w-[24px] h-auto" />
                                        </button>
                                    </div>
                                ))}
    
                                {inputs.length < 2 && (
                                    <button
                                        className="w-[585px] mt-[10px] h-11 px-5 py-2.5 bg-[#3d3e3f] rounded-lg border border-[#525658] inline-flex items-center justify-center gap-2 hover:bg-[#4d4e4f] transition-colors duration-200"
                                        onClick={handleAddInput}
                                    >
                                        <img src={add} className="w-[24px]" alt="Add Icon" />
                                        <span className="text-[#f0f0f0] text-sm font-bold font-['Pretendard'] leading-[21px]">
                                            Add another Figma account
                                        </span>
                                    </button>
                                )}
                            </>
                        )}
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

export default UserProfile;
