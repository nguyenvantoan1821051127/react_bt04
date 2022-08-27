import { DAT_GHE,HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault={
    danhSachGheDangDat:[
        // {soGhe:'A1',gia:10000},
        // {soGhe:'D1',gia:10000}
    ]
}

export const BaiTapDatVeReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'DAT_GHE':{
            let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat];
            let index=danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===action.ghe.soGhe);
            if(index !== -1){
                //khi nguoi dung click ghe dang dat da co trong mang =>removo di
                danhSachGheDangDatUpdate.splice(index,1);
            }
            else{
                //khi nguoi dung click ghe dang dat chua co trong mang =>push vao
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state}
        }
        case 'HUY_GHE':{
            let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat];
            let index=danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===action.soGhe);
            if(index !== -1){
                //khi nguoi dung click ghe dang dat da co trong mang =>removo di
                danhSachGheDangDatUpdate.splice(index,1);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}
