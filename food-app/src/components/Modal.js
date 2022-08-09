export const Modal = ({ accessible, onShowModal }) => {
  return (
    <div
      aria-hidden="true"
      class={`fixed top-0 right-0 left-0 z-50 bg-black bg-opacity-80 w-full h-full flex justify-center items-center`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onShowModal(false);
        }
      }}
    >
      <div className="relative bg-white rounded-lg shadow w-1/2 h-min">
        <button
          type="button"
          className="absolute right-0 text-gray-400 bg-white m-2 shadow hover:bg-gray-100 hover:text-gray-500 rounded-full p-1.5"
          onClick={() => onShowModal(false)}
          aria-label={accessible ? "Close modal" : ""}
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <img
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          alt="Lorem ipsum dolor sit amet"
        />
      </div>
    </div>
  );
};
