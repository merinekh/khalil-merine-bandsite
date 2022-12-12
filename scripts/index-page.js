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
    src: "https://i.pravatar.cc/150?img=3",
  },
  {
    author: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What   an incredible day.",
    date: "01/09/2021",
    src: "https://i.pravatar.cc/150?img=5",
  },
  {
    author: "Miles Acosta",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    date: "12/20/2020",
    src: "https://i.pravatar.cc/150?img=6",
  },
];

// -----------------SELECT FORM----------------------
const form = document.getElementsByClassName("form")[0];

// -----------------Element Up Part (FORM)------------------
const formTitle = createElementWithClass("h2", "form__title");
const formUp = createElementWithClass("div", "form-up");
const formDown = createElementWithClass("div", "form-down");
const formUpImage = createElementWithClass("img", "form-up__image");
const formUpInputs = createElementWithClass("div", "form-up-inputs");
const formUpSubtitleName = createElementWithClass(
  "p",
  "form-up-subtitle__name"
);
const formUpInputsName = createElementWithClass(
  "input",
  "form-up-inputs__name"
);
const formUpSubtitleComment = createElementWithClass(
  "p",
  "form-up-subtitle__comment"
);
const formUpInputsComment = createElementWithClass(
  "input",
  "form-up-inputs__comment"
);
const formUpButton = createElementWithClass("input", "form-up__button");

formTitle.innerHTML = "Join the Convesation";
formUpSubtitleName.innerHTML = "NAME";
formUpSubtitleComment.innerHTML = "COMMENT";
formUpInputsName.placeholder = "Enter your name";
formUpInputsComment.placeholder = "Add a new comment";
formUpInputsComment.type = "textarea";
formUpButton.type = "button";
formUpButton.value = "COMMENT";
formUpButton.classList.add("button");
formUpSubtitleName.classList.add("form-subtitle");
formUpSubtitleComment.classList.add("form-subtitle");
formUpImage.src = "../assets/images/Mohan-muruge.jpg";

formUpInputs.appendChild(formUpSubtitleName);
formUpInputs.appendChild(formUpInputsName);
formUpInputs.appendChild(formUpSubtitleComment);
formUpInputs.appendChild(formUpInputsComment);
formUpInputs.appendChild(formUpButton);

formUp.appendChild(formUpImage);
formUp.appendChild(formUpInputs);

form.appendChild(formTitle);
form.appendChild(formUp);

// ------------------ELEMENT DOWN PART(COMMENTS)----------------------------
commentContent.forEach((element) => {
  const formComments = createElementWithClass("div", "form-comments");
  const formCommentsImage = createElementWithClass(
    "img",
    "form-comments__image"
  );
  const formCommentsInputs = createElementWithClass(
    "div",
    "form-comments-inputs"
  );
  const formComment = createElementWithClass("p", "form__comment");
  const formProfile = createElementWithClass("div", "form-profile");
  const formProfileName = createElementWithClass("p", "form-profile__name");
  const formProfileDate = createElementWithClass("p", "form-profile__date");
  const formLine = createElementWithClass("hr", "form__line");

  formCommentsImage.alt = "Profile-Img";

  formProfile.appendChild(formProfileName);
  formProfile.appendChild(formProfileDate);
  // console.log(formProfile);
  formCommentsInputs.appendChild(formProfile);
  formCommentsInputs.appendChild(formComment);

  formComments.appendChild(formCommentsImage);
  formComments.appendChild(formCommentsInputs);

  formDown.appendChild(formComments);
  formDown.appendChild(formLine);

  form.appendChild(formDown);

  formProfileName.innerText = element.author;
  formProfileDate.innerHTML = element.date;
  formComment.innerHTML = element.comment;
  formCommentsImage.src = element.src;
  addCard();

  // console.log(element.date);
  // console.log(element);
});
function addCard() {
  const formComments = createElementWithClass("div", "form-comments");
  const formCommentsImage = createElementWithClass(
    "img",
    "form-comments__image"
  );
  const formCommentsInputs = createElementWithClass(
    "div",
    "form-comments-inputs"
  );
  const formComment = createElementWithClass("p", "form__comment");
  const formProfile = createElementWithClass("div", "form-profile");
  const formProfileName = createElementWithClass("p", "form-profile__name");
  const formProfileDate = createElementWithClass("p", "form-profile__date");
  const formLine = createElementWithClass("hr", "form__line");

  return;
}

// -----------------------------------------------------------------------------
// // ------------------ADDDING NEW OBJECT USING PREPEND----------------------
formUpButton.addEventListener("click", (event) => {
  // event.preventDefault();  -----DO NOT WORK WITH "SUBMIT" SO HAD TO DO IT WITH "CLICK"
  const newName = formUpInputsName.value;
  const newComment = formUpInputsComment.value;
  const newImage = formUpImage.src;
  const newDate = new Date().toLocaleDateString();

  let newObj = [
    {
      author: newName,
      comment: newComment,
      date: newDate,
      src: newImage,
    },
  ];
  // console.log(formComments);
  // ------------------ADDDING NEW OBJ----------------------
  newObj.forEach((element) => {
    const formComments = createElementWithClass("div", "form-comments");
    const formCommentsImage = createElementWithClass(
      "img",
      "form-comments__image"
    );
    const formCommentsInputs = createElementWithClass(
      "div",
      "form-comments-inputs"
    );
    const formComment = createElementWithClass("p", "form__comment");
    const formProfile = createElementWithClass("div", "form-profile");
    const formProfileName = createElementWithClass("p", "form-profile__name");
    const formProfileDate = createElementWithClass("p", "form-profile__date");
    const formLine = createElementWithClass("hr", "form__line");

    formCommentsImage.alt = "Profile-Img";

    formProfile.appendChild(formProfileName);
    formProfile.appendChild(formProfileDate);
    // console.log(formProfile);
    formCommentsInputs.appendChild(formProfile);
    formCommentsInputs.appendChild(formComment);
    formCommentsInputs.style.width = "100%";

    formComments.appendChild(formCommentsImage);
    formComments.appendChild(formCommentsInputs);

    formDown.prepend(formLine);
    formDown.prepend(formComments);

    formProfileName.innerText = element.author;
    formProfileDate.innerHTML = element.date;
    formComment.innerHTML = element.comment;
    formCommentsImage.src = element.src;
    addCard();

    // console.log(element.date);
    // console.log(element);
  });

  // alert("Submitted");
});

// ---------------SUBMIT LISTENER AS ASKED IN THE ASSIGNEMENT---------------------------------------------------
// ---------------------------------------------------------------------------------
// { CODE NOT WORKING PROBLEM WHEN RENDERING AFTER THE FIRST SUBMITION renders multiple time Form-down

// formUpButton.addEventListener("submit", (event) => {
//   // event.preventDefault();  -----DO NOT WORK WITH "SUBMIT" SO HAD TO DO IT WITH "CLICK"

//   const newName = formUpInputsName.value;
//   const newComment = formUpInputsComment.value;
//   const newImage = formUpImage.src;
//   const newDate = new Date().toLocaleDateString();

// let newObj = {
//   author: newName,
//   comment: newComment,
//   date: newDate,
//   src: newImage,
// };
// commentContent.push(newObj);
// // ------------------Form remove child----------------------------------------------
// let parent = document.getElementsByClassName("form-down")[0];
// parent.remove();
// // ------------------SORT ARRAY-------------------------------------------------
// let NewCommentContent = commentContent.sort(
//   (a, b) => new Date(b.date) - new Date(a.date)
// );
// console.log(NewCommentContent);
// // ------------------Adding New comment--------------------------------------------
// // NewCommentContent.forEach((element) => {
// //   const formComments = createElementWithClass("div", "form-comments");
// //   const formCommentsImage = createElementWithClass(
// //     "img",
// //     "form-comments__image"
// //   );
// //   const formCommentsInputs = createElementWithClass(
// //     "div",
// //     "form-comments-inputs"
// //   );
// //   const formComment = createElementWithClass("p", "form__comment");
// //   const formProfile = createElementWithClass("div", "form-profile");
// //   const formProfileName = createElementWithClass("p", "form-profile__name");
// //   const formProfileDate = createElementWithClass("p", "form-profile__date");
// //   const formLine = createElementWithClass("hr", "form__line");
// //   formCommentsImage.alt = "Profile-Img";
// //   formProfile.appendChild(formProfileName);
// //   formProfile.appendChild(formProfileDate);
// //   // console.log(formProfile);
// //   formCommentsInputs.appendChild(formProfile);
// //   formCommentsInputs.appendChild(formComment);
// //   formComments.appendChild(formCommentsImage);
// //   formComments.appendChild(formCommentsInputs);
// //   formDown.appendChild(formComments);
// //   formDown.appendChild(formLine);
// //   // form.appendChild(formDown);
// //   console.log(formDown);
// //   formProfileName.innerText = element.author;
// //   formProfileDate.innerHTML = element.date;
// //   formComment.innerHTML = element.comment;
// //   formCommentsImage.src = element.src;
// //   addCard();
// //   // console.log(element.date);
// //   // console.log(element);
// // });
// console.log(NewCommentContent);
// }

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// // ------------------ADDDING NEW OBJECT USING PREPEND----------------------

//   const formComments = createElementWithClass("div", "form-comments");
//   const formCommentsImage = createElementWithClass(
//     "img",
//     "form-comments__image"
//   );
//   const formCommentsInputs = createElementWithClass(
//     "div",
//     "form-comments-inputs"
//   );
//   const formComment = createElementWithClass("p", "form__comment");
//   const formProfile = createElementWithClass("div", "form-profile");
//   const formProfileName = createElementWithClass("p", "form-profile__name");
//   const formProfileDate = createElementWithClass("p", "form-profile__date");
//   const formLine = createElementWithClass("hr", "form__line");

//   formCommentsImage.alt = "Profile-Img";

//   formProfile.appendChild(formProfileName);
//   formProfile.appendChild(formProfileDate);
//   // console.log(formProfile);
//   formCommentsInputs.appendChild(formProfile);
//   formCommentsInputs.appendChild(formComment);
//   formCommentsInputs.style.width = "100%";

//   formComments.appendChild(formCommentsImage);
//   formComments.appendChild(formCommentsInputs);

//   formDown.prepend(formLine);
//   formDown.prepend(formComments);

//   formProfileName.innerText = element.author;
//   formProfileDate.innerHTML = element.date;
//   formComment.innerHTML = element.comment;
//   formCommentsImage.src = element.src;
//   addCard();

//   // console.log(element.date);
//   // console.log(element);
// });
// });
