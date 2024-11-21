import React from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    isWin?: boolean;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    message,
    isWin = true
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-md w-full">
                <h2 className={`
                    text-2xl font-bold mb-4
                    ${isWin ? 'text-correct' : 'text-wrong'}
                `}>
                    {title}
                </h2>
                <p className="mb-6">{message}</p>
                <button
                onClick={onClose}
                className="
                    bg-correct
                    text-white
                    px-4 py-2
                    rounded-md
                    hover:bg-green-700
                    transition-colors
                "
                >
                    Close
                    </button>
            </div>
        </div>
    );
};

export default Modal;