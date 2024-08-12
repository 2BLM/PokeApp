import { createSignal, type Component, type JSX } from 'solid-js'

interface Props {
  init: number
  children?: JSX.Element
}
/**
 *  En solid JS se puede hacer de esta manera tambien
 * export const Counter: Component<Props> = (props)
 * OR
 * export const Counter = (props: Props) || export const Counter = ({ init }: Props)
 * Si se descructuran las props como el ultimo ejemplo Solid JS pierde la reactividad.
 */
export const Counter = ({ init }: Props) => {

  const [ counter, setCounter ] = createSignal(init);

  return (
    <>
      <h1 class='text-4xl'>Hola Mundo</h1>
      <h3 class='text-xl'>Value: {counter()}</h3>

      <button onClick={() => setCounter( prev => ++prev )} class='bg-blue-500 p-2 mr-2 rounded'>+1</button>
      <button onClick={() => setCounter( prev => --prev )} class='bg-blue-500 p-2 mr-2 rounded'>-1</button>
    </>
  )
}