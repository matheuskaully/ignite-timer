interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
}

export default function Button({ variant = undefined }: ButtonProps) {
  return (
    <button
      className={`p-4 gap-2 bg-gray-200  rounded-lg transition-colors text-sm font-bold text-zinc-700 ${
        variant?.includes('success') && 'bg-green-500 hover:bg-green-400'
      }
      ${variant?.includes('primary') && 'bg-sky-500 hover:bg-sky-400'}
      ${variant?.includes('danger') && 'bg-orange-500 hover:bg-orange-400'}
      ${variant?.includes('secondary') && 'bg-purple-500 hover:bg-purple-400'}
      ${variant ? undefined : 'bg-zinc-400 hover:bg-zinc-300'}`}
    >
      Enviar
    </button>
  )
}
