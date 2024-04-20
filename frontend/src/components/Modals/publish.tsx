'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { FaX } from 'react-icons/fa6'

export function ModalPublishCurriculum() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300">
          Publicar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-primaryA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="overflow-y-auto flex flex-col gap-4 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-secondary p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <Dialog.Title className="text-primary font-semibold text-xl">
            Publicar
          </Dialog.Title>
          <Dialog.Description className="text-primary">
            Tem certeza que deseja publicar?
          </Dialog.Description>
          <div className="w-full flex gap-4">
            <button className="p-4 border rounded-md w-full text-center bg-red-500 text-white">
              Não
            </button>
            <button className="p-4 border rounded-md w-full text-center bg-green-500 text-white">
              Sim
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-primary p-2 hover:bg-primary hover:text-secondary focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none duration-100"
              aria-label="Close"
            >
              <FaX size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
