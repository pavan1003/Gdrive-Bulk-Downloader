export default function FileList({ fileIds, onDownload }) {
  if (fileIds.length === 0) {
    return (
      <p className="text-secondary text-center mt-4">No files to display. Enter a URL and fetch.</p>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-primary">Found {fileIds.length} Files:</h2>
      <ul className="max-h-[400px] overflow-y-auto border border-divider rounded-lg p-4 bg-[#1e1e1e] divide-y divide-divider">
        {fileIds.map((id, index) => (
          <li
            key={id}
            className="flex justify-between items-center py-2 px-2 hover:bg-[#2a2a2a] rounded-md transition"
          >
            <div className="flex flex-col text-sm text-primary">
              <span className="font-medium">File #{index + 1}</span>
              <a
                href={`https://drive.google.com/file/d/${id}/edit`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-xs "
              >
                https://drive.google.com/file/d/{id}/edit
              </a>
            </div>
            <button
              onClick={() => onDownload(id)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
