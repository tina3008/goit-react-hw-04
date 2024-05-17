import axios from "axios";


export const getImages = async (searchImg) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: searchImg,
        client_id: "s0XrVkvZCxZybVrgAUlDfLQ7GhmjR-Qp5eV1OTeQ98w",
       
      },
    });
console.log(searchImg);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};