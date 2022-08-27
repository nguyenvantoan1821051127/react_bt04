import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/actions/BaiTapDatVeAction';

 class HangGhe extends Component {

  renderGhe=()=>{
    return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{


      let cssGheDaDat='';
      let disabled=false;
      if(ghe.daDat){
        cssGheDaDat='gheDuocChon';
        disabled=true;
      }
      //xet trang thai ghe dang dat
      let cssGheDangDat='';
      let indexGheDangDat=this.props.dangSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
          if(indexGheDangDat !== -1){
              cssGheDangDat='gheDangChon'
          }
        


      return <button onClick={()=>{
        this.props.datGhe(ghe)
      }}
      disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat} `} key={index}>
        {ghe.soGhe}
        {/* {index + 1} */}
      </button>
    })
  }
  renderSoHang =()=>{
    return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className='rowNumber'>{hang.soGhe}</button>
    })
    
  }
  renderHangGhe=()=>{
    if(this.props.soHangGhe===0){
      return <div className='ml-4'>
          {this.props.hangGhe.hang}{this.renderSoHang()}
      </div>
    }else{
      return <div>
        {this.props.hangGhe.hang}{this.renderGhe()}
      </div>
    }
    
  }


  render() {
    return (
      <div className='text-light text-start mt-1 ml-5' style={{fontSize:'20px'}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateteToProps =state =>{
  return{
    dangSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    datGhe:(ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect(mapStateteToProps,mapDispatchToProps)(HangGhe);