let pageNo = 1;

currentBtn = document.getElementById("one");
console.log("CurrentBtn:" + currentBtn);
currentBtn.classList.add("active-button");

nextPage = () => {
  console.log("NEXTPAGE()");
  if (pageNo < 4) {
    displayPage();
    pageNo += 1;
    console.log(pageNo);
  } else {
    console.log("Over 4");
  }
};

displayPage = () => {
  switch (pageNo) {
    case 1: {
      console.log("inside case1");
      nextBtn = document.querySelector("#two");
      nextBtn.classList.add("active-button");
      break;
    }
    case 2: {
      console.log("inside case1");
      nextBtn = document.querySelector("#three");
      nextBtn.classList.add("active-button");
      break;
    }
    case 3: {
      console.log("inside case1");
      nextBtn = document.querySelector("#four");
      nextBtn.classList.add("active-button");
      break;
    }
    case 4: {
      console.log("inside case1");
      break;
    }
  }
};
