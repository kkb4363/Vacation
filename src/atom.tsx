import {atom} from 'recoil';

export const isDarkAtom = atom({
    key:'isDark',  // State 이름(고유)
    default:false, // 기본값
})