import axios from "axios";

const figmaCheckAxios = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
        "Content-Type": "application/json",   
    },
});

export const logoutApi = async (accessToken: string) => {
    try {
        const response = await figmaCheckAxios.post("/api/v1/auth/logout", {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.data.success) {
            console.log("Logout success :", response.data.status);
            return { success: true };
        } else {
            throw new Error(`Failed to log out: ${response.data.status}`);
        }
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
};
