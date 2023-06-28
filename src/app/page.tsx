'use client'

import { Play, X } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import NewCycleForm from './components/NewCycleForm'
import Countdown from './components/Countdown'
import * as zod from 'zod'
import { useContext } from 'react'
import { CyclesContext } from './contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'Precisa ser no mínimo 5 minutos')
    .max(60, 'Não pode ultrapassar 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <button
            onClick={interruptCurrentCycle}
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-newred-500 p-4 font-bold transition-colors hover:bg-newred-700 disabled:cursor-not-allowed"
          >
            <X size={24} />
            Interromper
          </button>
        ) : (
          <button
            disabled={isSubmitDisabled}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-newgreen-500 p-4 font-bold transition-colors hover:bg-newgreen-900 disabled:cursor-not-allowed disabled:bg-newgreen-900 disabled:opacity-70"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </main>
  )
}
