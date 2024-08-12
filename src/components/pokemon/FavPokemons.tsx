import type { FavPokemons } from '@interfaces/fav-pokemons'
import { createSignal, For, type Component } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemonCard'

const getLocalStoragePokemons = (): FavPokemons[] => {
  const favPokemons = JSON.parse(
    localStorage.getItem('favs') ?? '[]'
  )

  return favPokemons
}

export const FavPokemonsList: Component = () => {
  const [ pokemons, setPokemons ] = createSignal(getLocalStoragePokemons())

  return (
    <div class='grid grid-cols-2 sm:grid-cols-4 gap-x-4'>
      <For each={ pokemons() }>
        {
          pokemon => <FavoritePokemonCard pokemon={pokemon} />
        }
      </For>
    </div>
  )
}