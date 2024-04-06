let blocks = document.querySelectorAll(".block");
console.log(blocks);
for (let i = 0; i < 9; i++) {
  blocks[i].addEventListener("mouseenter", function () {
    console.log("жмакнули", i);
    blocks[i].classList.add("--active");
    setTimeout(() => {
      blocks[i].classList.remove("--active");
    }, 1000);
  });
}
