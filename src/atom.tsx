import {atom} from 'recoil';

export const isDarkAtom = atom({
    key:'isDark',  // State 이름(고유)
    default:false, // 기본값
})

export interface IForm{
    today:string;
}

export interface ICal{
    id:number;
    text:string;
}

export const calState = atom<ICal[]>({
    key:'Cal',
    default:[],
})