import React, { Component } from 'react'
import {connect} from 'react-redux'
import { huyGheAction } from '../../redux/actions/BaiTapDatVeAction';

class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
            <div className='mt-5'>
                <button className='gheDuocChon'></button>
                <span className='text-light' style={{fontSize:'30px'}}>ghe da dat</span>
                <br />
                <button className='gheDangChon'></button>
                <span className='text-light' style={{fontSize:'30px'}}>ghe dang dat</span>
                <br />
                <button className='ghe'></button>
                <span className='text-light' style={{fontSize:'30px'}}>ghe chua dat</span>
            </div>
            <div className='mt-5'>
                <table className='table'border='2'>
                    <thead>
                        <tr className='text-light' style={{fontSize:'30px'}}>
                            <th>so ghe</th>
                            <th>gia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button onClick={()=>{
                                    this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                }}>Huy</button></td>
                            </tr>
                        })}
                        
                    </tbody>
                    <tfoot className='text-warning'>
                        <tr>
                            <td>Tong Tien</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongtien,gheDangDat,index)=>{
                                return tongtien+=gheDangDat.gia;
                            },0)}</td>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
        </div>
        
    )
  }
}
const mapStateteToProps=state=>{
    return{
        danhSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat
    }

}
export default connect(mapStateteToProps)(ThongTinDatGhe)