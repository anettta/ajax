const btn = document.querySelector(".btn");
const url = "./api/people.json";

// *****************  start   ********************
btn.addEventListener("click", async () => {
  // getData(url);
  // fetch method with JSON data format below
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => displayItems(data))
  //   .catch((err) => console.log(err));
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name} </p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
// *****************  end   ********************

// another method with XML format
function getData(url) {
  const movie = new XMLHttpRequest();

  movie.open("GET", url);
  movie.onreadystatechange = function () {
    if (movie.readyState === 4 && movie.status === 200) {
      const data = JSON.parse(movie.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name} </p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: movie.status,
        text: movie.status.text,
      });
    }
  };

  movie.send();
}
