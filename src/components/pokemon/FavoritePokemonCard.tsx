import type { FavPokemons } from '@interfaces/fav-pokemons'
import { createSignal, Show, type Component } from 'solid-js';

interface Props {
  pokemon: FavPokemons;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [ isVisible, setIsVisible ] = createSignal(true)
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`

  const deleteFav = () => {
    const favs: FavPokemons[] = JSON.parse(
      localStorage.getItem('favs') ?? '[]'
    )

    const newFavs = favs.filter((pokemon) => pokemon.id !== props.pokemon.id)

    localStorage.setItem('favs', JSON.stringify(newFavs))
    setIsVisible(false)
  }

  return (
    <Show when={ isVisible() }>
      <div class='flex flex-col justify-center items-center'>
        <a href={`/pokemons/${props.pokemon.name}`}>
          <img src={src} alt="poke-icon" width={96} height={96} 
            style={`view-transition-name: ${props.pokemon.name}-image`} 
          />
          <p class='capitalize'>
            #{props.pokemon.id} {props.pokemon.name}
          </p>
        </a>
        <button class='text-red-400' onClick={deleteFav}>
          Borrar
        </button>
      </div>
    </Show>
  )
}