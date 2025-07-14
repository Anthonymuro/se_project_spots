const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElementId = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorElementId);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorElementId = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorElementId);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const togglebuttonState = (inputList, buttonElement) => {
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );
  //   buttonElement.disabled = hasInvalidInput;
  //   buttonElement.classList.toggle("modal__submit-btn_disabled", hasInvalidInput);
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-btn");

  togglebuttonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      togglebuttonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formlist = document.querySelectorAll(".modal__form");
  formlist.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
