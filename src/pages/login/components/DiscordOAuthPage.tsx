// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import discordInstance from "../../../api/discordAxios";
import loading from '../../../assets/loading.gif';
import { AxiosError } from "axios";
  
const DiscordOAuthPage = () => {
  const navigate = useNavigate();

  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
  };

  const handleLogin = async (code: string) => {
    try {
      const response = await discordInstance.get(`/api/v1/auth/code/discord`, {
        params: { code },
        withCredentials: true,
      });

      console.log("Discord 로그인 성공:", response.data);
      navigate("/");
    }  catch (error) {
        const axiosError = error as AxiosError; 
        console.error("로그인 실패:", axiosError);
        
        if (axiosError.response?.status === 401) {
            navigate("/");
        } else {
          navigate("/");
        }
        }
    };

  const getUserData = async () => {
    const accessToken = localStorage.getItem("accessToken"); 
    if (!accessToken) {
      console.warn("엑세스 토큰이 없습니다.");
      return;
    }
  };

  useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      console.log("Discord Authorization Code:", code);
      handleLogin(code);
      getUserData();
    }
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#080808]">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default DiscordOAuthPage;