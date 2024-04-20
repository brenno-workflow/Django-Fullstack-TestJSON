'use client'

import { ButtonBack } from '@/components/Buttons/back'
import { Collapse } from '@/components/Collapses/collapse'
import Link from 'next/link'
import { IoShareSocial } from 'react-icons/io5'

import * as Avatar from '@radix-ui/react-avatar'
import { formatRoute } from '@/utils/formatRoute'
import { toast } from 'react-toastify'
import { usePDF } from 'react-to-pdf'
import { useState } from 'react'

export default function CurriculumSlug({
  params,
}: {
  params: { slug: string }
}) {
  const [isGenetatingPdf, setIsGenetatingPdf] = useState(false)
  const { fullName, initials } = formatRoute(params.slug)
  const { toPDF, targetRef } = usePDF({ filename: 'curriculum.pdf' })

  async function handleGeneratePDF() {
    await setIsGenetatingPdf(true)
    try {
      toPDF()
      toast.success('PDF gerado com sucesso.')
      setIsGenetatingPdf(false)
    } catch (error) {
      toast.error(`Erro ao gerar o PDF: ${error}`)
      setIsGenetatingPdf(false)
    }
  }
  return (
    <main
      className={`w-full ${isGenetatingPdf && 'text-primary'}`}
      ref={targetRef}
    >
      <div className="w-full flex justify-center py-16" id="quem-somos">
        <div className="max-w-screen-md w-full flex flex-col gap-4 justify-center px-4 md:px-0">
          <div className="flex w-full justify-between">
            <div>
              <ButtonBack />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">ID</span>
              <span
                className={`rounded-md border ${isGenetatingPdf && 'border-primary'} text-center px-4 py-2 hover:bg-secondary hover:text-primary duration-300`}
              >
                Number
              </span>
            </div>
            <div
              className={`flex items-center justify-center border ${isGenetatingPdf && 'border-primary'} rounded-md px-4 py-2 gap-4 hover:bg-secondary hover:text-primary duration-300`}
            >
              <span>Key</span>
              <IoShareSocial onClick={handleGeneratePDF} size={25} />
            </div>
          </div>

          <p>Dados Pessoais</p>

          <div
            className={`w-full flex p-4 justify-between text-center items-center border ${isGenetatingPdf && 'border-primary'} rounded-md`}
          >
            <div className="w-5/12 h-full flex items-center justify-center">
              <Avatar.Root
                className={`border ${isGenetatingPdf && 'border-primary'} inline-flex h-[200px] w-[200px] select-none items-center justify-center overflow-hidden rounded-full align-middle`}
              >
                <Avatar.Fallback className="capitalize text-5xl flex h-full w-full items-center justify-center font-medium">
                  {initials}
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <div className="flex flex-col gap-4 w-6/12">
              <div className="w-full text-center border rounded-md py-2">
                {fullName}
              </div>
              <div className="w-full text-center border rounded-md py-2">
                Career
              </div>
              <div className="w-full text-center border rounded-md py-2">
                Email
              </div>
              <div className="w-full text-center border rounded-md py-2">
                Phone
              </div>
              <div className="w-full text-center border rounded-md py-2">
                Gender
              </div>
              <div className="w-full text-center border rounded-md py-2">
                Pronome
              </div>
            </div>
          </div>
          <p>Dados Profissionais</p>
          <div
            className={`${isGenetatingPdf && 'border-primary'} border rounded-md w-full flex items-center flex-col gap-4 p-8`}
          >
            <Collapse
              title="Slot"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate beatae magni eaque fuga id ducimus adipisci ex. Dolorum iure quia iusto optio quam eligendi a dolores et magni impedit!"
            />
            <Collapse
              title="Slot 2"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate beatae magni eaque fuga id ducimus adipisci ex. Dolorum iure quia iusto optio quam eligendi a dolores et magni impedit!"
            />
            <Collapse
              title="Slot 3"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate beatae magni eaque fuga id ducimus adipisci ex. Dolorum iure quia iusto optio quam eligendi a dolores et magni impedit!"
            />
          </div>
          <div className="w-full flex justify-between">
            <Link
              className="w-1/3 md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300"
              href="/"
            >
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
