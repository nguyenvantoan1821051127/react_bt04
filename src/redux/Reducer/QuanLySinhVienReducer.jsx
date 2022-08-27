
const stateDefault={
    mangSinhVien:[{maSV:1,hoTen:'Nguyen Van A',soDienThoai:'843504325',email:'nguyentoan@gmail.com'}]
}

export const QuanLySinhVienReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            //them du lieu sinh vien vao mangSinhVien
            let mangSVUpdate=[...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien=mangSVUpdate;
            return {...state}
            // console.log(action)
        }
        default:{
            return {...state}
        }
    }
}