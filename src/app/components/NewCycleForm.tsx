import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../contexts/CyclesContext'

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        id="task"
        list="task-suggestions"
        placeholder="dê um nome para seu projeto"
        disabled={!!activeCycle}
        className="h-10 flex-1 border-0 border-b-2 border-newgray-100 bg-transparent px-2 py-0 text-lg font-bold focus:border-newgreen-500 focus:shadow-none focus:outline-none focus:placeholder:text-newgray-500 disabled:cursor-not-allowed"
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
        disabled={!!activeCycle}
        className="h-10 w-16 border-0 border-b-2 border-newgray-100 bg-transparent px-2 py-1 text-lg font-bold focus:border-newgreen-500 focus:shadow-none focus:outline-none focus:placeholder:text-newgray-500 disabled:cursor-not-allowed"
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </div>
  )
}
