import axios from "axios";

const figmaCheckAxios = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
        "Content-Type": "application/json",   
    },
});

export const figmaCheckApi = async (accessToken: string) => {
    try {
        const response = await figmaCheckAxios.get("/api/v1/auth/figma", {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.data.success) {
            console.log("figmaCheck success", response.data);
            const figmaData = response.data.data;
            if (Array.isArray(figmaData) && figmaData.length > 0) {
                console.log("figmaCheck figmaId", figmaData[0].figmaId);
                console.log("figmaCheck email", figmaData[0].email);

                return {
                    figmaId: figmaData[0].figmaId,
                    email: figmaData[0].email,
                };
            } else {
                throw new Error("No Figma data found");
            }
          } else {
            throw new Error(`Failed to fetch user info: ${response.data.status}`);
          }
        } catch (error) {
        console.error("Error fetching Figma account info:", error);
        throw error; 
    }
};
