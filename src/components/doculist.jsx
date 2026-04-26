import getFiles from "./getFiles.jsx"
import { useEffect, useState } from "react"

export default function DocuList({ refreshToken }) {
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
    }, [refreshToken]);

    // GPT generated styling 
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Uploaded Documents</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>File Name</th>
                        <th style={thStyle}>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc) => (
                        <tr key={doc.id} style={trStyle}>
                            <td style={tdStyle}>{doc.id}</td>
                            <td style={tdStyle}>{doc.file_name}</td>
                            <td style={tdStyle}>{doc.summary || "—"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Show a friendly message when there are no documents */}
            {documents.length === 0 && (
                <p style={emptyStyle}>No documents have been uploaded yet.</p>
            )}
        </div>
    );
}

const containerStyle = {
    maxWidth: "960px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Inter', sans-serif",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
};
const titleStyle = {
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
};
const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};
const thStyle = {
    background: "#b7c4a2ff",
    color: "#000000ff",
    padding: "0.75rem",
    textAlign: "left",
    fontWeight: "600",
};
const trStyle = {
    borderBottom: "2px solid #e0e0e0",
};
const tdStyle = {
    padding: "0.75rem",
};
const emptyStyle = {
    textAlign: "center",
    color: "#777",
    marginTop: "1rem",
};