import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>1920s Stock Market Simulator</h1>
      <h2 className='header'>Welcome to the 1920s!</h2>
      <div className='paragraph'>
     In this game, you are a farmer living in 1920. 
        You had a good harvest last year, and between that and your savings 
        you have $500 to invest in the stock market. </div>
     
        <div className='paragraph'>  Choose which stocks to buy and sell each year, and see if you can predict 
        which companies are on their way up and who is about to crash. You can track 
        your net worth with a line graph, and at the end print a report showing 
        how you did. </div>

      <div className='paragraph'> Enter your name below to get started. </div>
       <div className='paragraph'><i> Disclaimer: The prices and some events in this simulation are fictionalized 
        to represent the general movement of the stock market during the 1920s.</i></div>

       
    </div>
  );
}

export default App;
