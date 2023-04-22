import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src={img} alt={name} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <p>Categoría: {category}</p>
                                    <p>Descripción: {description}</p>
                                    <p>Precio: ${price}</p>
                                </Card.Text>
                                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default ItemDetail;