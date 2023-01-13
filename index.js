// const jquery = require("jquery")

$(".redirect").on("click", (evt) => {
  let redirect = $(evt.target).attr("href")
  if ($(evt.target).hasClass("r-out")) {
    window.open(redirect)
  } else {
    console.log("no la tiene")
  }
  console.log(redirect)
})

