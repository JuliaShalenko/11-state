import { useState } from 'react'
import generateRandomNum from '../utils/genereteRandomNum'

function RandomNumber(props) {
  const maxNum = props.maxRandomNum
  const [randomNum, setRundomNum] = useState(generateRandomNum(maxNum))
  const cahngeRandomNum = () => {
    setRundomNum(generateRandomNum(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={cahngeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
