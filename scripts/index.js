// edit profile modal
const editprofilebtn = document.querySelector(".profile__edit-btn");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosebtn = editprofilemodal.querySelector(".modal__close-btn");
const editprofileform = editprofilemodal.querySelector(".modal__form");
const editprofilenameinput = editprofilemodal.querySelector(
  "#profile-name-input"
);
const editprofiledescriptioninput = editprofilemodal.querySelector(
  "#profile-description-input"
);
// new post modal
const newpostbtn = document.querySelector(".profile__add-btn");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebtn = newpostmodal.querySelector(".modal__close-btn");
// profile name and description
const profilename = document.querySelector(".profile__name");
const profiledescription = document.querySelector(".profile__description");
// open modal new post
newpostbtn.addEventListener("click", function () {
  newpostmodal.classList.add("modal__is-opened");
});
//  close modal new post
newpostclosebtn.addEventListener("click", function () {
  newpostmodal.classList.remove("modal__is-opened");
});
// open modal edit profile
editprofilebtn.addEventListener("click", function () {
  editprofilenameinput.value = profilename.textContent;
  editprofiledescriptioninput.value = profiledescription.textContent;
  editprofilemodal.classList.add("modal__is-opened");
});
// close modal edit profile
editprofileclosebtn.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal__is-opened");
});
// close modal new post
function handleEditprofilesubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();
  profilename.textContent = editprofilenameinput.value;
  profiledescription.textContent = editprofiledescriptioninput.value;
  editprofilemodal.classList.remove("modal__is-opened");
}
// the submit listener.
editprofileform.addEventListener("submit", handleEditprofilesubmit);
//new post modal
const addCardModal = document.querySelector("#new-post-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const nameInput = addCardModal.querySelector("#card-name-input");
const linkInput = addCardModal.querySelector("#card-link-input");
// close modal new post
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log("Card Name:", nameInput.value);
  console.log("Card Link:", linkInput.value);

  // Close the modal.
  addCardModal.classList.remove("modal__is-opened");
}

// the submit listener.
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
