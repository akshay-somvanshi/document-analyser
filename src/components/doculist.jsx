import getFiles from "./getFiles.jsx"
import { useEffect, useState } from "react"

export default function DocuList() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        async function fetchDocuments() {
            try {
                const docs = await getFiles(); // expecting an array
                console.log('Fetched documents:', docs.documents);
                const documentsArray = Array.isArray(docs.documents) ? docs.documents : [];
                setDocuments(documentsArray)
            } catch (err) {
                console.error('Error fetching documents:', err);
            }
        }
        fetchDocuments();
    }, []);

    return (
        <ul>
            {documents.map(document => (
                <li key={document.id}>
                    {document.file_name}
                    {document.summary}
                </li>
            ))}
        </ul>
    )
}