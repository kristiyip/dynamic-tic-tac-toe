import React from 'react'
import './index.css'

const TicTacToeBoard = React.memo(() => {
  const startingGrid = new Array(9).fill(0)
  console.log(startingGrid)
  return (
    <div className="boardContainer">
      <div className="grid">
        {
          startingGrid.map(square => (
            <div className="squareContainer">
              {square}
            </div>
          ))
        }
      </div>
    </div>
  )
})

export default TicTacToeBoard