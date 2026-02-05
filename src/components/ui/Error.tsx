interface ErrorStateProps {
  title: string;
  message: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ title, message, onRetry }) => {
  return (
    <div className="bg-white rounded-2xl border border-red-100 p-8 text-center">
      <h3 className="text-red-600 text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-6">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState