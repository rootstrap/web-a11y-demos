import { useState } from "react";
import { ImageButton } from "../components/ImageButton";
import { ModalNotAccessible } from "../components/ModalNotAccessible";

export const GalleryPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const setImage = (image) => {
    setModalImage(image);
  };

  return (
    <section className="container px-4 mx-auto">
      <h1 className="text-3xl font-extrabold mb-5">Galería</h1>
      <div className="grid grid-cols-3 gap-4">
        <ModalNotAccessible modalImage={modalImage} onCloseImage={setImage} />
        <ImageButton src="/gallery/img1.jpg" onOpenImage={setImage} />
        <ImageButton src="/gallery/img2.jpg" onOpenImage={setImage} />
        <ImageButton src="/gallery/img3.jpg" onOpenImage={setImage} />
        <ImageButton src="/gallery/img4.jpg" onOpenImage={setImage} />
        <ImageButton src="/gallery/img5.jpg" onOpenImage={setImage} />
        <ImageButton src="/gallery/img6.jpg" onOpenImage={setImage} />
      </div>
    </section>
  );
};
