import {combineReducers, createStore} from 'redux';
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
import {BaiTapDatVeReducer} from "./BaiTapDatVeReducer";

const rootReducer=combineReducers({
    QuanLySinhVienReducer,
    BaiTapDatVeReducer,

})

export const store =createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());