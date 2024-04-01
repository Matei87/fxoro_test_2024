const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('btn');
const modalBtn2 = document.getElementById('btn2');
const span = document.getElementsByClassName('close')[0];

modalBtn.onclick = function () {
  modal.style.display = 'block';
};

modalBtn2.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
