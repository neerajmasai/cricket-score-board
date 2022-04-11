import {useState} from "react";

function App() {
  let [score, setScore] = useState(76);
  let [wicket, setWicket] = useState(2);
  let [over, setOver] = useState(50);

  const handleScore = (val) => {
    setScore(score + val);
  }

  const handleWicket = () => {
    setWicket(wicket + 1);
  }

  const handleOver = () => {
    setOver(over + 1);
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Math.floor(over/6)  + "." + (over%6)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleScore(1)}>Add 1</button>
        <button className="addScore4" onClick={() => handleScore(4)}>Add 4</button>
        <button className="addScore6" onClick={() => handleScore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handleWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall" onClick={handleOver}>
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      {
        score > 100 ? <h1 className="status">India Won</h1> : null
      }
    </div>
  );
}

export default App;