let pageNo = 1;

nextBtn = document.getElementById("next");
backBtn = document.getElementById("back");
p1 = document.querySelector(".p1");
p2 = document.querySelector(".p2");
p3 = document.querySelector(".p3");
p4 = document.querySelector(".p4");

s2Op1 = document.getElementById("s2Op1");
s2Op2 = document.getElementById("s2Op2");
s2Op3 = document.getElementById("s2Op3");

addon1 = document.getElementById("online-service");
addon2 = document.getElementById("larger-storage");
addon3 = document.getElementById("customizable-profile");

add1 = document.getElementById("addon-1");
add2 = document.getElementById("addon-2");
add3 = document.getElementById("addon-3");

chosenOp = document.querySelectorAll("input[name='plan']");
chosenName = document.getElementById("chosen-plan");
billFreq = document.getElementById("bill-frequency");
billFreqAgain = document.getElementById("bill-frequency-again");
s4Op1 = document.getElementById("s4-op1");
s4Op2 = document.getElementById("s4-op2");
s4Op3 = document.getElementById("s4-op3");
s4Op4 = document.getElementById("s4-op4");
s4Op5 = document.getElementById("s4-op5");
val = document.querySelector("input[name='monthly-switch']").value;
month = document.getElementById("monthly-switch");

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

monthly = () => {
  let base, chosenPlan;
  for (op of chosenOp) {
    if (op.checked) {
      chosenPlan = op.value;
    }
  }

  if (month.checked) {
    add1.textContent = "+$10/yr";
    add2.textContent = "+$20/yr";
    add3.textContent = "+$20/yr";

    s2Op1.textContent = "$90/yr";
    s2Op2.textContent = "$120/yr";
    s2Op3.textContent = "$150/yr";

    billFreq.textContent = "Yearly";
    billFreqAgain.textContent = "year";

    if (chosenPlan === "Arcade") {
      s4Op1.textContent = "$90/yr";
      chosenName.textContent = "Arcade";
      base = 90;
    } else if (chosenPlan === "Advanced") {
      s4Op1.textContent = "$120/yr";
      chosenName.textContent = "Advanced";
      base = 120;
    } else {
      s4Op1.textContent = "$150/yr";
      chosenName.textContent = "Pro";
      base = 150;
    }

    if (addon1.checked) {
      base += 10;
      document.querySelector(".OS").classList.remove("hide");
    } else {
      document.querySelector(".OS").classList.add("hide");
    }
    if (addon2.checked) {
      base += 20;
      document.querySelector(".LS").classList.remove("hide");
    } else {
      document.querySelector(".LS").classList.add("hide");
    }
    if (addon3.checked) {
      base += 20;
      document.querySelector(".CP").classList.remove("hide");
    } else {
      document.querySelector(".CP").classList.add("hide");
    }

    s4Op2.textContent = "+$10/yr";
    s4Op3.textContent = "+$20/yr";
    s4Op4.textContent = "+$20/yr";
    s4Op5.textContent = `+$${base}yr`;
  } else {
    add1.textContent = "+1$/mo";
    add2.textContent = "+2$/mo";
    add3.textContent = "+2$/mo";

    s2Op1.textContent = "$9/mo";
    s2Op2.textContent = "$12/mo";
    s2Op3.textContent = "$15/mo";

    billFreq.textContent = "Monthly";
    billFreqAgain.textContent = "month";

    if (chosenPlan === "Arcade") {
      s4Op1.textContent = "$9/mo";
      chosenName.textContent = "Arcade";

      base = 9;
    } else if (chosenPlan === "Advanced") {
      s4Op1.textContent = "$12/mo";
      chosenName.textContent = "Advanced";
      base = 12;
    } else {
      s4Op1.textContent = "$15/mo";
      chosenName.textContent = "Pro";
      base = 15;
    }

    if (addon1.checked) {
      base += 1;
      document.querySelector(".OS").classList.remove("hide");
    } else {
      document.querySelector(".OS").classList.add("hide");
    }
    if (addon2.checked) {
      base += 2;
      document.querySelector(".LS").classList.remove("hide");
    } else {
      document.querySelector(".LS").classList.add("hide");
    }
    if (addon3.checked) {
      base += 2;
      document.querySelector(".CP").classList.remove("hide");
    } else {
      document.querySelector(".CP").classList.add("hide");
    }

    s4Op2.textContent = "+$1/mo";
    s4Op3.textContent = "+$2/mo";
    s4Op4.textContent = "+$2/mo";
    s4Op5.textContent = `+$${base}/mo`;
  }
};

monthly();

//.Hide works but display none doesnot work
//Radio Button inputs stay selected even after refresh
