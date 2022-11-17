import { FormatRupiah } from '@arismun/format-rupiah';
import axios  from 'axios';
import React, {useState} from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

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

    const regexx = (data) => {
        const regex = /(<([^>]+)>)/ig;
        const result = data.replace(regex, '');

        return result.substr(0,80);
    }

    const title = (data) => {
        const long = data.length;
        if(long > 20){
           return data.substr(0,60) + '...'
        } else {
            return data;
        }
    }

    const handleRating = (rate) => {
        this.setState({rating:rate})
        // other logic
      }

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = () => console.log('Move');
  

    return (
        <>
        {x.map((x, idx) =>  {
            return (
                <Col md={12} xs={12} key={idx}>
                    <Card className='my-3 shadow' style={{ border:'none' }}>
                        <Row>
                            <Col md={3}>
                                <Card.Img style={{ width:'auto', height:'210px', objectFitContent: 'contain',borderRadius:'20px' }} variant="top" className='p-2' src={x.prdImage01} alt='...' />
                                </Col>
                            <Col md={9} style={{textAlign:'left'}}>
                            <Row>
                                <Col md={9}>
                                    <Card.Body>
                                    <h4>{title(x.prdNm)}</h4>
                                    <p className='p-0 m-0'>{regexx(x.desc)}</p>
                                    <small className="p-0 text-secondary">{x.categori}</small>
                                    <br/>
                                    <div className="d-flex">
                                        <div className="mt-1">
                                        <span className="p-1 mt-4">4.7</span>
                                        </div>
                                        <div>

                                    <small>
                                    <Rating style={{}}
                                        /* Available Props */
                                        size={18}
                                        readOnly={true}
                                        initialValue={5}
                                        iconsCount={5}
                                        />
                                    </small>
                                        </div>
                                    </div>
                                </Card.Body>
                                </Col>
                                <Col md={3} className='text-right'>
                                    <Card.Body className='p-0 mt-3'>
                                    <strong> <FormatRupiah value={x.price} /></strong>
                                    </Card.Body>
                                </Col>
                            </Row>
                            </Col>
                    </Row>
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