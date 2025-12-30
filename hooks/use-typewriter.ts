"use client"

import { useState, useEffect } from "react"

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    // Determine delay: typing speed per char, but pause when word fully typed or fully deleted
    let delay: number
    if (!isDeleting) {
      delay = text.length === currentWord.length ? pauseTime : typingSpeed
    } else {
      delay = text.length === 0 ? Math.max(300, Math.floor(pauseTime / 6)) : deletingSpeed
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1))
        } else {
          // fully typed -> start deleting after pause (handled by delay)
          setIsDeleting(true)
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          // fully deleted -> move to next word and start typing after a short pause
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
