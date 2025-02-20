import { useState } from 'react';
import { fetchSummary } from '../utils/api';

export default function URLInput({ onSummary }: { onSummary: (summary: string) => void }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const summary = await fetchSummary(url);
      onSummary(summary);
    } catch {
      alert('Error fetching summary.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste product review URL"
        className="w-full p-2 border rounded-md"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Summarize
      </button>
    </div>
  );
}
