function creatXhr() {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
  } else {
    var xhr = new ActiveXObject("Microsoft");
  }
  return xhr;
}

function $(it) {
  return document.getElementById(it);
}
