export default function FileInput({ url, setUrl, onFetch, loading }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter webpage URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="bg-secondary border border-divider text-white px-4 py-3 rounded-lg shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        onClick={onFetch}
        className="bg-primary text-background px-6 rounded-lg hover:bg-secondary transition duration-200 w-34"
      >
        {loading ? "Loading..." : "Fetch"}
      </button>
    </div>
  );
}
