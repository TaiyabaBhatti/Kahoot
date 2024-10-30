
    const ansContainer = document.querySelector(".ques-ans-option-block");
    const ansInputList = ansContainer.querySelectorAll(
      ".ans-by-textarea"
    );
    const question = document.querySelector(".ques-input");
  
    const typingFunctionality = (checkCircle, event, textarea) => {
      if (textarea.value.length >= 1 && event.key != "Backspace") {
        checkCircle.classList.remove("hidden");
        checkCircle.classList.add("flex");
      } else if (textarea.value.length < 1) {
        checkCircle.classList.add("hidden");
        checkCircle.classList.remove("flex");
      }
    };
  
    const statusUpdate = (colorNew, colorOld, circle, statusVari) => {
      if (statusVari === 1) {
        circle.classList.add(colorOld, "unchecked");
        circle.classList.remove(colorNew, "checked");
        statusVari = 0;
      } else {
        statusVari = 1;
        circle.classList.remove(colorOld, "unchecked");
        circle.classList.add(colorNew, "checked");
      }
      return statusVari;
    };
  
    ansInputList.forEach((textarea) => {
      let statusChecked = 0;
      const imgCheckBlock = textarea.nextElementSibling;
  
      textarea.addEventListener("keyup", (event) => {
        typingFunctionality(imgCheckBlock, event, textarea);
      });
  
      imgCheckBlock.addEventListener("click", () => {
        const bgColorUp = imgCheckBlock.dataset.colorst;
        const bgColorPre = imgCheckBlock.dataset.color;
        statusChecked = statusUpdate(
          bgColorUp,
          bgColorPre,
          imgCheckBlock,
          statusChecked
        );
      });
    });



  





 
