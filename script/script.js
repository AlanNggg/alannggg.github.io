const showcase_back = document.querySelector('.showcase_button_back');
const showcase_next = document.querySelector('.showcase_button_next');
const showcase_item_active = document.querySelector('.active');
const showcase_items = document.querySelectorAll('.showcase_item');

function isActiveShowcaseItem (el) {
    return el.classList.contains('active');
}

showcase_back.addEventListener('click', () => {
    const showcase_items_array = [...showcase_items];
    const show_item_active_index = showcase_items_array.findIndex(isActiveShowcaseItem);
    
    if (show_item_active_index > 0) {
        showcase_items_array[show_item_active_index].classList.toggle('active');
        showcase_items_array[show_item_active_index-1].classList.toggle('active');
    }
});

showcase_next.addEventListener('click', () => {
    const showcase_items_array = [...showcase_items];
    const show_item_active_index = showcase_items_array.findIndex(isActiveShowcaseItem);
    
    if (show_item_active_index < showcase_items_array.length - 1) {
        showcase_items_array[show_item_active_index].classList.toggle('active');
        showcase_items_array[show_item_active_index+1].classList.toggle('active');
    }
});