import { cube } from "./math";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
function template() {
  var element = document.createElement("pre");
  element.innerHTML = ["hello webpack!", "5 cube is equl to:" + cube(5)].join(
    "\n\n"
  );
  return element;
}
document.body.appendChild(template());
