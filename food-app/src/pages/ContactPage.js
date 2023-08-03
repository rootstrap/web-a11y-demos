import { useState } from "react";
import {Helmet} from "react-helmet";

export const ContactPage = ({ accessible }) => {
  const [sent, setSent] = useState(false);

  return (
    <>
      {accessible && (
        <Helmet>
          <title>Contacto | Food App</title>
        </Helmet>
      )}
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold mb-5">Envianos un mensaje</h1>
          {sent ? (
            <div role="alert">
              Tu mensaje fue enviado, te responderemos pronto.
            </div>
          ) : (
            <form className="flex flex-col w-1/3" onSubmit={() => setSent(true)}>
              {accessible && (
                <label htmlFor="email" className="mt-5 mb-1">
                  Email
                </label>
              )}
              <input
                type="email"
                id="email"
                className="p-1 rounded bg-gray-50 border border-slate-300 mb-3"
                required
                placeholder={accessible ? "" : "Email"}
              />
              {accessible && (
                <label htmlFor="subject" className="mb-1">
                  Motivo
                </label>
              )}
              <select
                id="subject"
                className="p-1 rounded bg-gray-50 border border-slate-300 mb-3"
              >
                <option value="1">Reserva</option>
                <option value="2">Consulta</option>
                <option value="3">Otros motivo</option>
              </select>
              {accessible && (
                <label htmlFor="message" className="mb-1">
                  Mensaje
                </label>
              )}
              <textarea
                id="message"
                className="p-1 h-48 rounded bg-gray-50 border border-slate-300 resize-none mb-3"
                required
                placeholder={accessible ? "" : "Mensaje"}
              />
              <button type="submit" className="bg-orange-400 rounded p-2 mt-5">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
