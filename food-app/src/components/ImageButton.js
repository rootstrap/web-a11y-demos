export const ImageButton = ({ accessible, src, alt, onShowModal }) =>
  accessible ? (
    <button onClick={() => onShowModal(true)}>
      <img src={src} alt={alt} />
    </button>
  ) : (
    <img src={src} alt={alt} onClick={() => onShowModal(true)} />
  );
