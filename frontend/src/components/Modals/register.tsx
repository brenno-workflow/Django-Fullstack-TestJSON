'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { FaRegEye, FaRegEyeSlash, FaX } from 'react-icons/fa6'
import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { BiLoaderAlt } from 'react-icons/bi'
import { useState } from 'react'

const schema = z
  .object({
    name: z
      .string({ required_error: 'Nome obrigatório' })
      .min(3, 'Digite seu nome'),
    email: z
      .string({ required_error: 'Email obrigatório' })
      .email('Digite um e-mail válido'),
    password: z
      .string({ required_error: 'Senha obrigatória' })
      .min(8, 'Mínimo de 8 caracteres'),
    passwordConfirmation: z.string({ required_error: 'Repita sua senha' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirmation'], // path of error
  })

type schemaRegisterProps = z.infer<typeof schema>

export function ModalRegister() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const [recaptchaKey, setRecaptchaKey] = useState<number>(0) // Variável para recriar o reCAPTCHA
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)

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
  } = useForm<schemaRegisterProps>({
    resolver: zodResolver(schema),
  })

  function handleRegister(data: schemaRegisterProps) {
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="border text-center py-2 px-8 md:w-1/3 font-medium rounded-md bg-secondary text-primary hover:bg-primary hover:text-secondary duration-300">
          Cadastrar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-primaryA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="overflow-y-auto flex flex-col gap-4 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-secondary p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <Dialog.Title className="text-primary font-semibold text-xl">
            Criar conta
          </Dialog.Title>
          <Dialog.Description className="text-primary">
            Preencha seus dados para criar uma conta
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-2"
          >
            <fieldset className="flex flex-col w-full gap-2">
              <label className="text-primary" htmlFor="name">
                Nome
              </label>
              <input
                className="border border-primary rounded-md p-3 w-full bg-transparent text-primary"
                id="name"
                {...register('name')}
                placeholder="Digite seu nome"
              />
              {errors.name && (
                <p className="text-red-500 text-center md:text-left font-medium">
                  {errors.name.message}
                </p>
              )}
            </fieldset>
            <fieldset className="flex flex-col w-full gap-2">
              <label className="text-primary" htmlFor="email">
                Email
              </label>
              <input
                className="border border-primary rounded-md p-3 w-full bg-transparent text-primary"
                id="email"
                {...register('email')}
                type="email"
                placeholder="Digite seu e-mail"
              />
              {errors.email && (
                <p className="text-red-500 text-center md:text-left font-medium">
                  {errors.email.message}
                </p>
              )}
            </fieldset>
            <div className="flex gap-4 flex-col md:flex-row">
              <fieldset className="flex flex-col w-full gap-2">
                <label className="text-primary" htmlFor="password">
                  Senha
                </label>
                <div className="relative">
                  <input
                    className="border border-primary rounded-md p-3 w-full bg-transparent text-primary"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Digite uma senha"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-4 bottom-[27%] text-primary"
                    />
                  ) : (
                    <FaRegEye
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-4 bottom-[27%] text-primary"
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500 text-center md:text-left font-medium">
                    {errors.password.message}
                  </p>
                )}
              </fieldset>
              <fieldset className="flex flex-col w-full gap-2">
                <label className="text-primary" htmlFor="passwordConfirmation">
                  Confirmar senha
                </label>
                <div className="relative">
                  <input
                    className="border border-primary rounded-md p-3 w-full bg-transparent text-primary"
                    id="passwordConfirmation"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    {...register('passwordConfirmation')}
                    placeholder="Repita a senha"
                  />
                  {showPasswordConfirmation ? (
                    <FaRegEyeSlash
                      size={20}
                      onClick={() =>
                        setShowPasswordConfirmation(!showPasswordConfirmation)
                      }
                      className="absolute cursor-pointer right-4 bottom-[27%] text-primary"
                    />
                  ) : (
                    <FaRegEye
                      size={20}
                      onClick={() =>
                        setShowPasswordConfirmation(!showPasswordConfirmation)
                      }
                      className="absolute cursor-pointer right-4 bottom-[27%] text-primary"
                    />
                  )}
                </div>
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-center md:text-left font-medium">
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </fieldset>
            </div>

            <div className="flex gap-4 justify-center md:justify-between flex-col md:flex-row items-center">
              <ReCAPTCHA
                key={recaptchaKey}
                sitekey="6LfAsJ8pAAAAAE3xoB7M7CMpzsJ9pyCc8a7r7N6I"
                onChange={handleRecaptchaChange}
              />
              {isSubmitting ? (
                <div className="cursor-not-allowed flex justify-center border bg-primary text-secondary text-center py-2 px-8 font-medium rounded-md hover:scale-95 duration-300">
                  <BiLoaderAlt
                    className="animate-spin cursor-not-allowed"
                    size={25}
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  className="border bg-primary text-secondary text-center py-2 px-8 font-medium rounded-md hover:scale-95 duration-300"
                >
                  Cadastrar
                </button>
              )}
            </div>
          </form>
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
