const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorArray = ["red", "orange", "yellow", "blue", "green"];

updateRating(0);

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updateRating(index);
  });
});

// In a forEach loop, the function passed as an argument is called once for each element in the array. The function takes up to three arguments: the current element, the index of the current element, and the array being traversed.
// The first argument, starEl, is the current element in the array, which represents a single star icon. The second argument, index, is the index of the current element in the array. So, in this loop, index represents the current index of the starEl element.

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorArray[index];
  });
}
