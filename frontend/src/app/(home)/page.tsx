'use client'

import { Collapse } from '@/components/Collapses/collapse'
import { collapseData } from '@/components/Collapses/data'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center py-16" id="quem-somos">
        <div className="max-w-screen-md w-full flex flex-col gap-4 items-center px-4 md:px-0">
          <h2 className="text-xl font-bold text-center h-14">
            <Typewriter
              options={{
                strings: [
                  'Bem-vindo ao Curriculum42',
                  'Oferecemos uma alternativa Open Source às plataformas tradicionais de recrutamento.',
                  'Elimine custos com plataformas de recrutamento - cadastre-se gratuitamente.',
                  'Recrutamento simplificado e acessível para todos os profissionais e empresas.',
                  'A revolução no recrutamento começa aqui - Junte-se a nós no Curriculum42.',
                ],
                delay: 80,
                deleteSpeed: 5,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="w-full flex justify-end">
            <Link
              href="/login"
              className="border py-2 px-8 rounded-md hover:bg-secondary hover:text-primary duration-300"
            >
              Login
            </Link>
          </div>
          <div className="border rounded-md p-4 w-full text-center">
            Apresentação do site/sistema
          </div>
          <div className="border rounded-md p-4 w-full text-center">
            <div className="p-4 w-full flex flex-col gap-4">
              {collapseData.map((item) => (
                <Collapse
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
