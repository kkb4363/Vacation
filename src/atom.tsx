import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';


const {persistAtom} = recoilPersist({
    key:'calanderLocal',
    storage:localStorage,
})

export const isDarkAtom = atom({
    key:'isDark',  // State 이름(고유)
    default:false, // 기본값
})

export interface Iform{
    text:string;
}

export interface ITodo{
    text:string,
    id:string
}

export interface ICal{
    id?:string;
    text:string;
}

export interface ICheck{
    id:number
    checked?:boolean;
}

export const calanderState = atom<ICal[]>({
    key:'Cal',
    default:[],
    effects_UNSTABLE:[persistAtom],
})

export const checklistState = atom<ICheck[]>({
    key:'Check',
    default:[],
    effects_UNSTABLE:[persistAtom],
})

export const todoState = atom({
    key:'todo',
    default: ["a", "b", "c", "d", "e", "f"]
})