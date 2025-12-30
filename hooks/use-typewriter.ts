"use client"

import { useState, useEffect } from "react"

export function useTypewriter(words: string[], typingSpeed = 50, deletingSpeed = 30, pauseTime = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1))
          } else {
            // Pause before deleting
            setIsDeleting(true)
          }
        } else {
          // Deleting
          if (text.length > 0) {
            setText(text.slice(0, -1))
          } else {
            // Move to next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
