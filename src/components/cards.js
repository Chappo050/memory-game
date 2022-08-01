import { SiFoodpanda } from "react-icons/si";
import { useEffect, useState } from "react";
import { FaDog, FaCat, FaFish } from "react-icons/fa";
import {
  GiRabbit,
  GiHummingbird,
  GiDuck,
  GiElephant,
  GiFox,
} from "react-icons/gi";

function Cards() {
  const animalArray = [
    <SiFoodpanda size="auto" id="0" />,
    <FaCat size="auto" id="1" />,
    <FaDog size="auto" id="2" />,
    <GiRabbit size="auto" id="3" />,
    <FaFish size="auto" id="4" />,
    <GiHummingbird size="auto" id="5" />,
    <GiDuck size="auto" id="6" />,
    <GiElephant size="auto" id="7" />,
    <GiFox size="auto" id="8" />,
  ];

  let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [clickedAnimal, setClickedAnimal] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isWon, setWon] = useState(false);

  const ClickCard = (e) => {
    if (!clickedAnimal.includes(e.currentTarget.id)) {
      setScore(score + 1);
      setClickedAnimal(clickedAnimal.concat(e.currentTarget.id));

    } else {
        if (score > bestScore) {
            setBestScore(score);
          }
        console.log("FAIL");
        setScore(0);
        setClickedAnimal([]);
        
      }
    };

  //This will update the score correctly instead of out of whack (async)
  useEffect(() => {
    if (score == 9) {
        console.log("win");
        setBestScore('WIN')
        setWon(true);
    } 
  }, [score]);
  
  return (
    <div>
        
      <div className="absolute top-0 right-10 h-16 w-25 mt-10 text-xl">
        <i>Current Score: {score} </i>
        <br />
        <i>Best Score: {bestScore} </i>
      </div>
      <div className="p-8 bg-gray-500">
        <div className="grid grid-cols-3 gap-10 pt-20 lg:p-30">
          {ShuffleArray(numberArray).map((item, i) => {
            return (
              <DisplaySingleCard
                key={i}
                animals={animalArray}
                number={numberArray[item]}
                click={ClickCard}
              />
            );
          })}

        </div>
      </div>
    </div>
  );
}

const DisplaySingleCard = ({ animals, number, click }) => (
  <div
    id={number}
    onClick={click}
    className="p-4 bg-gray-400 rounded-md flex i
  tems-center justify-center w-36 lg:w-40 hover:bg-gray-600"
  >
    {animals[number]}
  </div>
);


const ShuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default Cards;
