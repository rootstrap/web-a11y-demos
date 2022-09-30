export const ImageButton = ({ src, alt, onOpenImage }) => {
  const openImage = () => {
    onOpenImage({ src, alt });
  };

  return (
    <button
      onClick={openImage}
      aria-label="Ver imagen en tamaño completo"
      aria-describedby="image"
    >
      <img src={src} alt={alt} id="image" />
    </button>
  );
};
