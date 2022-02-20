import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import { AppContextProvider } from './state';

import HomePage from './pages/home';
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
          <Route path='/' element={<HomePage />} />
          <Route path='/trade' element={<TradePage />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/deposit' element={<DepositPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
