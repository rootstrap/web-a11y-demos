export const ImageButton = ({ src, alt, id, onOpenImage }) => {
  const openImage = () => {
    onOpenImage({ src, alt });
  };

  return (
    <button
      onClick={openImage}
      aria-label="Ver imagen en tamaño completo"
      aria-describedby={id}
    >
      <img src={src} alt={alt} id={id} />
    </button>
  );
};
