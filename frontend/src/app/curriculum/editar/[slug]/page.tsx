'use client'

import { ButtonBack } from '@/components/Buttons/back'
import { IoShareSocial } from 'react-icons/io5'

import * as Avatar from '@radix-ui/react-avatar'
import { formatRoute } from '@/utils/formatRoute'
import { ModalSaveCurriculum } from '@/components/Modals/save'
import { ModalDeletCurriculum } from '@/components/Modals/delete'
import { ModalPublishCurriculum } from '@/components/Modals/publish'
import { TopicItem } from './components/topicItem'

export default function CurriculumEditSlug({
  params,
}: {
  params: { slug: string }
}) {
  const { fullName, initials } = formatRoute(params.slug)

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
            className={`w-full flex p-4 justify-between flex-col gap-y-4 lg:flex-row text-center items-center border rounded-md`}
          >
            <div className="w-5/12 h-full flex items-center justify-center flex-col gap-4">
              <Avatar.Root
                className={`border inline-flex h-[200px] w-[200px] select-none items-center justify-center overflow-hidden rounded-full align-middle`}
              >
                <Avatar.Fallback className="capitalize text-5xl flex h-full w-full items-center justify-center font-medium">
                  {initials}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="text-green-500">Criado em: 23/03/2024</div>
              <div className="text-yellow-400">Atualizado em: 23/03/2024</div>
            </div>
            <form className="flex flex-col gap-4 w-full md:w-6/12">
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu nome"
                  defaultValue={fullName}
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="career">Carreira</label>
                <input
                  type="text"
                  id="career"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite sua carreira"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu email"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="cellphone">Celular</label>
                <input
                  type="text"
                  id="cellphone"
                  className="border rounded-md w-full py-2 bg-transparent text-center"
                  placeholder="Digite seu celular"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
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
          <div className="border rounded-md w-full flex items-center flex-col gap-4 p-8">
            <TopicItem />
            <TopicItem />
            <TopicItem />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:justify-between">
            <ModalSaveCurriculum />
            <ModalDeletCurriculum />
            <ModalPublishCurriculum />
          </div>
        </div>
      </div>
    </main>
  )
}
