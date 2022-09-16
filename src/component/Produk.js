import axios  from 'axios';
import React, {useState} from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';

function Produk(data) {   
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState(0);
    
    const x = data.x
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getDetail = (data) => {
        handleShow();
        setDetail(data);
    }

    const deleteProduk = async (id) => {
        const res = await axios.get(`http://localhost:3058/delete/${id}`)
        setTimeout(() => {
            window.reload();
        }, 300);
        
    }

    return (
        <>
        {x.map((x, idx) =>  {
            return (
                <Col md={3} xs={12} key={idx}>
                    <Card className='my-3 shadow' style={{ width: '18rem', minHeight:'20rem', border:'none' }}>
                    <Card.Img style={{ width:'auto', height:'166px', objectFitContent: 'contain',borderRadius:'20px' }} variant="top" className='p-2' src={x.prdImage01} alt='...' />
                    <Card.Body>
                        <Card.Title>{x.prdNm}</Card.Title>
                        <Card.Text>
                        {x.categori}
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <Row className='mx-4'>
                        <Button variant="primary" className='mb-2' onClick={() => getDetail(x) }>
                            Detail
                        </Button>
                        <Button variant="danger" className='mb-2' onClick={() => deleteProduk(x.id) }>
                            Hapus
                        </Button>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
                )
            }
        )} 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detail Produk</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className='text-center'>
                        <img className='img-thumbnail' style={{ maxWidth:'300px'}} src={detail.prdImage01} alt="..." />
                        <h3>{detail.prdNm}</h3>
                        <h4>Rp {detail.price}</h4>
                        <small>Stock : {detail.qty ? detail.qty : 1 }</small>
                    </div>
                    <p className='text-right'>
                        Deskripsi :
                        <hr />
                        {detail.desc ? detail.desc.replace(/<[^>]*>?/gm, '') : ''}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                Tutup
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}


export default Produk