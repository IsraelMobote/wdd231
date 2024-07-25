
import aCourse from "./courses.mjs";

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
})
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});

aCourse.init();



const url1 = '';


try {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}