export default function Countdown() {
  return (
    <div className="flex gap-4 font-alt text-[10rem] leading-[8rem]">
      <span className="rounded-lg bg-newgray-700 px-4 py-10">{minutes[0]}</span>
      <span className="rounded-lg bg-newgray-700 px-4 py-10">{minutes[1]}</span>
      <div className="flex w-12 justify-center overflow-hidden px-2 py-8 text-newgreen-500">
        :
      </div>
      <span className="rounded-lg bg-newgray-700 px-4 py-8">{seconds[0]}</span>
      <span className="rounded-lg bg-newgray-700 px-4 py-8">{seconds[1]}</span>
    </div>
  )
}
