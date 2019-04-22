var contactsLink = document.querySelector(".contacts-button");
var writeusModal = document.querySelector(".modal-write-us");
var writeusClose = writeusModal.querySelector(".modal-close");
var mapLink = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");

var writeusForm = writeusModal.querySelector(".write-us-form");
var writeusName = writeusModal.querySelector(".username");
var writeusEmail = writeusModal.querySelector(".user-email");

contactsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeusModal.classList.add("modal-show");
  writeusName.focus();
});

writeusClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeusModal.classList.remove("modal-show");
  writeusModal.classList.remove("modal-error");
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

writeusForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!writeusName.value || !writeusEmail.value) {
    evt.preventDefault();
    writeusModal.classList.remove("modal-error");
    writeusModal.offsetwidth = writeusModal.offsetwidth;
    writeusModal.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    if (writeusModal.classList.contains("modal-show")) {
      writeusModal.classList.remove("modal-show");
      writeusModal.classList.remove("modal-error");
    }
  }
});
