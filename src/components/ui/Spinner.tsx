type SpinnerProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-10 h-10 border-4",
};

const Spinner = ({ size = "md" }: SpinnerProps) => {
  return (
    <div
      className={`
        ${sizes[size]}
        border-gray-300
        border-t-primary
        rounded-full
        animate-spin
      `}
    />
  );
};

export default Spinner;
