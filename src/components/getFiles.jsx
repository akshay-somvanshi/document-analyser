import axios from "axios"

export default async function getFiles() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/")
        // console.log(response.data.documents)
        return response.data
    } catch (error) {
        console.log(error)
    }
}