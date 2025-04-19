import React, { useState } from "react";
import Header from "../components/Header";
import FileInput from "../components/FileInput";
import FileList from "../components/FileList";
import Footer from "../components/Footer";

export default function DriveFileBrowser() {
  const [url, setUrl] = useState("");
  const [fileIds, setFileIds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFileList = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setFileIds(data.ids || []);
    } catch (err) {
      console.error("Failed to fetch file list", err);
    }
    setLoading(false);
  };

  const downloadFile = (id) => {
    window.open(`https://drive.google.com/uc?export=download&id=${id}`, "_blank");
  };

  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center bg-background pt-20 px-4">
        <div className="w-full max-w-4xl bg-divider shadow-md rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">
            Google Drive Bulk Downloader
          </h1>
          <FileInput url={url} setUrl={setUrl} onFetch={fetchFileList} loading={loading} />
          <FileList fileIds={fileIds} onDownload={downloadFile} />
        </div>
      </main>
      <Footer />
    </>
  );
}
