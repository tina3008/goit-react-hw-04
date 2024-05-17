import axios from "axios";

export const getImages = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: "dog",
        client_id: "s0XrVkvZCxZybVrgAUlDfLQ7GhmjR-Qp5eV1OTeQ98w",
       
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};