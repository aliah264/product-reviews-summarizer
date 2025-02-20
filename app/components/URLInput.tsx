import { useState } from 'react';
import { fetchSummary } from '../utils/api';

export default function URLInput({ onSummary }: { onSummary: (summary: string) => void }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!url) return alert('Please enter a URL.');

    setLoading(true);
    try {
      const summary = await fetchSummary(url);
      onSummary(summary);
    } catch {
      alert('Error fetching summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste product review URL"
        className="w-full p-2 border rounded-md"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
    </div>
  );
}
