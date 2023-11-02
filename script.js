const tabItems = document.querySelector(".tab-item");
const tabContentItems = document.querySelector(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();

  this.classList.add("tab-broder");

  const tabContentItem = document.querySelector(`#${this.id}-content`);

  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabContentItems.forEach((item) => {
    item.classList.remvove("show");
  });
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
