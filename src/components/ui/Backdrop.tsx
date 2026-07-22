import React from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 
                 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] bg-white rounded-2xl 
                   shadow-xl border border-slate-100 overflow-hidden"
        data-aos="zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};


export default Backdrop;
