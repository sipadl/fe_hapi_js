import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadProduk } from '../store/actions/produk.action';

export class AddProduk extends Component {
    state = {
        show:false,
    }
    render() {
      const handleSubmit = (data) => {
        this.props.uploadProduk(data);

      };
    const handleClose = () => {
        this.setState({show:false})
    }
    const handleShow = () => {
        this.setState({show:true})
    }
    return (
      <div>
        <Button variant="primary" className='m-2' onClick={handleShow}>
            Tambah Produk
        </Button>

        <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Tambah Produk</Modal.Title>
        </Modal.Header>
        <Formik
        initialValues={{ 
            categori:'',
            prdNm: '',
            prdImage01:'',
            qty:'',
            price:'',
            desc:''
         }}
        onSubmit={handleSubmit}
        >
            <Form className='p-2'>
            <Field type="text" name="categori" className='form-control mb-2' placeholder="Categori" />
            <Field type="text" name="prdNm" className='form-control mb-2' placeholder="Nama Produk" />
            <Field type="text" name="prdImage01" className='form-control mb-2' placeholder="Link Image" />
            <Field type="number" name="qty" className='form-control mb-2' placeholder="Jumlah / Qty" />
            <Field type="number" name="price" className='form-control mb-2' placeholder="Harga" />
            <Field type="text" component="textarea" name="desc" className='form-control mb-2' placeholder="Deksripsi" />
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button type="reset" variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose}>
                Simpan
                </Button>
            </Modal.Footer>
            </Form>
        </Formik>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    produk: state.produk
})
export default connect(mapStateToProps, { uploadProduk })(AddProduk);
