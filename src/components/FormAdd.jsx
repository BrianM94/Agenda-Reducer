import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
    setData({ nombre: "", numero: "" });
  };

  return (
    <>
      <div className="container">
        <label className="m-1 d-grid mt-2">
          <h5> Nombre: </h5>
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="Ingrese un nombre"
            required
          />
        </label>
        <label className="m-1 d-grid mt-2">
          <h5> Número: </h5>
          <input
            onChange={handleChange}
            name="numero"
            value={numero}
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="Ingrese un número telefónico"
            required
          />
        </label>
        <div className="m-1 d-grid">
          <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormAdd;
