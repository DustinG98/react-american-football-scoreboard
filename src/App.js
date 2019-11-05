//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  //handler function. takes in team and score and updates the score of that team
  const scoreHandler = function (team, score) {
      ((team === "home") ? setHomeScore(homeScore + score) : setAwayScore(awayScore + score));
  }
  const resetHandler = function (team) {
    if(team === "home" && homeScore > 0){
      setHomeScore(0)
    }else if(team === "away" && awayScore > 0){
      setAwayScore(0)
    } else if(team === "master"){
      setHomeScore(0);
      setAwayScore(0);
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => scoreHandler("home", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => scoreHandler("home", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => scoreHandler("away", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => scoreHandler("away", 3)}>Away Field Goal</button>
        </div>
        <div className="resetButtons">
          <button className="homeReset" onClick={() => resetHandler("home")}>Home Reset</button>
          <button className="awayReset" onClick={() => resetHandler("away")}>Away Reset</button>
          <button className="masterReset" onClick={() => resetHandler("master")}>Master Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
