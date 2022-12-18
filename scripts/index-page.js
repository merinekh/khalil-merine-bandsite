const createElementWithClass = (type, className) => {
  let element = document.createElement(type);
  element.classList.add(className);
  return element;
};

// -----------------------------WEB API----------------------------
const usersURL = "https://project-1-api.herokuapp.com/";
const myKey = "?api_key=c71dd9a6-0d71-4306-b904-6cea084f1404";
const myPage = ["register", "comments", "showdates"];
const api = `${usersURL}${myPage[1]}${myKey}`;
// console.log(api);
const CommentContent = axios.get(api).then((response) => {
  data = response.data;
  // console.log(data);
  data.forEach((element) => {
    addCard(element);
    newCommentContent.push(element);
    // console.log(element.date);
    // console.log(element);
  });
});
// console.log(CommentContent);
// ----------------------------------------------------------------
let newCommentContent = [];

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

  // formCommentsImage.alt = "Profile-Img";

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

  if (typeof element.timestamp === "number") {
    let ts = new Date(element.timestamp);
    formProfileDate.innerText = ts.toLocaleDateString();
  } else {
    formProfileDate.innerText = element.timestamp;
  }

  formProfileName.innerText = element.name;
  formComment.innerText = element.comment;
  formCommentsImage.src = element.src;
  // console.log(element.timestamp);
};

// ------PASSING THRU EACH ELEMENT OF THE COMMENTCONTENT ARRAY------
newCommentContent.forEach((element) => {
  addCard(element);
  // console.log(element);
});

// -------------Event Listener-----------
const itemForm = document.getElementsByClassName("section-form-main")[0];

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // --------------DELETE PREVIOUS COMMENTS-------------------------
  function deleteComments() {
    formComments = document.querySelector(".section-form-comments");
    formLine = document.querySelectorAll("hr")[0];
    // console.log(formLine);
    formComments.remove();
    formLine.remove();
  }
  newCommentContent.forEach((element) => {
    deleteComments();
  });
  // --------------------Get inputs & into variable: newObj---------
  let newName = document.getElementsByClassName("section-form-inputs__name")[0]
    .value;
  let newComment = document.getElementsByClassName(
    "section-form-inputs__comment"
  )[0].value;
  let newAvatar = document.getElementsByClassName("section-form__image")[0].src;
  const newDate = new Date().toLocaleDateString();
  let newObj = {
    name: newName,
    comment: newComment,
    timestamp: newDate,
    src: newAvatar,
  };
  newCommentContent.push(newObj);

  // ------------------SORT ARRAY-------------------------------------------------
  newCommentContent.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  console.log(newCommentContent);
  // // ------------------APPLY CODE FOR NEW ARRAY COMMENTCONTENT-------------------------------------------------
  newCommentContent.forEach((element) => {
    addCard(element);
    // console.log(element);
    // console.log(addCard(element));
  });
});
