// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import figmaInstance from "../../../api/figmaAxios";
import { AxiosError } from "axios";

const FigmaOAuthPage = () => {
  const navigate = useNavigate();

  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
  };

  const handleLogin = async (code: string) => {
    try {
      const response = await figmaInstance.get(`/api/v1/auth/code/figma`, {
        params: { code },
        withCredentials: true,
      });

      console.log("figma 로그인 성공:", response.data);
      navigate("/connect-discord");
    } catch (error) {
      const axiosError = error as AxiosError; 
      console.error("로그인 실패:", axiosError);
      navigate("/connect-figma");
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
      console.log("Figma Authorization Code:", code);
      handleLogin(code);
      getUserData();
    }
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#080808]">
    </div>
  );
};

export default FigmaOAuthPage;