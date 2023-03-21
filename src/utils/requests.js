import axios from "axios";

export const getNews = async (page, limit) => {
  return await axios
    .get(
      `https://63ee0ec0388920150dd83e3c.mockapi.io/news?page=${page}&limit=${limit}`
    )
    .then((res) => res.data);
};
