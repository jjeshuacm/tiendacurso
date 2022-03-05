import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { Button, Card,  ListGroup, Row, Col, Form, Alert,} from "react-bootstrap";
import {getFirestore,collection,getDocs,addDoc,where,documentId,query,writeBatch} from "firebase/firestore";

export const Cart = () => {
  const { cartList, removeItem, clear, sumTotal } = useCartContext();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();


  const [ordenfine, setOrdenFine] = useState(false);
  const [ordenpreview, setOrdenPreview] = useState({});
  const [ordenid, setOrdenId] = useState("");



  const realizarCompra = async (datos, e) => {
    //nuevo objeto orden
    let orden = {};
    //orden.date = Timestamp.fromDate(new Date());

    orden.buyer = {
      name: datos.name,
      lastname: datos.lastname,
      email: datos.email,
      phone: datos.phone,
    };
    // console.log(orden);
    //OBTENER TOTAL
    orden.total = sumTotal();
    orden.fecha = new Date().toDateString();
    orden.estado = "Generada";

    //ARMAR OBJETO  NUEVO CON MAP
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const nombre = cartItem.item.name;
      const precio = Number(cartItem.item.price) * Number(cartItem.quantity);

      return {
        id,
        nombre,
        precio,
        // cantidad
      };
    });

    try {
      //CREAR ORDEN
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      //CREAR DOCUMENTO SI EXISTEN ITEMS Y OBTENER EL ID
      if (orden.total !== 0) {
        const newOrden = await addDoc(ordersCollection, orden);
        //numero de documento
        setOrdenId(newOrden.id);
        setOrdenPreview(orden);

    
      } else {
        throw new SyntaxError("no se creo el documento");
      }

      //ACTUALIZAR DOCUMENTOS UNO SOLO
      // const queryDoc = doc(db,'items','9CnU4eq9NkWBKVCZ2fTe')
      // updateDoc(queryDoc,{
      //   stock:94
      // }).then(resp => console.log(resp));

      //ACTUALIZAR STOCK DE ITEMS CREA ORDENES CONTINUAS
      //BUSCAR DOCUMENTO DE ITEM POR ID
      const queryCollection = collection(db, "items");
      const queryActualizarStock = query(
        queryCollection,
        where(
          documentId(),
          "in",
          cartList.map((it) => it.item.id)
        )
      );
      console.log();

      //RESTAR DEL STOCK POR NUMERO DE ID
      const batch = writeBatch(db);
      await getDocs(queryActualizarStock)
        .then((resp) =>
          resp.docs.forEach((res) =>
            batch.update(res.ref, {
              stock:
                res.data().stock -
                Number(
                  cartList.find((item) => item.item.id === res.id).quantity
                ),
            })
          )
        )
        .catch((err) => console.log("b ", err))
        .finally(() => console.log("Stoc actualizando"));

      batch.commit();
      console.log("TODO CORRECTO");
      clear();
      setOrdenFine(true);
    } catch (error) {
      setOrdenFine(false);
      console.log("FALLO", error);
    }
  };

  //realizo orden de comprar
  //no ha hecho orden de comprar

  if (cartList.length === 0 && ordenfine === false) {
    return (
      <>
        {console.log(ordenid)}
        <Row className="pt-2 mb-4 header-background">
          <Col>
            <h2 className="font-link  text-white"> Carrito Vacío</h2>
          </Col>
        </Row>
        <Alert variant="warning">
          No has añadido nada al carrito de compras
        </Alert>
        <Card>
          <Card.Body>
            Ir a comprar:
            <Link to="/">
              <Button className="ml-2    btn-purple">Vamos ... </Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return (
      <>
        {!ordenfine ? (
          <Form onSubmit={handleSubmit(realizarCompra)}>
            <Row className=" mb-4 header-background">
              <Col>
                <h1 className="font-link text-white">Orden de compra:</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="mt-4">
                <Form.Group className="mr-2">
                  <Form.Label className="mr-2">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    maxLength="10"
                    // onChange={ formData }
                    {...register("name", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "El formato no es correcto: solo letras",
                      },
                      minLength: {
                        value: 10,
                        message: "Debe tener al menos 10 caracteres",
                      },
                    })}
                  ></Form.Control>
                  {errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </Form.Group>
                <Form.Group className="mr-2">
                  <Form.Label className="mr-2">Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    maxLength="10"
                    //  onChange={ formData }
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "El formato no es correcto: solo letras",
                      },
                      minLength: {
                        value: 10,
                        message: "Debe tener al menos 10 caracteres",
                      },
                    })}
                  ></Form.Control>
                  {errors.lastname && (
                    <span className="text-danger">
                      {errors.lastname.message}
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mr-2">
                  <Form.Label className="mr-2">Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Telefono"
                    maxLength="9"
                    // onChange={ formData }
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "El formato no es correcto: solo números",
                      },
                      minLength: {
                        value: 9,
                        message: "Debe tener al menos 9 dígitos",
                      },
                    })}
                  ></Form.Control>
                  {errors.phone && (
                    <span className="text-danger">{errors.phone.message}</span>
                  )}
                </Form.Group>
                <Form.Group className="mr-2">
                  <Form.Label className="mr-2">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    maxLength="20"
                    // onChange={ formData }
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "El formato no es correcto",
                      },
                    })}
                  ></Form.Control>
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </Form.Group>
                <Form.Group className="mr-2">
                  <Form.Label className="mr-2">Repetir Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="repitemail"
                    placeholder="Repetir Email"
                    maxLength="20"
                    // onChange={ formData }
                    // metodo getvalue para obtener el valores actual de todo el formulario en este caso email
                    {...register("repitemail", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      validate: {
                        emailEqual: (value) =>
                          value === getValues().email ||
                          "No coinciden los email",
                      },
                    })}
                  ></Form.Control>
                  {errors.repitemail && (
                    <span className="text-danger">
                      {errors.repitemail.message}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <Col lg="6">
                <Row className="mt-5">
                  <Col>
                    <Card style={{ width: "48rem" }}>
                      <ListGroup variant="flush">
                        {cartList.length !== 0 ? (
                          <>
                            {cartList.map((ele, i) => (
                              <ListGroup.Item key={i} id={ele.item.id}>
                                <img
                                  className="img-or"
                                  src={ele.item.imagenUrl}
                                  alt={ele.item.name}
                                  title={ele.item.name}
                                />
                                Nombre: {ele.item.name} / Precio: ${" "}
                                {ele.item.price} / Cantidad: {ele.quantity} /
                                <Button
                                  className="mr-2 ml-3 btn-purple"
                                  onClick={() => removeItem(ele.item.id)}
                                >
                                  Eliminar Item
                                </Button>
                              </ListGroup.Item>
                            ))}
                            <div>{`El total es $ ${sumTotal()}`}</div>
                          </>
                        ) : (
                          <div>No hay productos agregados</div>
                        )}
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button className="mr-2 btn-purple" onClick={clear}>
                      Vaciar Carrito{" "}
                    </Button>
                    <Link to="/">
                      <Button className="seguircomprando ml-2  mr-2 btn-purple">
                        Seguir Comprando
                      </Button>
                    </Link>
                    <Button className="mr-2 ml-2 btn-purple" type="submit">
                      Crear Orden{" "}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        ) : (
          <>
            <Row className=" mb-4 header-background">
              <Col>
                <h1 className="font-link text-white">Orden Finalizada</h1>
              </Col>
            </Row>
            <Alert variant="success">
              Compra exitosa. Numero de orden: {ordenid}
            </Alert>
            <Row>
              <Col lg="6">
                <Card.Body>
                  Total: {`${ordenpreview.total}  `}
                  {ordenpreview.items.map((ele, i) => (
                    <ListGroup.Item key={i} id={ele.id}>
                      {/* <img className="img-or"   src={ele.imagenUrl} alt={ele.name}  title={ele.name}/> */}
                      Nombre: {ele.nombre} / Precio: $ {ele.precio}
                    </ListGroup.Item>
                  ))}
                </Card.Body>
              </Col>
              <Col lg="6">
                <Card.Body>
                  Detalle de Orden:{" "}
                  {`${ordenpreview.estado} / Fecha:  ${ordenpreview.fecha} `}
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Email: {ordenpreview.buyer.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Nombre:{" "}
                      {`${ordenpreview.buyer.name} ${ordenpreview.buyer.lastname} `}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      Teléfono: {ordenpreview.buyer.phone}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Col>
            </Row>

            <Card>
              <Card.Body>
                Seguir Comprando:
                <Link to="/">
                  <Button className="ml-2    btn-purple">vamos... </Button>
                </Link>
              </Card.Body>
            </Card>
          </>
        )}
      </>
    );
  }
};
