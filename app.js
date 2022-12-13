let pageNo = 1;

nextBtn = document.getElementById("next");
backBtn = document.getElementById("back");
p1 = document.querySelector(".p1");
p2 = document.querySelector(".p2");
p3 = document.querySelector(".p3");
p4 = document.querySelector(".p4");

document.getElementById("one").classList.add("active-button");
p1.classList.remove("left");
backBtn.classList.add("hide");

nextPage = () => {
  console.log("nextPage()");
  if (pageNo < 4) {
    displayNextPage();
  }
  console.log("nextPageAfter()");
};

prevPage = () => {
  if (pageNo > 1) {
    displayPrevPage();
  }
};

displayNextPage = () => {
  switch (pageNo) {
    case 1: {
      pageNo += 1;
      document.querySelector("#one").classList.remove("active-button");
      document.querySelector("#two").classList.add("active-button");
      backBtn.classList.remove("hide");

      p1.classList.add("left");
      p2.classList.remove("left");
      break;
    }
    case 2: {
      pageNo += 1;
      document.querySelector("#two").classList.remove("active-button");
      document.querySelector("#three").classList.add("active-button");

      p2.classList.add("left");
      p3.classList.remove("left");
      break;
    }
    case 3: {
      pageNo += 1;
      document.querySelector("#three").classList.remove("active-button");
      document.querySelector("#four").classList.add("active-button");

      p3.classList.add("left");
      p4.classList.remove("left");

      nextBtn.classList.add("hide");
      break;
    }
  }
};

displayPrevPage = () => {
  switch (pageNo) {
    case 2: {
      pageNo -= 1;
      document.querySelector("#two").classList.remove("active-button");
      document.querySelector("#one").classList.add("active-button");
      backBtn.classList.add("hide");

      p1.classList.remove("left");
      p2.classList.add("left");
      break;
    }
    case 3: {
      pageNo -= 1;
      document.querySelector("#three").classList.remove("active-button");
      document.querySelector("#two").classList.add("active-button");

      p2.classList.remove("left");
      p3.classList.add("left");
      break;
    }
    case 4: {
      pageNo -= 1;
      document.querySelector("#four").classList.remove("active-button");
      document.querySelector("#three").classList.add("active-button");

      p3.classList.remove("left");
      p4.classList.add("left");

      nextBtn.classList.remove("hide");
      break;
    }
  }
};
