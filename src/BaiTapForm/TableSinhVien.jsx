import React, { Component } from 'react'

export default class TableSinhVien extends Component {
  renderSinhVien=()=>{
    let{arrSinhVien}=this.props;
    return arrSinhVien.map((sv,index)=>{
      return <tr key={index}>
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.phone}</td>
            <td>{sv.email}</td>
            <td>
                <button className='btn btn-danger mx-2'onClick={()=>{
              this.props.delSinhVien(sv.id)
            }}>xoa</button>
                <button className='btn btn-danger'onClick={()=>{
              this.props.editSinhVien(sv);
            }}>sua</button>
            </td>
        </tr>
    })
  }
  render() {
    
    return (
      <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Ma SV</th>
                    <th>Ho ten</th>
                    <th>So dien thoai</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderSinhVien()}
            </tbody>
        </table>
      </div>
    )
  }
}
