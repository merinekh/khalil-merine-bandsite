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
