import { ReactNode } from 'react'
import { Button } from './styles'

interface ActionButtonProps {
   children: ReactNode
}

export function ActionButton({ children }: ActionButtonProps) {
   return <Button>{children}</Button>
}
