interface StatusColorProps {
  statusColor: 'yellow' | 'red' | 'green'
}

export default function Status({ statusColor }: StatusColorProps) {
  if (statusColor === 'yellow') {
    return (
      <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-newyellow-500 ">
        Em andamento
      </span>
    )
  } else if (statusColor === 'red') {
    return (
      <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-newred-500 ">
        Interrompido
      </span>
    )
  } else if (statusColor === 'green') {
    return (
      <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-newgreen-500 ">
        Concluído
      </span>
    )
  }
}
