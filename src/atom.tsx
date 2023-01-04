import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';


const {persistAtom} = recoilPersist({
    key:'LocalStorage',
    storage:localStorage,
})

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
    key:string;
}

export const calanderState = atom<ICal[]>({
    key:'Cal',
    default:[],
    effects_UNSTABLE:[persistAtom],
})



interface ITodoState{
    [key: string]:ITodo[];
}

export const todoState = atom<ITodoState>({
    key:'todo',
    default:{
        TODO : [],
        DOING : [],
        DONE : []
    },
    effects_UNSTABLE:[persistAtom],

})


export interface ITodo{
    id:number;
    text:string;
}