import { useState } from "react";
import uploadFile from "./uploadFile.jsx"
import DocuList from './doculist.jsx'

export default function Main() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [refreshToken, setRefreshToken] = useState(0)

    function handleUpload() {
        console.log("Upload the document")
    }

    async function handleFileChange(event) {
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
        }

        const res = await uploadFile(file)

        setRefreshToken((prevRefreshToken) => prevRefreshToken + 1)
    }

    return (
        <main>
            <form className="upload-form">
                <input type="file" id="myFile" name="filename" onChange={handleFileChange} />
                <button className="upload-button" type="submit" value="Summarise" onClick={handleUpload}> Upload Document</button>
            </form>
            <DocuList refreshToken={refreshToken} />
        </main>
    )
}