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
  return (
    <Backdrop isOpen={isOpen} onClose={onClose}>
      <div className="relative flex flex-col pt-8 pb-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-charcoal
                     hover:bg-slate-50 rounded-full transition"
        >
          <HiOutlineXMark className="text-xl" />
        </button>

        {/* Header */}
        <div className="px-6 text-center">
          <h2 className="text-2xl font-extrabold text-charcoal">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 text-sm mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="px-6 pt-6">{children}</div>
      </div>
    </Backdrop>
  );
};

export default Modal;
