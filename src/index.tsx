import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot} from 'recoil';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Login/Reducer/Reducer';


const store = configureStore({reducer});
const queryClient = new QueryClient();
const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootNode).render(
<React.StrictMode>
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
    <RouterProvider router={Router}/>
    </Provider>
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();


{/* tsx 와 ts차이점
tsx 는 ts + react문법 이고
ts는 ts만 쓰는 것임. */}