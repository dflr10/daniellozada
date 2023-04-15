import React, { useEffect } from "react"
import { useSignal } from "react-use"

const Clock = () => {
  const [date, setDate] = useSignal(new Date())

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  }, [setDate])
  console.log(date.toLocaleTimeString())
  return (
    <div>
      <h1>La hora actual es:</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock
