import { API_ENDPOINTS } from "./api";

export const initializePayment = async (selectedAdType) => {

    const token = localStorage.getItem("authToken");

    const response = await fetch(
        API_ENDPOINTS.INITIALIZE_PAYMENT,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

                Authorization:
                    `Token ${token}`
            },

            body: JSON.stringify({
                selected_ad_type: selectedAdType
            })
        }
    );

    const data = await response.json();

    if(!response.ok){

        throw new Error(
            data.error ||
            "Payment init failed"
        );
    }

    return data;
};