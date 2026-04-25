import { useState } from "react";
import uploadFile from "./uploadFile.jsx"

export default function Main() {
    const [selectedFile, setSelectedFile] = useState(null)

    function handleUpload() {
        console.log("Upload the document")
    }

    function handleFileChange(event) {
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
        }

        const res = uploadFile(file)
    }

    return (
        <main>
            <form className="upload-form">
                <input type="file" id="myFile" name="filename" onChange={handleFileChange} />
                <button className="upload-button" type="submit" value="Summarise" onClick={handleUpload}> Upload Document</button>
            </form>
        </main>
    )
}