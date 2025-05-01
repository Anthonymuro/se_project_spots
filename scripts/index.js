// edit profile modal
const editprofilebtn = document.querySelector(".profile__edit-btn");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosebtn = editprofilemodal.querySelector(".modal__close-btn");
// new post modal
const newpostbtn = document.querySelector(".profile__add-btn");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebtn = newpostmodal.querySelector(".modal__close-btn");
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
  editprofilemodal.classList.add("modal__is-opened");
});
// close modal edit profile
editprofileclosebtn.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal__is-opened");
});
