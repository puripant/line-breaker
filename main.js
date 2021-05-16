let magic = () => {
  let textbox = document.getElementById("box").getElementsByTagName("textarea")[0]
  textbox.classList.remove("animated")

  if (textbox.value === "") {
    textbox.value = "\u200b"
  } else {
    textbox.value = textbox.value.replace(/\n/g, "\n\u200b"); // or maybe \s for all whitespace
  }

  textbox.select()
  document.execCommand("copy")

  textbox.classList.add("animated")
}