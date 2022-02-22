import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'antd/dist/antd.css';

import { AppContextProvider } from './state';

import TradePage from './pages/trade';
import WalletPage from './pages/wallet';
import DepositPage from './pages/deposit';
import NavBar from './components/Navbar';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/trade' element={<TradePage />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/deposit' element={<DepositPage />} />
          <Route path='*' element={<Navigate to='/trade' />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
