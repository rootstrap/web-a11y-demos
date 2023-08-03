import { useState } from "react";
import { ImageButton } from "../components/ImageButton";
import { Modal } from "../components/Modal";
import {Helmet} from "react-helmet";

export const GalleryPageAccessible = () => {
  const [modalImage, setModalImage] = useState(null);

  const setImage = (image) => {
    setModalImage(image);
  };

  return (
    <>
      <Helmet>
        <title>Galería | Food App</title>
      </Helmet>
      <section className="container px-4 mx-auto">
        <h1 className="text-3xl font-extrabold mb-5">Galería</h1>
        <div className="grid grid-cols-3 gap-4">
          <Modal modalImage={modalImage} onCloseImage={setImage} />
          <ImageButton
            src="/gallery/img1.jpg"
            alt="Pizza de pepperoni grande"
            id="image1"
            onOpenImage={setImage}
          />
          <ImageButton
            src="/gallery/img2.jpg"
            alt="Hamburguesa doble con cheddar y bacon"
            id="image2"
            onOpenImage={setImage}
          />
          <ImageButton
            src="/gallery/img3.jpg"
            alt="Fideos con salsa"
            id="image3"
            onOpenImage={setImage}
          />
          <ImageButton
            src="/gallery/img4.jpg"
            alt="Tacos de carne"
            id="image4"
            onOpenImage={setImage}
          />
          <ImageButton
            src="/gallery/img5.jpg"
            alt="Pollo frito con salsa"
            id="image5"
            onOpenImage={setImage}
          />
          <ImageButton
            src="/gallery/img6.jpg"
            alt="Empanadas"
            id="image6"
            onOpenImage={setImage}
          />
        </div>
      </section>
    </>
  );
};
