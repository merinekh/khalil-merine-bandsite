const createElementWithClass = (type, className) => {
  let element = document.createElement(type);
  element.classList.add(className);
  return element;
};

const commentContent = [
  {
    author: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
    src: "",
  },
  {
    author: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What   an incredible day.",
    date: "01/09/2021",
    src: "",
  },
  {
    author: "Miles Acosta",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    date: "12/20/2020",
    src: "",
  },
];

console.log(commentContent);
const form = document.getElementsByClassName("form")[0];

const formTitle = createElementWithClass("h2", "form__title");
const formUp = createElementWithClass("div", "form-up");
const formUpImage = createElementWithClass("img", "form-up__image");
const formUpInputs = createElementWithClass("div", "form-up-inputs");
const formSubtitleName = createElementWithClass("p", "form-subtitle__name");
const formUpInputsName = createElementWithClass(
  "input",
  "form-up-inputs__name"
);
const formSubtitleComment = createElementWithClass(
  "p",
  "form-subtitle__comment"
);
const formUpInputsComment = createElementWithClass(
  "input",
  "form-up-inputs__comment"
);
const formUpButton = createElementWithClass("input", "form-up__button");
const formComments = createElementWithClass("div", "form-comments");
const formCommentsImage = createElementWithClass("img", "form-comments__image");
const formCommentsInputs = createElementWithClass(
  "div",
  "form-comments-inputs"
);
const formComment = createElementWithClass("p", "form__comment");
const formProfile = createElementWithClass("div", "form-profile");
const formProfileName = createElementWithClass("p", "form-profile__name");
const formProfileDate = createElementWithClass("p", "form-profile__date");
const formLine = createElementWithClass("hr", "form__line");

formTitle.innerHTML = "Join the Convesation";
formCommentsImage.alt = "Profile-Img";
formSubtitleName.innerHTML = "NAME";
formSubtitleComment.innerHTML = "COMMENT";
formUpInputsName.placeholder = "Enter your name";
formUpInputsComment.placeholder = "Add a new comment";
formUpButton.type = "button";
formUpButton.value = "COMMENT";
formUpButton.classList.add("button");
formSubtitleName.classList.add("form-subtitle");
formSubtitleComment.classList.add("form-subtitle");

for (let i = 0; i < commentContent.length; i++) {
  let element = commentContent[i];
  formProfileName.innerText = commentContent[i].author;
  formProfileDate.innerHTML = element.date;
  formComment.innerHTML = element.comment;
  // formCommentsImage.src = element.src;
  console.log(element.date);
  // We've reference the specific element in the array, We've added a date,profilename,innerhtml,formcomment
  formUpInputs.appendChild(formSubtitleName);
  formUpInputs.appendChild(formUpInputsName);
  formUpInputs.appendChild(formSubtitleComment);
  formUpInputs.appendChild(formUpInputsComment);
  formUpInputs.appendChild(formUpButton);

  formUp.appendChild(formUpImage);
  formUp.appendChild(formUpInputs);

  formProfile.appendChild(formProfileName);
  formProfile.appendChild(formProfileDate);
  // console.log(formProfile);
  formCommentsInputs.appendChild(formProfile);
  formCommentsInputs.appendChild(formComment);

  formComments.appendChild(formCommentsImage);
  formComments.appendChild(formCommentsInputs);

  form.appendChild(formTitle);
  form.appendChild(formUp);
  form.appendChild(formComments);
  form.appendChild(formLine);
  // console.log(formComments);
  // console.log(element);
}

// console.log(form);
