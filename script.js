var btn = document.getElementsByClassName('btn')[0];

let isDisplayed = false;

btn.onclick = function (e) {
  let nav = document.getElementsByTagName('nav')[0];
  let ul = nav.childNodes[3];

  if (!isDisplayed) {
    ul.style.display = 'block';
    isDisplayed = true;
  } else {
    ul.style.display = 'none';
    isDisplayed = false;
  }

}
