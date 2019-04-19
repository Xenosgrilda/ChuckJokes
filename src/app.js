document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Criando a Função getJokes
function getJokes()
{
  const jokesUl = document.querySelector('.jokes');
  let number = document.querySelector('input[type = "number"]').value;

  number === '' ? (number = 1) : (number = number);

  const xhr = new XMLHttpRequest ();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function()
  {
    if(this.status === 200)
    {
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success')
      {
        console.log(response);
        // Coloca-se .value pois o retorno é em objeto não em array
        response.value.forEach(joke =>
        {
            output += `<li>${joke.joke}</li>`;
        });
      }

      else
      {
        output += '<li>Algo deu errado...</li>';
      };

      jokesUl.innerHTML = output;
      jokesUl.style.display = 'block';
    }
  }

  xhr.send();

  event.preventDefault()
}