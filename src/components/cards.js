import { SiFoodpanda } from "react-icons/si";
import { useState } from "react";
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
    <SiFoodpanda size='auto'/>,
    <FaCat size='auto'/>,
    <FaDog size='auto'/>,
    <GiRabbit size='auto'/>,
    <FaFish size='auto'/>,
    <GiHummingbird size='auto'/>,
    <GiDuck size='auto'/>,
    <GiElephant size='auto'/>,
    <GiFox size='auto'/>,
  ];

  let numberArray = [0,1,2,3,4,5,6,7,8];

  const [tempAnimal, setTempAnimal] = useState([]);
  const [clickedAnimal, setClickedAnimal] = useState([]);





  return (
    <div className="p-8 bg-gray-500 ">
      <div className="grid grid-cols-3 gap-10 pt-20 lg:p-30">
        
      {ShuffleArray(numberArray).map((item, i)=>{
        return <DisplaySingleCard key={i} animals={animalArray} number={numberArray[item]}/>
      })}
      </div>
    </div>
  );
}


const DisplaySingleCard = ({animals, number}) => (

  <div
    className="p-4 bg-gray-400 rounded-md flex i
  tems-center justify-center w-36 lg:w-40 hover:bg-gray-600"
  >
{animals[number]}
  </div>
);


const ShuffleArray = ( array ) =>  {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math .random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


export default Cards;
