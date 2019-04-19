document.querySelector('.get-jokes').addEventListener('click', handleClick);

// Criando a Função getJokes
async function handleClick()
{
  // Elements
  const jokesUl = document.querySelector('.jokes');
  const amount = document.querySelector('input[type = "number"]').value;

  // Getting Data
  const response = await Jokes.getJoke(amount);
  console.log(response);

  // Displaying Data
  jokesUl.innerHTML = '';
  response.value.forEach( jokeData => {
    jokesUl.innerHTML += `<li> ${jokeData.joke} </li>`;
  });

  jokesUl.style.display !== 'block' ? jokesUl.style.display = 'block': null;
}