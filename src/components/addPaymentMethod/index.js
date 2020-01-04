import React, { useState, useEffect } from 'react';
import View from './view';

const AddPaymentMethod = props => {
  const [card, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const navigate = () => {
    props.navigation.navigate('Account');
  };

  const onSubmit = () => {
    const data = {
      cardNumber: card,
      exp_month: Number(month),
      exp_year: Number(year),
      cvc,
    };
    props.actions.addCreditCard({ data, navigate });
  };

  return (
    <View
      setCard={setCard}
      setMonth={setMonth}
      setYear={setYear}
      setCvc={setCvc}
      onSubmit={onSubmit}
    />
  );
}

export default AddPaymentMethod;
