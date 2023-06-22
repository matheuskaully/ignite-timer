import { Play } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      {/* <h1 className="text-7xl font-bold text-zinc-100">Home</h1> */}
      <form action="" className="flex flex-col items-center gap-14">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold">
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </div>

        <div className="flex gap-4 font-alt text-[10rem] leading-[8rem]">
          <span className="rounded-lg bg-newgray-700 px-4 py-8">0</span>
          <span className="rounded-lg bg-newgray-700 px-4 py-8">0</span>
          <div className="flex w-12 justify-center overflow-hidden px-0 py-8 text-newgreen-500">
            :
          </div>
          <span className="rounded-lg bg-newgray-700 px-4 py-8">0</span>
          <span className="rounded-lg bg-newgray-700 px-4 py-8">0</span>
        </div>

        <button type="submit" className="flex">
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
