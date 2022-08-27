import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapForm extends Component {
  
  state={
    arrSinhVien:[
      {id:1,name:'Nguyen van a',email:'nguyenvana@gmail.com',phone:'7483927432'},
      {id:2,name:'Nguyen van b',email:'nguyenvana@gmail.com',phone:'012345678'}
    ],
    editSinhVien:{id:'',name:'',email:'',phone:''}
  }
  editSinhVien=(prodEdit)=>{
    console.log(prodEdit);
    this.setState({
      editSinhVien:prodEdit
    })
  }
  updateSinhVien = (sinhVienUpdate) => {
    //Lấy ra dữ liệu trong mảng (prodUpdate) 
    let svUpdate = this.state.arrSinhVien.find(pro => pro.id === sinhVienUpdate.id);
    if(svUpdate){
        for(let key in svUpdate){
            svUpdate[key] = sinhVienUpdate[key];
        }
    }
    //Sau khi thay đổi thì set lại state
    this.setState({
      arrSinhVien:this.state.arrSinhVien
    })

    console.log(sinhVienUpdate);
  }
  //CRUD
  //muon thay doi state nao this viet ham setState tai vi tri state do 
  createSinhVien=(newSinhVien)=>{
    console.log('newProduct',newSinhVien)
    let arrSinhVienUpdate=this.state.arrSinhVien;
    arrSinhVienUpdate.push(newSinhVien);
    //this.setState
    this.setState({
      arrSinhVien:arrSinhVienUpdate
    })
  }
  delSinhVien=(idClick)=>{
    console.log(idClick);
    let arrSinhVienUpdate=this.state.arrSinhVien;
    
    arrSinhVienUpdate=arrSinhVienUpdate.filter(sv=>sv.id !==idClick);
    //setState cho arrProduct
    this.setState({
      arrSinhVien:arrSinhVienUpdate
    })
  }
  searchSV=(e)=>{
    let {value}=e.target;
    console.log(value);
    let searchSinhVien=[...this.state.arrSinhVien];
    console.log(searchSinhVien)
    let updateSinhVien=searchSinhVien.filter((sv)=> sv.name.includes(value))
    console.log(updateSinhVien)
    
    if(value.trim() !== ''){
      this.setState({
        arrSinhVien:updateSinhVien
        
      })
      console.log(this.state.arrSinhVien)
    }else{
      this.setState({
        arrSinhVien:searchSinhVien
      })
    }
  }


  render() {
    return (
      <div className='container'>
        <h3>Bai tap form</h3>
        <FormSinhVien updateSinhVien={this.updateSinhVien} createSinhVien={this.createSinhVien} editSinhVien={this.state.editSinhVien}></FormSinhVien>
        <div className="row mt-2">
            <div className="col">
              <input className='form-control' id='search' placeholder='search' onChange={this.searchSV}/>
            </div>
        </div>
        <TableSinhVien arrSinhVien={this.state.arrSinhVien} delSinhVien={this.delSinhVien} editSinhVien={this.editSinhVien}></TableSinhVien>
      </div>
    )
  }
}
