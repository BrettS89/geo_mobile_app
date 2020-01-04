import React from 'react';
import { useSelector } from 'react-redux';
import DefaultHuntCard from './defaultHuntCard';
import FinishedHuntCard from './finishedHunt';
import YouWonHuntCard from './youWonHunt';

export default function huntCard({ hunt, hunt: { huntId }, startHunting }) {
  let Card = DefaultHuntCard;
  const userId = useSelector(state => state.user.user._id);

  if (huntId.finished && huntId.winner !== userId) {
    Card = FinishedHuntCard;
  } else if (huntId.finished && huntId.winner === userId) {
    Card = YouWonHuntCard;
  }

  return (
    <Card
      hunt={hunt}
      startHunting={startHunting}
    />
  );
}
