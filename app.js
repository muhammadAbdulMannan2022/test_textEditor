const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const alignLeft = document.querySelector("#alignLeft");
const alignRight = document.querySelector("#alignRight");
const alignCenter = document.querySelector("#alignCenter");
const alignJustify = document.querySelector("#alignJustify");
const font = document.querySelector("#font");
const textTransform = document.querySelector("#textTransform");
const color = document.querySelector("#color");
const textEdito = document.querySelector("#textEdito");

addClass(bold, ["font-bold"]);
addClass(italic, ["italic"]);
addClass(underline, ["underline"]);
// for alignment
alignment(alignLeft, "text-left");
alignment(alignRight, "text-right");
alignment(alignCenter, "text-center");
alignment(alignJustify, "text-justify");
//
changeEvent(font, []);
function addClass(item, classList) {
  item.addEventListener("click", (e) => {
    for (const className in classList) {
      textEdito.classList.toggle(classList[className]);
    }
  });
}
function alignment(item, className) {
  item.addEventListener("click", (e) => {
    textEdito.classList.add(className);
    switch (className) {
      case "text-left":
        textEdito.classList.remove("text-right", "text-center", "text-justify");
        break;
      case "text-right":
        textEdito.classList.remove("text-left", "text-center", "text-justify");
        break;
      case "text-center":
        textEdito.classList.remove("text-right", "text-left", "text-justify");
        break;
      case "text-justify":
        textEdito.classList.remove("text-right", "text-left", "text-center");
        break;
    }
  });
}
function changeEvent(item) {
  item.addEventListener("change", (e) => {
    textEdito.classList.toggle(item.value);
  });
}
color.addEventListener("change", (e) => {
  textEdito.style.background = e.target.value;
});
