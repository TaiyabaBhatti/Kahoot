const save_btn = document.querySelector("#save-btn");

save_btn.addEventListener("click", () => {
  const title_kahoot = document.querySelector("#title").value;
  const question_count = document.querySelector("#ques-count").value;

  // Saving data to localStorage
  localStorage.setItem("title", title_kahoot);
  localStorage.setItem("questionCount", question_count);

title_kahoot.value="";
question_count.value=""

window.location.href ="creatEditKahoot.html";
});