import React from 'react'

interface HeaderProps {
  title: string
  rightElement?: React.ReactNode
}

export default function Header({ title, rightElement }: HeaderProps) {
  return (
    <header className="flex items-center bg-white p-4 pb-2 justify-between">
      <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">{title}</h2>
      {rightElement && (
        <div className="flex w-12 items-center justify-end">
          {rightElement}
        </div>
      )}
    </header>
  )
}