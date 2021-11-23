let data = {
  portofolio_1: [
    { img: "https://source.unsplash.com/350x350/?technologie" },
    { img: "https://source.unsplash.com/350x350/?technologies" },
    { img: "https://source.unsplash.com/350x350/?technology" },
  ],
  portofolio_2: [
    { img: "https://source.unsplash.com/350x350/?hacker" },
    { img: "https://source.unsplash.com/350x350/?gaming" },
    { img: "https://source.unsplash.com/350x350/?computer" },
  ],
  blog: [
    {
      img: "https://source.unsplash.com/350x350/?coffee",
      title: "Coffee",
      text: "All About Coffee.",
      button: "Go To Coffee",
    },
    {
      img: "https://source.unsplash.com/350x350/?food",
      title: "Food",
      text: "All About Food.",
      button: "Go To Food",
    },
    {
      img: "https://source.unsplash.com/350x350/?dessert",
      title: "Dessert",
      text: "All About Dessert.",
      button: "Go To Dessert",
    },
  ],
  team: [
    {
      img: "https://source.unsplash.com/350x350/?men",
      name: "Agus Miftah",
    },
    {
      img: "https://source.unsplash.com/350x350/?woman",
      name: "Siti Mursidah",
    },
    {
      img: "https://source.unsplash.com/350x350/?tennager-men",
      name: "Ablo Diardo",
    },
  ],
};

let log = console.log;
let portoFolio_1 = document.getElementById("img-portofolio-1");
let portoFolio_2 = document.getElementById("img-portofolio-2");
let blog = document.getElementById("img-blog");
let team = document.getElementById("img-team");

for (let i = 0; i < data.portofolio_1.length; i++) {
  log(data.portofolio_1[i]);
  portoFolio_1.innerHTML += `<div class="col">
    <img
      src="${data.portofolio_1[i].img}"
      class="mx-auto d-block"
      alt=""
    />
  </div>`;
}

for (let i = 0; i < data.portofolio_2.length; i++) {
  log(data.portofolio_2[i]);
  portoFolio_2.innerHTML += `<div class="col">
    <img
      src="${data.portofolio_2[i].img}"
      class="mx-auto d-block"
      alt=""
    />
  </div>`;
}

for (let i = 0; i < data.blog.length; i++) {
  log(data.blog[i]);
  blog.innerHTML += `<div class="card card-blog">
  <img
    src="${data.blog[i].img}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${data.blog[i].title}</h5>
    <p class="card-text">${data.blog[i].text}</p>
    <a href="#" class="btn btn-primary">${data.blog[i].button}</a>
  </div>
</div>`;
}

for (let i = 0; i < data.team.length; i++) {
  log(data.team[i]);
  team.innerHTML += `<div class="card card-rounded">
  <img
    src="${data.team[i].img}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${data.team[i].name}</h5>
  </div>
</div>`;
}

const imgNav = document.getElementById("img-nav");

imgNav;
