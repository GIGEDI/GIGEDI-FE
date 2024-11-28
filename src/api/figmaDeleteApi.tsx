import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
        "Content-Type": "application/json",   
    },
});

export const figmaDisconnectApi = async (accessToken: string) => {
    try {
        // Change from GET to DELETE and update the endpoint to `/api/v1/auth/figma/disconnect`
        const response = await instance.delete("/api/v1/auth/figma/disconnect", {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.data.success) {
            console.log("Figma account disconnected successfully");
            return {
              data: response.data.data,
            };
        } else {
            throw new Error(`Failed to disconnect Figma account: ${response.data.status}`);
        }
    } catch (error) {
        console.error("Error disconnecting Figma account:", error);
        throw error; 
    }
};
