import axios from "axios";

export default function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://127.0.0.1:8000/upload", formData)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}