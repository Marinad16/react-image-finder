import axios from "axios";

const fetchImages = (serchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${serchQuery}&page=${page}&key=24288297-9796b0f766b3e57b69a5fe9b1&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImages,
};
