import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const PageNotFound = () => {
  return (
    <div>
      <h1>PAGINA NO ENCONTRADA 404</h1>
      <br />
      <Link to="/">
        <Button>Volver a Inicio</Button>
      </Link>
    </div>
  );
};
