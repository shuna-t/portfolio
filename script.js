const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
let opener;
document.querySelectorAll(".more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".work-card");
    opener = button;
    modalTitle.textContent = card.querySelector(".work-title").textContent;
    modalBody.innerHTML = card.querySelector(".detail-text").innerHTML;
    modal.showModal();
    document.body.classList.add("modal-open");
  });
});
document
  .querySelector(".close-btn")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    const rect = modal.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      modal.close();
  }
});
modal.addEventListener("close", () => {
  modalBody.replaceChildren();
  document.body.classList.remove("modal-open");
  opener?.focus();
});
