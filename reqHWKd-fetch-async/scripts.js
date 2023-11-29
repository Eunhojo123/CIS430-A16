const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

async function fetchData() {
  try {
    const response = await fetch('https://mysql.cloud.wpcarey.asu.edu/ghibliapi/films');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } catch (error) {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working! Error: ${error.message}`;
    app.appendChild(errorMessage);
  }
}

fetchData();
