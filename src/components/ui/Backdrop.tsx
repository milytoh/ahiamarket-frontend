import React from "react";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/30 backdrop-blur-sm"
      onClick={onClose} // close when clicking outside
    >
      <div
        className="relative w-full max-w-[520px] bg-white rounded-2xl
                   shadow-xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
