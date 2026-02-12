import React from "react";
import Backdrop from "./Backdrop";
import { HiOutlineXMark } from "react-icons/hi2";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Backdrop isOpen={isOpen} onClose={onClose}>
      {/* 🔥 MAIN MODAL CONTAINER (Fixed Size + Scroll Control) */}
      <div
        className="
          relative
          w-full
          max-w-md sm:max-w-lg
          max-h-[90vh]
          bg-white
          rounded-2xl
          shadow-xl
          border border-slate-100
          flex flex-col
          overflow-hidden
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400
                     hover:text-charcoal hover:bg-slate-50
                     rounded-full transition z-10"
        >
          <HiOutlineXMark className="text-xl" />
        </button>

        {/* Header (Fixed) */}
        <div className="pt-8 pb-4 px-6 text-center">
          <h2 className="text-2xl font-extrabold text-charcoal">
            {title}
          </h2>

          {subtitle && (
            <p className="text-slate-500 text-sm mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {children}
        </div>
      </div>
    </Backdrop>
  );
};

export default Modal;
