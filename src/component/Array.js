import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAngka } from '../store/actions/array.action';

export class Array extends Component {
    state = { data : null }
    componentDidMount()
    {
        this.props.getAngka();
    }
  render() {
    const {angka} = this.props.angka;
    const looping = angka.map((x, idx) => {
        const isilooping = x.map((isi, index) => {
            var isi = [];
            if(isi[index] === isi[index+1]){
                isi[index] = "before";
            }else{
                isi[index];
            }
            return isi;
        })
        return isilooping
    })
    console.log('only 1 line', looping[0]);
    return (
      <div>
        {looping}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    angka: state.angka
})
export default connect(mapStateToProps, { getAngka })(Array);