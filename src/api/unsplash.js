import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID ymy3Qpji6iAzc0EOOd4rkvJ8lWqRqOv1AZTlFKM5OqU",
	},
});
