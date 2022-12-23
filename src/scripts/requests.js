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
      console.log(res.results )
      return render
    })
    console.log(pokemons.results)
    return pokemons
  }
   getAllPokemons()
 

  async function getPokemonById(idPokemon){
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`,{
            
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
      
        .then(res=>res.json())
        .then(res =>{
          
            return res

        })
        return pokemon
    }
    // console.log(getPokemonById(25))


  function renderSearch(){
    const searchInput = document.querySelector('input')
    const botaoPesquisa = document.querySelector('#botaoPesquisa')

    botaoPesquisa.addEventListener('click',() =>{
        getPokemonById(searchInput.value)
    })

  }


 