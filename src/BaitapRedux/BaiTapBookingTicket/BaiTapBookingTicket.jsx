import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
  
  renderHangGhe=()=>{
    return danhSachGheData.map((hangGhe,index)=>{
      return <div key={index} >
          <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
    </div>
    })
}
  
  render() {
    return (
      <div className='bookingMovie' style={{width:'100%',height:'100%',
      backgroundImage:"url('./img/bookingTicket/bgmovie.jpg')",backgroundSize:'100%'}}>
          <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.6)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-8 text-center ">
                    <div className='display-4 text-warning'>
                    ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                    </div>
                    <div style={{fontSize:'25px'}} className='mt-5 text-light'> Man hinh</div>
                    <div className='mt-2' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                      
                      <div className="screen"></div>
                      {this.renderHangGhe()}
                    </div>
                    
                    
                  </div>
                  <div className="col-4 ">
                  <div className='text-warning mt-2' style={{fontSize:'20px'}}>
                    danh sach ghe ban chon
                    </div>
                    <ThongTinDatGhe></ThongTinDatGhe>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
