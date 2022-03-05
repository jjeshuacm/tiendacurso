import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { PageNotFound } from "../PageNotFound";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { iDetalles } = useParams();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", iDetalles);
    getDoc(itemRef)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [iDetalles]);

  if (loading) {
    return (
      <Row className="pt-2 mb-4 header-background">
        <Col>
          <h2 className="font-link  text-white">
            Cargando página...
            <Spinner animation="border" variant="light" />
          </h2>
        </Col>
      </Row>
    );
  } else {
    return (
      <>
        {product.category ? <ItemDetail product={product} /> : <PageNotFound />}
      </>
    );
  }
};
