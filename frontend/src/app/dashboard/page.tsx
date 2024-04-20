'use client'

import { ButtonBack } from '@/components/Buttons/back'
import Link from 'next/link'
import { ItemCV } from './components/itemCV'
import { ModalSearch } from '@/components/Modals/search'

export default function Dashboard() {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center py-16" id="quem-somos">
        <div className="max-w-screen-md w-full flex flex-col gap-4 items-center px-4 md:px-0">
          <div className="flex justify-between w-full items-center">
            <ButtonBack />
            <div className="w-full flex justify-end">
              <Link
                href="/curriculum/adicionar"
                className="bg-green-600 rounded-md hover:bg-secondary hover:text-primary duration-300 p-4"
              >
                Add CV
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="w-2/3 md:w-1/2 border rounded-md p-4 text-center">
              Lista de CVs
            </div>
            <Link
              className="w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300"
              href="/login"
            >
              Login
            </Link>
          </div>

          <div className="w-full text-center">
            <div className="w-full flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div className="border rounded-md p-4 w-full text-center">
                  Nenhum CV cadastrado
                </div>
              </div>
              <ItemCV />
              <ItemCV />
              <ItemCV />
              <div className="flex border justify-center items-center min-h-96">
                Ops ! Ocorreu um erro ao buscar os CVs
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <div className="w-full flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div className="border rounded-md p-4 w-1/3 text-center">
                  Meu CV
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="border rounded-md p-4 w-full text-center">
                  Nenhum CV cadastrado
                </div>
              </div>
              <ItemCV />
              <ItemCV />
              <ItemCV />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <Link
              className="w-1/3 md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300"
              href="/"
            >
              Sobre
            </Link>
            <ModalSearch />
          </div>
        </div>
      </div>
    </main>
  )
}
