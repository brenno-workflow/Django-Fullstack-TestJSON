'use client'

import { CollapseProps } from '@/@types/collapse'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export function Collapse({
  title = 'Vazio',
  content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, exercitationem nihil recusandae qui facere aut architecto molestias, impedit asperiores alias corrupti ullam eveniet inventore.',
}: CollapseProps) {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root
      defaultOpen
      className="border rounded-md p-4 w-full text-center hover:bg-neutral-900 duration-300"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        className={`flex items-center cursor-pointer justify-between ${open && 'pb-3'}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <Collapsible.Trigger asChild>
          <IoIosArrowDown
            size={20}
            className={`${open && 'rotate-180'} duration-300`}
          />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="CollapsibleContent">
        <div className="py-4 text-left border-t">{content}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
