import { useAuth } from '@/hook/useAuth'
import { cn } from '@/lib/cn'
import React from 'react'

export default function Logout({ className, title }) {
  const {logout} = useAuth()

  return (
    <div onClick={logout} className={cn('flex px-2 py-2.5 hover:bg-button-hover-color w-full gap-2 items-center cursor-pointer ', className)}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z" />
      </svg>
      {title}
    </div>
  )
}
