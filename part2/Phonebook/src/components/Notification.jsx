import { useEffect } from 'react'

const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    if (message.name === '') {
      return
    }

    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)

    return () => clearTimeout(timer)
  }, [message, setMessage])

  if (message === '') {
    return null
  }

  return <div className={message.class}>{message.name}</div>
}

export default Notification