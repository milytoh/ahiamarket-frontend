interface EmptyStateProps {
  title: string;
  message: string;
}

const ErrorEmptyState: React.FC<EmptyStateProps> = ({ title, message }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center">
      <h3 className="text-brand-orange text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{message}</p>
    </div>
  );
};

export default ErrorEmptyState