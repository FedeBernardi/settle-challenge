import { useState, useContext } from 'react';
import { Input, Button, notification } from 'antd';
import styled from 'styled-components';

import { AppContext } from '../../state/index';
import { depositFiat } from '../../state/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DepositForm = () => {
  const [, dispatch] = useContext(AppContext);
  const [amount, setAmount] = useState();
  const [errors, setErrors] = useState([]);

  const onAmountChange = e => {
    const { value: newValue } = e.target;
    const newErrors = [];
    const reg = /^[1-9]+[0-9]*$/;

    if (!reg.test(newValue)) newErrors.push('Please enter a valid amount');

    setAmount(newValue);
    setErrors(newErrors);
  }
  
  const onButtonClick = () => {
    dispatch(depositFiat(Number(amount)));
    setAmount('');

    notification.success({
      message: 'Congratulations!',
      description:
        `You successfuly deposit ${amount} ARS. Check your wallet to see the new balance.`,
    });
  }

  return (
    <Container>
      <label htmlFor="fiat-input">Amount of ARS to deposit</label>
      <Input
        id="fiat-input"
        placeholder="ARS"
        type="number"
        min="0"
        value={amount}
        onChange={onAmountChange}
      />
      <Button
        type="primary"
        disabled={errors.length || !amount}
        onClick={onButtonClick}
      >
        Buy
      </Button>
    </Container>
  );
}

export default DepositForm;
