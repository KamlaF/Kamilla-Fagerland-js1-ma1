//question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// question 3

heading.style.fontSize = "2em";

// question 4

console.dir(heading.className);
heading.className = "subheading";

console.log(heading.className);

// question 5

const getparagraph = document.querySelectorAll("p");
const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
}

// question 6

const getDiv = document.querySelector(".results");
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

catList(cats);

// question 8

function createCats(cats) {
  let listItems = "";

  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
    console.log(cats[i].age);

    let catsAge = "Age Unknown";
    if (cats[i].age) {
      catsAge = cats[i].age;
    }

    listItems =
      listItems +
      "<div>" +
      "<h5>" +
      cats[i].name +
      "</h5>" +
      "<p>" +
      catsAge +
      "</p>" +
      "</div>";
  }

  const finalHtml = listItems;

  return finalHtml;
}

const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
