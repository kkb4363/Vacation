import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

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

const {persistAtom} = recoilPersist({
    key:'calanderLocal',
    storage:localStorage,
})

export const calanderState = atom<ICal[]>({
    key:'Cal',
    default:[],
    effects_UNSTABLE:[persistAtom],
})