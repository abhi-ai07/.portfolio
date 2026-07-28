import { useEffect, useState } from 'react'

/**
 * Cycles through a plain array of strings, typing and deleting each.
 * Returns the currently displayed text and the active index.
 */
export function useTypewriter(items, { typeSpeed = 55, deleteSpeed = 32, holdMs = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | holding | deleting

  useEffect(() => {
    const current = items[index]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('holding'), holdMs)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), holdMs)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
      } else {
        setIndex((i) => (i + 1) % items.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, index, items, typeSpeed, deleteSpeed, holdMs])

  return { text, index }
}
