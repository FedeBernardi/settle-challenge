import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../state';

import NavBar from '../NavBar';

describe('NavBar Component', () => {
  const renderComponent = () => render(
    <AppContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </AppContextProvider>
  );
  
  it('matches snapshot', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('redirects to /trade when clicking the Trade link', () => {
    const { getByText } = renderComponent();

    const ordersButton = getByText(/trade/i);
    fireEvent.click(ordersButton);

    expect(window.location.pathname).toBe('/trade');
  });

  it('redirects to /wallet when clicking the Wallet link', () => {
    const { getByText } = renderComponent();

    const ordersButton = getByText(/wallet/i);
    fireEvent.click(ordersButton);

    expect(window.location.pathname).toBe('/wallet');
  });

  it('redirects to /deposit when clicking the Deposit link', () => {
    const { getByText } = renderComponent();

    const ordersButton = getByText(/deposit/i);
    fireEvent.click(ordersButton);

    expect(window.location.pathname).toBe('/deposit');
  });
});
