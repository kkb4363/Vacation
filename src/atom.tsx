import {atom} from 'recoil';

export const isDarkAtom = atom({
    key:'isDark',  // State 이름(고유)
    default:false, // 기본값
})

export interface Iform{
    text:string;
}

export interface ICal{
    id?:string;
    text:string;
}

export const calanderState = atom<ICal[]>({
    key:'Cal',
    default:[],
})