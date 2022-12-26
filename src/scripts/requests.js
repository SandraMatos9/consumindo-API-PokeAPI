async function getAllPokemons() {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      render(res.results)
      console.log(res.results)
      return render
    })
  console.log(pokemons.results)
  return pokemons
}



async function getPokemonByName(idPokemon) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`, {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        const mainList = document.querySelector('.listaPokemons')

        mainList.innerHTML = ''

        let mensagem = document.createElement('h1')

        mensagem.innerHTML = 'Pokémon não encontrado!'
        mensagem.style.color = 'white'

        let imagem = document.createElement('img')
        imagem. src = pokeNaoEncontrado.png


        mainList.append(imagem,mensagem)
      }
    })
    .then(res => {

      return res

    }).catch((error) => {
      const mainList = document.querySelector('.listaPokemons')

      mainList.innerHTML = ''

      let mensagem = document.createElement('p')
      let imagem = document.createElement('img')
      imagem.src = "./src/assets/pokeNaoEncontrado.gif "
      mensagem.innerHTML = 'Pokemon não encontrado'
      mensagem.style.color = 'white'


      mainList.append(imagem,mensagem)
    });

  return pokemon
}



function renderSearch() {
  const searchInput = document.querySelector('input')
  const botaoPesquisa = document.querySelector('#botaoPesquisa')

  botaoPesquisa.addEventListener('click', () => {

    if (searchInput.value) {
      getPokemonByName(searchInput.value).then((pokemon) => {

        if (pokemon) {
          const mainList = document.querySelector('.listaPokemons')

          mainList.innerHTML = ''

          const card = criandoCardPokemon(pokemon)

          mainList.append(card)
        }
      })
    } else {
      getAllPokemons()

    }
  })



}

getAllPokemons()

renderSearch()

