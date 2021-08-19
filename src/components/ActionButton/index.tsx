import Link from 'next/link'
import { ReactNode } from 'react'
import { Button } from './styles'

interface ActionButtonProps {
   children: ReactNode
   linkTo?: string
}

export function ActionButton({ linkTo, children }: ActionButtonProps) {
   return (
      <Link href={linkTo || ''}>
         <a>
            <Button>{children}</Button>
         </a>
      </Link>
   )
}
