
function Score({currentScore, bestScore}) {
  return (
    <div className="absolute top-0 right-10 h-16 w-25 mt-10 text-xl">
        <i>Current Score: {currentScore} </i>
       <br/>
        <i>Best Score: {bestScore} </i>
    </div>
  )
}

export default Score;
