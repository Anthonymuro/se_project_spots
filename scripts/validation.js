const showInputError = (formElement, inputElement, errorMessage, settings) => {
  if (!inputElement.id) return;
  const errorElementId = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorElementId);
  if (errorMessageElement) {
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(settings.errorClass);
  }
  inputElement.classList.add(settings.inputErrorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElementId = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorElementId);
  if (errorMessageElement) {
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(settings.errorClass);
  }
  inputElement.classList.remove(settings.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
};

const disableSubmitButton = (buttonElement, settings) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
};

const enableSubmitButton = (buttonElement, settings) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(settings.inactiveButtonClass);
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, settings);
  } else {
    enableSubmitButton(buttonElement, settings);
  }
};

const resetValidation = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });
  toggleButtonState(inputList, buttonElement, settings);
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};

// === Validation settings and initialization ===
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error",
};

//  Activate validation
enableValidation(settings);
