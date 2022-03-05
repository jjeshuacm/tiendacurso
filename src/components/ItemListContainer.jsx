import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import { getFirestore,  collection, getDocs, query, where} from "firebase/firestore";


export const ItemListContainer = ({ greetings = "no se ha recibido" }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    //conexion api key con BD
    const db = getFirestore();
    let queryFiltro = "";
    console.log(categoria);
    if (categoria === undefined) {
      queryFiltro = collection(db, "items");
    } else {
      queryFiltro = query(
        collection(db, "items"),
        where("category", "==", categoria)
      );
    }
    getDocs(queryFiltro)
      .then((resp) =>
        setListProducts(
          resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
    //completar data split
  }, [categoria]);

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
        <Row className=" mb-4 header-background">
          <Col>
            <h1 className="font-link text-white">{greetings}</h1>
          </Col>
        </Row>
        <div className=" gallery">
          <ItemList listProducts={listProducts} />
        </div>
      </>
    );
  }
};
