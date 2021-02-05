const showcase_button_back = document.querySelector(".showcase_button_back");
const showcase_button_next = document.querySelector(".showcase_button_next");
const showcase_items = document.querySelectorAll(".showcase_item");

function isActiveShowcaseItem(el) {
  return el.classList.contains("active");
}

showcase_button_back.addEventListener("click", () => {
  const showcase_items_array = [...showcase_items];
  const show_item_active_index = showcase_items_array.findIndex(
    isActiveShowcaseItem
  );

  if (show_item_active_index > 0) {
    showcase_items_array[show_item_active_index].classList.remove("active");
    showcase_items_array[show_item_active_index].classList.add("next");
    showcase_items_array[show_item_active_index - 1].classList.add("active");
    showcase_items_array[show_item_active_index - 1].classList.remove("prev");
  }
});

showcase_button_next.addEventListener("click", () => {
  const showcase_items_array = [...showcase_items];
  const show_item_active_index = showcase_items_array.findIndex(
    isActiveShowcaseItem
  );

  if (show_item_active_index < showcase_items_array.length - 1) {
    showcase_items_array[show_item_active_index].classList.remove("active");
    showcase_items_array[show_item_active_index].classList.add("prev");
    showcase_items_array[show_item_active_index + 1].classList.add("active");
    showcase_items_array[show_item_active_index + 1].classList.remove("next");
  }
});
