import { createPortal } from "react-dom";

import { CloseIcon } from "./CloseIcon";

export const ModalNotAccessible = (props) => {
  return createPortal(<Modal {...props} />, document.getElementById("modal"));
};

const Modal = ({ modalImage, onCloseImage }) => {
  const closeModal = () => {
    onCloseImage(null);
  };

  return (
    !!modalImage?.src && (
      <div
        contentLabel="Imagen en tamaño completo"
        className={`fixed bg-black bg-opacity-80 left-0 top-0 w-full h-full flex justify-center items-center`}
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
      </div>
    )
  );
};
