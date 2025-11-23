const users = [
  {
    name: "Kl Rahul",
    pic: "https://i.pinimg.com/736x/8b/6b/44/8b6b444a20be448ede2cd70a3230e738.jpg",
    bio: "ICC Champions Trophy - KL Rahul",
  },
  {
    name: "Rohit Sharma",
    pic: "https://i.pinimg.com/736x/6d/3b/f5/6d3bf51638dc2a5f121f61b4f99a0c44.jpg",
    bio: "Rohit Sharma World Cup Final 2023",
  },
  {
    name: "Virat kohli",
    pic: "https://i.pinimg.com/736x/73/4d/b1/734db1808af9fdf70a30955a9d7752af.jpg",
    bio: "Virat kohli test retirment pic",
  },
  {
    name: "Dhoni",
    pic: "https://i.pinimg.com/736x/78/23/21/7823211d2e22d9b905fd7c024d71f2df.jpg",
    bio: "World Cup 2011 Finals Winning Shot",
  },
  {
    name: "Dhawan",
    pic: "https://i.pinimg.com/736x/21/25/45/212545abb77f6532b480d276c24bd1c2.jpg",
    bio: "the gabbar shikhar dhawan the legend",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    //create img
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    //create blurred layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    //create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    //append heading and para to content
    content.appendChild(heading);
    content.appendChild(para);

    //append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    //finally append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});

// saare users show karana
// filter karana har baar input krne pe
// show krna filtered users
