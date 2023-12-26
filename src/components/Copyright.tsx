import React from 'react'

export function Copyright() {
  const year = new Date().getFullYear()

  return <span>&copy;{year}</span>
}
