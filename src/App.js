import './App.css';
import React, {useState} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (option) => {
    switch (option) {
      case 'good': 
        setGood(good + 1);
        break;
      case 'neutral': 
        setNeutral(neutral + 1);
        break;
      case 'bad': 
        setBad(bad + 1);
        break;

      default: console.log('222');
    };
  } 

  const handleFeedbackAdd = (event) => {
    event.preventDefault();
    addFeedback (event.currentTarget.name);
  };

  const countTotalFeedback = () => {
      return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
      return Math.round(100 * good / (good + neutral + bad));
  };

  return (
    <div className="App">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedbackAdd}></FeedbackOptions>
      <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
    </div>
  );
};

