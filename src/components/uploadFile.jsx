import axios from "axios";

export default function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://localhost:3000/upload", formData)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}