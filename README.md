# Document Analyser

A full-stack web application designed to streamline document management and analysis. Upload your files, get AI-powered summaries instantly, and keep track of your documents in a clean, modern interface.

## Features

- **Instant Document Summarization**: Leverages the power of **Google Gemini 3 Flash** to generate concise, bullet-point summaries of your documents.
- **Seamless File Uploads**: Simple drag-and-drop or file selection for quick processing.
- **Persistent Storage**: All uploaded documents, raw text, and generated summaries are securely stored in **Supabase**.
- **Dynamic Dashboard**: A real-time table that displays your document history, updating automatically as you upload new files.

## Tech Stack

### Frontend
- **React (Vite)**: For a fast, interactive user interface.
- **Axios**: For smooth API communication with the backend.

### Backend
- **FastAPI**: A high-performance Python framework for the API layer.
- **Google Gemini API**: Powering the document summarisation with state-of-the-art LLMs.
- **Supabase**: PostgreSQL database for storing the document details.
- **Python Dotenv**: For secure environment variable management.

---

## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/akshay-somvanshi/document-analyser.git
cd document-analyser
```

### 2. Backend Setup
Navigate to the `backend` directory (or stay in root if preferred) and configure your environment:

1. Create a `.env` file in the `backend` folder:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_service_role_key
   GOOGLE_API_KEY=your_google_gemini_api_key
   ```
2. Install dependencies:
   ```bash
   pip install fastapi supabase google-generativeai python-dotenv uvicorn
   ```
3. Run the backend server:
   ```bash
   PYTHONPATH=. fastapi dev backend/app.py
   ```

### 3. Frontend Setup
1. Install node dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

---

## Future Roadmap
- [ ] Support for PDF and DOCX formats.
- [ ] User authentication for private document stores.
- [ ] Advanced analysis (sentiment, keyword extraction).
- [ ] Export summaries to PDF/Markdown.
