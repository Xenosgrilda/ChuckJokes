document.querySelector('.get-jokes').addEventListener('click', handleClick);

async function handleClick()
{
  // Elements
  const jokesUl = document.querySelector('.jokes');
  const amount = document.querySelector('input[type = "number"]').value;

  // Getting Data
  const response = await Jokes.getJoke(amount);

  // Displaying Data
  jokesUl.innerHTML = '';
  response.value.forEach( jokeData => {
    jokesUl.innerHTML += `<li> ${jokeData.joke} </li>`;
  });

  jokesUl.style.display !== 'block' ? jokesUl.style.display = 'block': null;
}