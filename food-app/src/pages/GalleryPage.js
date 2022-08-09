import { useState } from "react";
import { ImageButton } from "../components/ImageButton";
import { Modal } from "../components/Modal";

export const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container px-4 mx-auto">
      <h1 className="text-3xl font-extrabold mb-5">Galería</h1>
      <div className="grid grid-cols-3 gap-4">
        {showModal && <Modal onShowModal={setShowModal} />}
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
        <ImageButton
          src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
          onShowModal={setShowModal}
        />
      </div>
    </section>
  );
};
