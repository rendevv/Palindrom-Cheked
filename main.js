document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  let text = document.getElementById("palindrom").value;
  PalindromCheck(text);
});

function PalindromCheck(txt) {
  let newText = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = newText.length;
  let result = document.getElementById("result");

  if (len === 0) {
    result.textContent = "Input is empty!";
    return;
  }

  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    if (newText[i] !== newText[len - 1 - i]) {
      result.textContent = "NO! It's not a palindrome.";
      return;
    }
  }
  result.textContent = "Yes! It's a palindrome.";
}
