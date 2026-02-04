import Link from 'next/link'
import React from 'react'
import Content from './Content'

const Sidebar = () => {
  return (
   <>
  <aside
        id="top-bar-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full pt-16 -translate-x-full sm:translate-x-0 bg-neutral-primary-soft border-e"
      >
        <ul className="space-y-2 p-4">
            <Content />
        </ul>
      </aside>
</>
  )
}

export default Sidebar