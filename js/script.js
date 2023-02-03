let data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

let userOneScore = document.getElementById("userOneScore");
userOneScore.textContent = data.comments[0].score;
const userOneName = document.getElementById("userOneName");
userOneName.innerText = data.comments[0].user.username;
let userOneDate = document.getElementById("userOnedate");
userOneDate.innerText = data.comments[0].createdAt;
let userOneComment = document.getElementById("userOneComment");
userOneComment.textContent = data.comments[0].content;
let userOneAvatar = document.getElementById('userOneAvatar');
userOneAvatar.src = data.comments[0].user.image.png;

let userTwoScore = document.getElementById("userTwoScore");
userTwoScore.textContent = data.comments[1].score;
const userTwoName = document.getElementById("userTwoName");
userTwoName.innerText = data.comments[1].user.username;
let userTwoDate = document.getElementById("userTwodate");
userTwoDate.innerText = data.comments[1].createdAt;
let userTwoComment = document.getElementById("userTwoComment");
userTwoComment.textContent = data.comments[1].content;
let userTwoAvatar = document.getElementById('userTwoAvatar');
userTwoAvatar.src = data.comments[1].user.image.png;

let userThreeScore = document.getElementById("userThreeScore");
userThreeScore.textContent = data.comments[1].replies[0].score;
const userThreeName = document.getElementById("userThreeName");
userThreeName.innerText = data.comments[1].replies[0].user.username;
let userThreeDate = document.getElementById("userThreedate");
userThreeDate.innerText = data.comments[1].replies[0].createdAt;
let userThreeComment = document.getElementById("userThreeComment");
userThreeComment.textContent = data.comments[1].replies[0].content;
let userThreeAvatar = document.getElementById('userThreeAvatar');
userThreeAvatar.src = data.comments[1].replies[0].user.image.png;

let userFourScore = document.getElementById("userFourScore");
userFourScore.textContent = data.comments[1].replies[1].score;
const userFourName = document.getElementById("userFourName");
userFourName.innerText = data.comments[1].replies[1].user.username;
let userFourDate = document.getElementById("userFourdate");
userFourDate.innerText = data.comments[1].replies[1].createdAt;
let userFourComment = document.getElementById("userFourComment");
userFourComment.textContent = data.comments[1].replies[1].content;
let userFourAvatar = document.getElementById('userFourAvatar');
userFourAvatar.src = data.comments[1].replies[1].user.image.png;

let plusBtns = document.querySelectorAll(".plus");
let minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {
  btn.onclick = function () {
    let currentScore = this.parentElement.querySelector(".score").innerText;
    currentScore = Number(currentScore);
    currentScore += 1;
    this.parentElement.querySelector(".score").innerText = currentScore;
  };
});

minusBtns.forEach((btn) => {
  btn.onclick = function () {
    let currentScore = this.parentElement.querySelector(".score").innerText;
    currentScore = Number(currentScore);
    currentScore = currentScore > 0 ? currentScore - 1 : 0;
    this.parentElement.querySelector(".score").innerText = currentScore;
  };
});

let deleteBox = document.querySelector(".deleteBox");
let bg = document.querySelector(".background");
let delBtn = document.querySelectorAll(".delBtn");
delBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    deleteBox.classList.add("active");
    bg.classList.add("active");
    btn.classList.add("active");
  });
});

let cancleDel = document.getElementById("cancleDel");
cancleDel.onclick = () => {
  deleteBox.classList.remove("active");
  bg.classList.remove("active");
  delBtn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};

let confirmDel = document.getElementById("confirmDel");
confirmDel.onclick = function () {
  deleteBox.classList.remove("active");
  bg.classList.remove("active");
  delBtn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.parentElement.parentElement.parentElement.parentElement.style.display =
        "none";
    }
  });
};

let container = document.querySelector(".container");
let replyBtn = document.querySelectorAll(".replyBtn");

replyBtn.forEach((btn) => {
  btn.onclick = function () {
    let commentBox = document.createElement("div");
    commentBox.className = "commentBox";

    let image = document.createElement("img");
    image.src = data.currentUser.image.png;
    commentBox.appendChild(image);

    let textarea = document.createElement("textarea");
    textarea.className = "inputText";
    textarea.value =
      "@" + btn.parentElement.querySelector(".userName").textContent + " ";
    commentBox.appendChild(textarea);

    let button = document.createElement("button");
    button.className = "sendReply";
    button.innerText = "REPLY";
    commentBox.appendChild(button);

    button.onclick = function () {
      if(textarea.value === "@" + btn.parentElement.querySelector(".userName").textContent + " "){
        alert(`Please write something to reply!`)
      }
      else{
        button.classList.add("active");
      commentBox.style.display = "none";

      let messageBox = document.createElement("div");
      messageBox.className = "messageBox";

      let reactions = document.createElement("div");
      reactions.className = "reactions";
      let plus = document.createElement("span");
      plus.innerHTML =
        '<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>';
      reactions.appendChild(plus);

      let score = document.createElement("span");
      score.className = "score";
      score.textContent = 0;
      reactions.appendChild(score);

      let minus = document.createElement("span");
      minus.innerHTML =
        ' <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>';
      reactions.appendChild(minus);
      let totalScore = 0;
      plus.onclick = function () {
        totalScore += 1;
        score.textContent = totalScore;
      };

      minus.onclick = function () {
        totalScore = totalScore > 0 ? totalScore - 1 : 0;
        score.textContent = totalScore;
      };

      let contents = document.createElement("div");
      contents.className = "contents";

      let userBox = document.createElement("div");
      userBox.className = "userBox";

      let userInfo = document.createElement("div");
      userInfo.className = "userInfo";

      let userImage = document.createElement("img");
      userImage.src = data.currentUser.image.png;
      userInfo.appendChild(userImage);

      let userName = document.createElement("span");
      userName.className = "userName";
      userName.textContent = data.currentUser.username;
      userInfo.appendChild(userName);

      let indicator = document.createElement("span");
      indicator.className = "indicator";
      indicator.textContent = "you";
      userInfo.appendChild(indicator);

      let min = 0;
      let date = document.createElement("span");
      date.className = "date";
      date.textContent = "Just Now";
      setInterval(() => {
        min += 1;
        date.textContent = `${min} min ago`;
      }, 60000);
      userInfo.appendChild(date);

      let updateContent = document.createElement("div");
      updateContent.className = "updateContent";

      let delBtn = document.createElement("button");
      delBtn.className = "delBtn";
      delBtn.innerHTML =
        '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg> Delete';
      updateContent.appendChild(delBtn);
      delBtn.onclick = function () {
        deleteBox.classList.add("active");
        bg.classList.add("active");
        delBtn.classList.add("active");
      };
      cancleDel.addEventListener("click", () => {
        if (delBtn.classList.contains("active")) {
          delBtn.classList.remove("active");
        }
      });

      confirmDel.addEventListener("click", () => {
        if (delBtn.classList.contains("active")) {
          messageBox.style.display = "none";
        }
      });

      let editBtn = document.createElement("button");
      editBtn.innerHTML =
        '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> Edit';
      updateContent.appendChild(editBtn);

      let texts = document.createElement("div");
      texts.className = "texts";

      let p = document.createElement("p");
      p.className = "comment";
      p.textContent = textarea.value;
      texts.appendChild(p);

      let updateBtn = document.createElement("button");
      updateBtn.className = "updateBtn";
      updateBtn.textContent = "Update";

      editBtn.onclick = function () {
        p.setAttribute("contentEditable", "true");
        p.classList.add("active");
        updateBtn.classList.add("active");
      };

      updateBtn.onclick = function () {
        p.removeAttribute("contentEditable");
        p.classList.remove("active");
        updateBtn.classList.remove("active");
      };

      userBox.appendChild(userInfo);
      userBox.appendChild(updateContent);
      contents.appendChild(userBox);
      contents.appendChild(texts);
      contents.appendChild(updateBtn);
      messageBox.appendChild(reactions);
      messageBox.appendChild(contents);
      btn.parentElement.parentElement.parentElement.after(messageBox);
      }
    };

    this.parentElement.parentElement.parentElement.after(commentBox);
  };
});

let sendBtn = document.getElementById("send");

sendBtn.onclick = function () {
  sendBtn.classList.add("active");
  let messageBox = document.createElement("div");
  messageBox.className = "messageBox";

  let reactions = document.createElement("div");
  reactions.className = "reactions";
  let plus = document.createElement("span");
  plus.innerHTML =
    '<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>';
  reactions.appendChild(plus);

  let score = document.createElement("span");
  score.className = "score";
  score.textContent = 0;
  reactions.appendChild(score);

  let minus = document.createElement("span");
  minus.innerHTML =
    ' <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>';
  reactions.appendChild(minus);
  let totalScore = 0;
  plus.onclick = function () {
    totalScore += 1;
    score.textContent = totalScore;
  };

  minus.onclick = function () {
    totalScore = totalScore > 0 ? totalScore - 1 : 0;
    score.textContent = totalScore;
  };

  let contents = document.createElement("div");
  contents.className = "contents";

  let userBox = document.createElement("div");
  userBox.className = "userBox";

  let userInfo = document.createElement("div");
  userInfo.className = "userInfo";

  let userImage = document.createElement("img");
  userImage.src = data.currentUser.image.png;
  userInfo.appendChild(userImage);

  let userName = document.createElement("span");
  userName.className = "userName";
  userName.textContent = data.currentUser.username;
  userInfo.appendChild(userName);

  let indicator = document.createElement("span");
  indicator.className = "indicator";
  indicator.textContent = "you";
  userInfo.appendChild(indicator);

  let min = 0;
  let date = document.createElement("span");
  date.className = "date";
  date.textContent = "Just Now";
  setInterval(() => {
    min += 1;
    date.textContent = `${min} min ago`;
  }, 60000);
  userInfo.appendChild(date);

  let updateContent = document.createElement("div");
  updateContent.className = "updateContent";

  let delBtn = document.createElement("button");
  delBtn.className = "delBtn";
  delBtn.innerHTML =
    '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg> Delete';
  updateContent.appendChild(delBtn);
  delBtn.onclick = function () {
    deleteBox.classList.add("active");
    bg.classList.add("active");
    delBtn.classList.add("active");
  };
  cancleDel.addEventListener("click", () => {
    if (delBtn.classList.contains("active")) {
      delBtn.classList.remove("active");
    }
  });

  confirmDel.addEventListener("click", () => {
    if (delBtn.classList.contains("active")) {
      messageBox.style.display = "none";
    }
  });

  let editBtn = document.createElement("button");
  editBtn.innerHTML =
    '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> Edit';
  updateContent.appendChild(editBtn);

  let texts = document.createElement("div");
  texts.className = "texts";

  let p = document.createElement("p");
  p.className = "comment";
  p.textContent = sendBtn.parentElement.querySelector('textarea').value;
  texts.appendChild(p);

  let updateBtn = document.createElement("button");
  updateBtn.className = "updateBtn";
  updateBtn.textContent = "Update";

  editBtn.onclick = function () {
    p.setAttribute("contentEditable", "true");
    p.classList.add("active");
    updateBtn.classList.add("active");
  };

  updateBtn.onclick = function () {
    p.removeAttribute("contentEditable");
    p.classList.remove("active");
    updateBtn.classList.remove("active");
  };

  sendBtn.parentElement.querySelector('textarea').value = '';
  userBox.appendChild(userInfo);
  userBox.appendChild(updateContent);
  contents.appendChild(userBox);
  contents.appendChild(texts);
  contents.appendChild(updateBtn);
  messageBox.appendChild(reactions);
  messageBox.appendChild(contents);
  sendBtn.parentElement.before(messageBox);
};
