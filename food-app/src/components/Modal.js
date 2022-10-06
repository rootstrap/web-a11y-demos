import ReactModal from "react-modal";

import { CloseIcon } from "./CloseIcon";

export const Modal = ({ modalImage, onCloseImage }) => {
  const closeModal = () => {
    onCloseImage(null);
  };

  return (
    <div className="absolute" onClick={closeModal}>
      <ReactModal
        isOpen={!!modalImage?.src}
        contentLabel="Imagen en tamaño completo"
        className={`relative bg-black bg-opacity-80 w-full h-full flex justify-center items-center`}
        onRequestClose={closeModal}
        onClick={closeModal}
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <img src={modalImage?.src} alt={modalImage?.alt} />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-400 bg-white m-2 shadow hover:bg-gray-100 hover:text-gray-500 rounded-full p-1.5"
            onClick={closeModal}
            aria-label="Cerrar modal"
          >
            <CloseIcon />
          </button>
        </div>
      </ReactModal>
    </div>
  );
};
