import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import TradePage from './pages/trade';
import WalletPage from './pages/wallet';
import DepositPage from './pages/deposit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trade' element={<TradePage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/deposit' element={<DepositPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
