/* DO NOT MODIFY */
const rootElement = document.querySelector(".foods");
const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco"
  },
  {
    id: 2,
    image: "🍔",
    name: "burger"
  },
  {
    id: 3,
    image: "🍎",
    name: "apple"
  },
  {
    id: 4,
    image: "🥞",
    name: "pancakes"
  }
];

/** Write code below**/

class Food {
  constructor(list, root) {
    const food = document.querySelector(root);
    list.forEach(
      (item) =>
        (food.innerHTML =
          food.innerHTML +
          `<div class='food'>
      ${item.image}  ${item.name}
    </div>`)
    );
    const nodes = document.querySelectorAll(".food");
    nodes.forEach((n) => n.addEventListener("click", this.handleClick, false));
  }

  handleClick = (e) => {
    e.target.remove();
  };
}

new Food(foodData, ".foods");
