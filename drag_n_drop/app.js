const sortableLists = document.querySelectorAll(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const sortableList = draggingItem.parentElement;
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableLists.forEach(sortableList => {
  sortableList.addEventListener("dragover", initSortableList);
});
