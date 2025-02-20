export default function SummaryDisplay({ summary }: { summary: string }) {
    return (
      <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-bold">Summary:</h2>
        <p className="mt-2">{summary}</p>
        <button
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md"
          onClick={() => navigator.clipboard.writeText(summary)}
        >
          Copy to Clipboard
        </button>
      </div>
    );
  }
  