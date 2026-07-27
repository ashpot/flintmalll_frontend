import React from 'react';
import { IoClose } from 'react-icons/io5';

const Alert = ({ type = 'error', message, onClose }) => {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div
      className={`flex items-center justify-between gap-3 w-full p-3 rounded-xl mt-4 text-sm font-medium ${
        isSuccess
          ? 'bg-green-50 text-green-600 border border-green-200'
          : 'bg-red-50 text-red-600 border border-red-200'
      }`}
      role="alert"
    >
      <span>{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0"
          aria-label="Dismiss"
        >
          <IoClose />
        </button>
      )}
    </div>
  );
};

export default Alert;