import { useState, useEffect } from "react"

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }
console.log()
  return (
    <div>
      <h2>La hora actual es:</h2>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Clock
