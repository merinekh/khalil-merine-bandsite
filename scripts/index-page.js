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
const form = document.getElementsByClassName("form-comments")[0];
// ------FUNCTION THAT CREATE COMMENTS SECTION----------------------
addCard = (element) => {
  const formComments = createElementWithClass("div", "section-form-comments");
  const formCommentsImage = createElementWithClass(
    "img",
    "section-form-comments__image"
  );
  const formCommentsInputs = createElementWithClass(
    "div",
    "section-form-comments-inputs"
  );
  const formComment = createElementWithClass("p", "form__comment");
  const formProfile = createElementWithClass("div", "section-form-profile");
  const formProfileName = createElementWithClass(
    "p",
    "section-form-profile__name"
  );
  const formProfileDate = createElementWithClass(
    "p",
    "section-form-profile__date"
  );
  const formLine = createElementWithClass("hr", "section-form__line");

  formCommentsImage.alt = "Profile-Img";

  formProfile.appendChild(formProfileName);
  formProfile.appendChild(formProfileDate);
  // console.log(formProfile);
  formCommentsInputs.appendChild(formProfile);
  formCommentsInputs.appendChild(formComment);
  formCommentsInputs.style.width = "100%";
  formComments.appendChild(formCommentsImage);
  formComments.appendChild(formCommentsInputs);
  // console.log(formComments);
  form.appendChild(formComments);
  form.appendChild(formLine);

  formProfileName.innerText = element.author;
  formProfileDate.innerHTML = element.date;
  formComment.innerHTML = element.comment;
  formCommentsImage.src = element.src;
};

// ------PASSING THRU EACH ELEMENT OF THE COMMENTCONTENT ARRAY------
commentContent.forEach((element) => {
  addCard(element);
  // console.log(element.date);
  // console.log(element);
});

// -------------Event Listener-----------
const itemForm = document.getElementsByClassName("section-form-main")[0];

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  function deleteComments() {
    formComments = document.querySelector(".section-form-comments");
    formLine = document.querySelectorAll("hr")[0];
    console.log(formLine);
    formComments.remove();
    formLine.remove();
  }
  commentContent.forEach((element) => {
    deleteComments();
  });
  // --------------------Get inputs---------
  let newName = document.getElementsByClassName("section-form-inputs__name")[0]
    .value;
  let newComment = document.getElementsByClassName(
    "section-form-inputs__comment"
  )[0].value;
  let newAvatar = document.getElementsByClassName("section-form__image")[0].src;
  const newDate = new Date().toLocaleDateString();
  let newObj = {
    author: newName,
    comment: newComment,
    date: newDate,
    src: newAvatar,
  };
  commentContent.push(newObj);

  // ------------------SORT ARRAY-------------------------------------------------
  commentContent.sort((a, b) => new Date(b.date) - new Date(a.date));
  // console.log(commentContent);

  // console.log(addCard(commentContent));

  // // ------------------APPLY CODE FOR NEW ARRAY COMMENTCONTENT-------------------------------------------------
  commentContent.forEach((element) => {
    addCard(element);
    // console.log(element);
    // console.log(addCard(element));
  });
});

// // ------------------APPLY CODE FOR NEW ARRAY COMMENTCONTENT-------------------------------------------------
// newCommentContent.forEach((element) => {
//   // addCard(element);
//   function addCard(element) {
//     const formComments = createElementWithClass(
//       "div",
//       "section-form-comments"
//     );
//     const formCommentsImage = createElementWithClass(
//       "img",
//       "section-form-comments__image"
//     );
//     const formCommentsInputs = createElementWithClass(
//       "div",
//       "section-form-comments-inputs"
//     );
//     const formComment = createElementWithClass("p", "form__comment");
//     const formProfile = createElementWithClass("div", "section-form-profile");
//     const formProfileName = createElementWithClass(
//       "p",
//       "section-form-profile__name"
//     );
//     const formProfileDate = createElementWithClass(
//       "p",
//       "section-form-profile__date"
//     );
//     const formLine = createElementWithClass("hr", "section-form__line");

//     formCommentsImage.alt = "Profile-Img";

//     formProfile.appendChild(formProfileName);
//     formProfile.appendChild(formProfileDate);
//     // console.log(formProfile);
//     formCommentsInputs.appendChild(formProfile);
//     formCommentsInputs.appendChild(formComment);

//     formComments.appendChild(formCommentsImage);
//     formComments.appendChild(formCommentsInputs);
//     // console.log(formComments);
//     form.appendChild(formComments);
//     form.appendChild(formLine);
//     console.log(form);
//     formProfileName.innerText = element.author;
//     formProfileDate.innerHTML = element.date;
//     formComment.innerHTML = element.comment;
//     formCommentsImage.src = element.src;
//   }
//   // console.log(element.date);
//   // console.log(element);
// });
