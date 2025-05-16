// edit profile modal
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// new post modal
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// profile name and description
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// open modal new post
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal--is-opened");
});

// close modal new post
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal--is-opened");
});

// open modal edit profile
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal--is-opened");
});

// close modal edit profile
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal--is-opened");
});

// submit edit profile form
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal--is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// new post modal
const addCardModal = document.querySelector("#new-post-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const nameInput = addCardModal.querySelector("#profile-description-input");
const linkInput = addCardModal.querySelector("#card-image-input");

// submit new post form
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log("Card Name:", nameInput.value);
  console.log("Card Link:", linkInput.value);
  addCardModal.classList.remove("modal--is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
