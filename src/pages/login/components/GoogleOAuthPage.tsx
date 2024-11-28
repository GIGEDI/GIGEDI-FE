// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../api/axiosInstance";
import loading from '../../../assets/loading.gif';
import { AxiosError } from "axios";

const GoogleOAuthPage = () => {
  const navigate = useNavigate();

  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
  };

  const handleLogin = async (code: string) => {
    try {
      const response = await instance.get(`/api/v1/auth/code/google`, {
        params: { code },
        withCredentials: true,
      });

      console.log("로그인 성공:", response.data);

      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      
      navigate("/connect-figma");
    } catch (error) {
      const axiosError = error as AxiosError; 
      console.error("로그인 실패:", axiosError);
      
      if (axiosError.response?.status === 401) {
          navigate("/connect-discord");
      } else {
          alert("로그인 처리 중 오류가 발생했습니다.");
      }
      }
  };

  useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      console.log("Google Authorization Code:", code);
      handleLogin(code);
    }
});

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#080808]g">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default GoogleOAuthPage;