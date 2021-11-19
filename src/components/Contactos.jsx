import React, { useEffect, useReducer, useState } from "react";
import { ContactoReducer } from "../reducers/ContactosReducer";
import FormAdd from "./FormAdd";
import TablaContactos from "./TablaContactos";

const init = () => {
  const contactos = localStorage.getItem("contactos");

  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success mb-3"
      >
        {" "}
        {formView ? "- Cerrar Formulario" : "+ Agregar Contacto"}{" "}
      </button>

      {formView && <FormAdd dispatch={dispatch} />}

      <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
