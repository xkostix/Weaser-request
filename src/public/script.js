const buttons = document.querySelectorAll(button);

///api/:index/

function getData(index) {
  fetch(`/api/${index}/`)
  .then (e => e.json())
  .then (data => {
      console.log(data);
  )

  }
}

buttons[0].addEventListener("click", () => {
  console.log("Hello London");
  getData(0);
  document.querySelector("img");
});
