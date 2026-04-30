import { ReactNode } from 'react'

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button style={{ backgroundColor: 'orange', color: 'black' }}>
      {children}
    </button>
  )
}