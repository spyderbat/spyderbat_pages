const avartarsComenst = Array.from(document.querySelectorAll('.comment__avatar'))


if (avartarsComenst.length > 0) {
  avartarsComenst.forEach(element => {
    const avatar = new FirstLetterAvatar({
      avatarsSelector: element,
      namesSelector: ".comment__username",
      backgroundColor: "#3794d0",
      letterColor: "#fff",
      isCircle: true,
    }).renderAvatar();
  });
}
