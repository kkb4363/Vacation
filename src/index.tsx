import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot} from 'recoil';

const queryClient = new QueryClient();

ReactDOM.render(
  
  <React.StrictMode>
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

{/* tsx 와 ts차이점
tsx 는 ts + react문법 이고
ts는 ts만 쓰는 것임. */}