import axios from "axios";

const membersAxios = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
    "Content-Type": "application/json",   

  },
});

export const getMemberInfo = async (accessToken:string) => {
    try {
      const response = await membersAxios.get("/api/v1/members", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
      });
  
      if (response.data.success) {
        return {
          username: response.data.data.username,
          profileImg: response.data.data.profileImg,
          userId: response.data.data.userId,
        };
      } else {
        throw new Error(`Failed to fetch user info: ${response.data.status}`);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };