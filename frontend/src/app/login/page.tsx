'use client'

import { ButtonBack } from '@/components/Buttons/back'
import { ModalRegister } from '@/components/Modals/register'
import Link from 'next/link'
import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { BiLoaderAlt } from 'react-icons/bi'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const schema = z.object({
  user: z.string().min(8, 'Digite seu usuário'),
  password: z.string().min(8, 'Digite sua senha'),
})

type schemaLoginProps = z.infer<typeof schema>

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const [recaptchaKey, setRecaptchaKey] = useState<number>(0) // Variável para recriar o reCAPTCHA

  const handleRecaptchaChange = (value: string | null) => {
    // Esta função será chamada quando o usuário completar o reCAPTCHA com sucesso.
    // console.log('Valor do reCAPTCHA:', value);
    setRecaptchaValue(value)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schemaLoginProps>({
    resolver: zodResolver(schema),
  })

  function handleLogin(data: schemaLoginProps) {
    setIsSubmitting(true)

    console.log(data)

    if (recaptchaValue === null) {
      toast.error('Preencha o re-captcha.', {
        className: 'bg-primary',
        bodyClassName: 'text-primary',
        progressClassName: 'fancy-progress-bar',
      })
      setIsSubmitting(false)
      return
    }

    // Incrementa a chave do reCAPTCHA para recriá-lo
    setRecaptchaKey(recaptchaKey + 1)

    reset()

    toast.error('Ainda não implementado :(')

    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <main className="w-full">
      <div className="w-full flex justify-center py-16" id="quem-somos">
        <div className="max-w-screen-md w-full flex flex-col gap-4 items-center px-4 md:px-0">
          <ButtonBack />
          <h2 className="text-xl font-bold">Bem-vindo!</h2>
          <div className="w-full flex justify-center md:justify-end">
            <Link
              href="/dashboard"
              className="border py-2 px-8 rounded-md hover:bg-secondary hover:text-primary duration-300"
            >
              Continuar sem cadastro
            </Link>
          </div>
          <h3 className="text-center md:text-left w-full">Opções de login</h3>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="border rounded-md p-4 w-full text-center"
          >
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="login" className="text-left">
                Usuário
              </label>
              <input
                placeholder="Digite seu usuário ou e-mail"
                id="login"
                {...register('user')}
                type="text"
                className="border rounded-md p-4 w-full bg-transparent"
              />
              {errors.user && (
                <p className="text-red-500 text-center md:text-left font-medium">
                  {errors.user.message}
                </p>
              )}
              <label htmlFor="password" className="text-left">
                Senha
              </label>
              <div className="relative">
                <input
                  placeholder="Digite sua senha"
                  {...register('password')}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="border rounded-md p-4 w-full bg-transparent"
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    size={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer right-4 bottom-[30%] text-secondary"
                  />
                ) : (
                  <FaRegEye
                    size={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer right-4 bottom-[30%] text-secondary"
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-center md:text-left font-semibold">
                  {errors.password.message}
                </p>
              )}
              <ReCAPTCHA
                key={recaptchaKey}
                sitekey="6LfAsJ8pAAAAAE3xoB7M7CMpzsJ9pyCc8a7r7N6I"
                onChange={handleRecaptchaChange}
                className="max-w-[300px]"
              />
              <div className="w-full flex justify-end">
                {isSubmitting ? (
                  <div className="cursor-not-allowed flex justify-center border py-2 w-full md:w-1/3 px-8 rounded-md">
                    <BiLoaderAlt
                      className="animate-spin cursor-not-allowed"
                      color="#fff"
                      size={25}
                    />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="border py-2 w-full md:w-1/3 px-8 rounded-md hover:bg-secondary hover:text-primary duration-300"
                  >
                    Entrar
                  </button>
                )}
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-4 w-full items-center md:items-start">
            <p className="text-lg font-medium">Não tem cadastro?</p>
            <ModalRegister />
          </div>
        </div>
      </div>
    </main>
  )
}
