import React, { Component } from 'react'

export default class FormSinhVien extends Component {
  state={
    sinhVienInfo:{
        id:'',
        name:'',
        email:'',
        phone:'',
    },
    errors:{
        id:'',
        name:'',
        email:'',
        phone:'',
    }
}
  handChange=(e)=>{
    let{id,value}=e.target;
    let dataType=e.target.getAttribute('data-type');
    let newVlue={...this.state.sinhVienInfo};
    newVlue[id]=value;
    let newErrors={...this.state.errors};

    //check loi
    let errorMess='';
    if(value.trim()===''){
      errorMess=id+ ' không được để trống'
    }else{
      //lỗi định dạng
      if(dataType === 'number'){
        let regexNumber= /^\d+$/; 
        if(!regexNumber.test(value)){
            errorMess=id+ ' phai la so'
        }
      }else if(dataType=== 'email'){
        let regexEmail=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if(!regexEmail.test(value)){
          errorMess=id+' email khong dung dinh dang'
        }
      }

    }
    newErrors[id]=errorMess
    //setState
    this.setState({
      sinhVienInfo:newVlue,
      errors:newErrors
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    let valid=true
    
    let{sinhVienInfo,errors}=this.state;
    //check error (tat ca error phai trong)
    for(let key in errors){
      if(errors[key] !== ''){
        valid=false
        break;
      }
    }
    //check value() tat ca value phai trong
    for(let key in sinhVienInfo){
      if(sinhVienInfo[key].trim()===''){
        valid=false;
        break;
      }
    }
    if(!valid){
      alert ('du lieu khong hop le')
      return
    }
    
    this.props.createSinhVien(sinhVienInfo);
}
componentWillReceiveProps(newSV) {
  //Khi bấm nút chỉnh sửa lấy props gán vào state => giao diện render ra từ state
  this.setState({
      sinhVienInfo: newSV.editSinhVien
  })
}


  render() {
    let {id,name,email,phone}=this.state.sinhVienInfo;
    return (
    <div className='card text-start'>
      <div className="card-header bg-dark text-white">
          <h3>Thong tin sinh vien</h3>
      </div>
      <div className="card-body">
        <form className='form'onSubmit={(this.handleSubmit)}>
          <div className="row">
            <div className="form-group col-6">
              <span>Ma sv</span>
              <input className='form-control' id='id' value={id}  
              onInput={this.handChange}/>
              <p className='text-danger'>{this.state.errors.id}</p>
            </div>
            <div className="form-group col-6">
              <span>Ho Ten</span>
              <input className='form-control' id='name'value={name}
              onInput={this.handChange}/>
              <p className='text-danger'>{this.state.errors.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <span>Email</span>
              <input className='form-control' id='email' data-type='email' value={email}
              onInput={this.handChange}/>
              <p className='text-danger'>{this.state.errors.email}</p>
            </div>
            <div className="form-group col-6">
              <span>SDT</span>
              <input className='form-control' id='phone' value={phone} data-type='number'
              onInput={this.handChange}/>
              <p className='text-danger'>{this.state.errors.phone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col mt-2 text-start">
              <button type='submit' className='btn btn-success'>Them Sinh Vien</button>
              <button className='btn btn-primary mx-2'type="button" 
                onClick={()=>{
                this.props.updateSinhVien
                (this.state.sinhVienInfo)
                }}>Cap Nhat</button>
            </div>
          </div>
      </form>
    </div>
  </div>
    )
  }
}
