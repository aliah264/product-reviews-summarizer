import { useState } from 'react';
import URLInput from '../components/URLInput';
import SummaryDisplay from '../components/SummaryDisplay';

export default function Home() {
  const [summary, setSummary] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 Product Reviews Summarizer</h1>
      <URLInput onSummary={setSummary} />
      {summary && <SummaryDisplay summary={summary} />}
    </div>
  );
}
