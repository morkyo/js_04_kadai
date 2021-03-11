// Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  databaseURL: "",
};
firebase.initializeApp(firebaseConfig);

const newPostRef = firebase.database().ref();
const storageRef = firebase.storage().ref();
const imgSample = storageRef.child("sample.png");

$(".send").on("click", function () {
  newPostRef.push({
    tweet: $(".tweet").val(),
  });
  $(".tweet").val("");
  consol.log(90);
});

newPostRef.on("child_added", function (data) {
  let v = data.val();
  let user = "テストアカウント";
  let account = "@test_account";
  let str = `<div class="tweet-wrap"><div class="tweet-icon"></div><div class="tweet-name">${user}<span>${account}</span></div><div class="tweet-desc">${v.tweet}</div></div>`;
  $(".post-tweet").prepend(str);
});
