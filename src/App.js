import { useState } from "react";
import Cards from "./components/cards";
import Score from "./components/scoring";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Score currentScore={0} bestScore={0} />
      <Cards/>
      <div className="absolute bottom-30 text-black text-center text-3xl align-text-bottom">
        <i>
          Click on an animal that you have not previously clicked!
          <br/>
          All 9 = WIN!
        </i>
        </div>
    </div>

    
  );
}


export default App;
