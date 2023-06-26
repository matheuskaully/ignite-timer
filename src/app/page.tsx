'use client'

import { Play } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Precisa ser no mínimo 5 minutos')
    .max(60, 'Não pode ultrapassar 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: any

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `⌚${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            list="task-suggestions"
            placeholder="dê um nome para seu projeto"
            className="h-10 flex-1 border-0 border-b-2 border-newgray-100 bg-transparent px-2 py-0 text-lg font-bold focus:border-newgreen-500 focus:shadow-none focus:outline-none focus:placeholder:text-newgray-500"
            {...register('task')}
          />
          <label htmlFor="minutesAmount">durante</label>
          <input
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            maxLength={60}
            placeholder="00"
            className="h-10 w-16 border-0 border-b-2 border-newgray-100 bg-transparent px-2 py-1 text-lg font-bold focus:border-newgreen-500 focus:shadow-none focus:outline-none focus:placeholder:text-newgray-500"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </div>

        <div className="flex gap-4 font-alt text-[10rem] leading-[8rem]">
          <span className="rounded-lg bg-newgray-700 px-4 py-10">
            {minutes[0]}
          </span>
          <span className="rounded-lg bg-newgray-700 px-4 py-10">
            {minutes[1]}
          </span>
          <div className="flex w-12 justify-center overflow-hidden px-2 py-8 text-newgreen-500">
            :
          </div>
          <span className="rounded-lg bg-newgray-700 px-4 py-8">
            {seconds[0]}
          </span>
          <span className="rounded-lg bg-newgray-700 px-4 py-8">
            {seconds[1]}
          </span>
        </div>

        <button
          disabled={isSubmitDisabled}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-newgreen-500 p-4 font-bold transition-colors hover:bg-newgreen-900 disabled:cursor-not-allowed disabled:bg-newgreen-900 disabled:opacity-70"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
