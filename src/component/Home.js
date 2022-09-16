import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getProduk } from '../store/actions/produk.action';
import AddProduk from './AddProduk';
import Produk from './Produk';

class Home extends Component {
    state = {
        data: null
    }
    componentDidMount(){
        this.props.getProduk();
    }
    render(){
        const {produk} = this.props.produk
            return (
            <div className='container'>
                <Row className='justify-content-center' style={{ textAlign:'-webkit-center'}}>
                    <AddProduk />
                    {/* <p>Masuk sini</p> */}
                    <Produk x={produk} />
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    produk: state.produk
})
export default connect(mapStateToProps, { getProduk })(Home);