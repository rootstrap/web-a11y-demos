import ReactModal from "react-modal";

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Modal = ({ accessible, modalImage, onCloseImage }) => {
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
          {accessible ? (
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-400 bg-white m-2 shadow hover:bg-gray-100 hover:text-gray-500 rounded-full p-1.5"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              <CloseIcon />
            </button>
          ) : (
            <div
              className="absolute right-2 top-2 text-gray-400 bg-white m-2 shadow hover:bg-gray-100 hover:text-gray-500 rounded-full p-1.5"
              onClick={closeModal}
            >
              <CloseIcon />
            </div>
          )}
        </div>
      </ReactModal>
    </div>
  );
};
