import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App/App';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Update from './components/Update/Update';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<div>Page non trouvé</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
