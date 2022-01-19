const avatar = new FirstLetterAvatar({
  avatarsSelector: ".comment__avatar",
  namesSelector: ".comment__username",
  backgroundColor: "#3794d0",
  letterColor: "#fff",
  isCircle: true,
}).renderAvatar();