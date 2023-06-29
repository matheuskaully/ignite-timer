'use client'

import { useContext } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Status from '../components/Status'

export default function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex flex-1 flex-col p-14">
      <h1 className="text-2xl">Meu histórico</h1>
      <div className="mt-8 flex overflow-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="items-start rounded-ss-lg bg-newgray-600 p-4 pr-6 text-left">
                Tarefa
              </th>
              <th className="bg-newgray-600 p-4 text-left">Duração</th>
              <th className="bg-newgray-600 p-4 text-left">Início</th>
              <th className="rounded-tr-lg bg-newgray-600 p-4 pr-6 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id} className="h-5">
                  <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                    {cycle.task}
                  </td>
                  <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                    {cycle.minutesAmount} minutos
                  </td>
                  <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                    {cycle.finishedDate && <Status statusColor="green" />}
                    {cycle.interruptedDate && <Status statusColor="red" />}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status statusColor="yellow" />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
