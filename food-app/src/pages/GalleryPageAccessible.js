import { useState } from "react";
import { ImageButton } from "../components/ImageButton";
import { Modal } from "../components/Modal";

export const GalleryPageAccessible = () => {
  const [modalImage, setModalImage] = useState(null);

  const setImage = (image) => {
    setModalImage(image);
  };

  return (
    <section className="container px-4 mx-auto">
      <h1 className="text-3xl font-extrabold mb-5">Galería</h1>
      <div className="grid grid-cols-3 gap-4">
        <Modal modalImage={modalImage} onCloseImage={setImage} accessible />
        <ImageButton
          src="/gallery/img1.jpg"
          alt="Pizza de pepperoni grande"
          onOpenImage={setImage}
        />
        <ImageButton
          src="/gallery/img2.jpg"
          alt="Hamburguesa doble con cheddar y bacon"
          onOpenImage={setImage}
        />
        <ImageButton
          src="/gallery/img3.jpg"
          alt="Fideos con salsa"
          onOpenImage={setImage}
        />
        <ImageButton
          src="/gallery/img4.jpg"
          alt="Tacos de carne"
          onOpenImage={setImage}
        />
        <ImageButton
          src="/gallery/img5.jpg"
          alt="Pollo frito con salsa"
          onOpenImage={setImage}
        />
        <ImageButton
          src="/gallery/img6.jpg"
          alt="Empanadas"
          onOpenImage={setImage}
        />
      </div>
    </section>
  );
};
