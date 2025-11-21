import { useEffect, ReactNode } from 'react'

interface PageChangerProps {
  children: ReactNode
}

export const PageChanger = ({ children }: PageChangerProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>{children}</div>
}
