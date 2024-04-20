'use client'

import { ButtonBack } from '@/components/Buttons/back'
import { Collapse } from '@/components/Collapses/collapse'
import { IoShareSocial } from 'react-icons/io5'

import * as Avatar from '@radix-ui/react-avatar'

export default function CurriculumAdd() {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center py-16" id="quem-somos">
        <div className="max-w-screen-md w-full flex flex-col gap-4 justify-center px-4 md:px-0">
          <div className="flex w-full justify-between">
            <div>
              <ButtonBack />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">ID</span>
              <span
                className={`rounded-md border text-center px-4 py-2 hover:bg-secondary hover:text-primary duration-300`}
              >
                Number
              </span>
            </div>
            <div
              className={`flex items-center justify-center border rounded-md px-4 py-2 gap-4 hover:bg-secondary hover:text-primary duration-300`}
            >
              <span>Key</span>
              <IoShareSocial size={25} />
            </div>
          </div>

          <p>Dados Pessoais</p>

          <div
            className={`w-full flex p-4 justify-between text-center items-center border rounded-md`}
          >
            <div className="w-5/12 h-full flex items-center justify-center flex-col gap-4">
              <Avatar.Root
                className={`border inline-flex h-[200px] w-[200px] select-none items-center justify-center overflow-hidden rounded-full align-middle`}
              >
                <Avatar.Fallback className="capitalize text-5xl flex h-full w-full items-center justify-center font-medium">
                  GR
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="text-green-500">Criado em: 23/03/2024</div>
              <div className="text-yellow-400">Atualizado em: 23/03/2024</div>
            </div>
            <form className="flex flex-col gap-4 w-6/12">
              <fieldset>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu nome"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="career">Carreira</label>
                <input
                  type="text"
                  id="career"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite sua carreira"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu email"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="cellphone">Celular</label>
                <input
                  type="text"
                  id="cellphone"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu celular"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="gender">Gênero</label>
                <input
                  type="text"
                  id="gender"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu gênero"
                />
              </fieldset>
            </form>
          </div>
          <p>Dados Profissionais</p>
          <div
            className={`border rounded-md w-full flex items-center flex-col gap-4 p-8`}
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
            <button className="w-1/3 md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300">
              Salvar
            </button>
            <button className="w-1/3 md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300">
              Deletar
            </button>
            <button className="w-1/3 md:w-1/4 border p-4 rounded-md text-center hover:bg-secondary hover:text-primary duration-300">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
