import Status from '../components/Status'

export default function History() {
  return (
    <main className="flex flex-1 flex-col p-14">
      <h1 className="text-2xl">Meu histórico</h1>
      <div className="mt-8 flex flex-1 overflow-auto">
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
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="red" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="yellow" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="green" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="yellow" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="yellow" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="yellow" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm first:w-1/2 first:pl-6">
                Estudar programação
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                20 minutos
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm">
                Há 3 meses
              </td>
              <td className="border-t-4 border-newgray-800 bg-newgray-700 p-4 text-sm last:pr-6">
                <Status statusColor="yellow" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
