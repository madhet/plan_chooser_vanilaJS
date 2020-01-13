var plans = [
  {
    name: "Basic plan",
    price: 100,
    duration: 10,
    interest: 05,
    isChoosen: false,
  },
  {
    name: "Pro plan",
    price: 300,
    duration: 30,
    interest: 02,
    isChoosen: true,
  },
  {
    name: "Power plan",
    price: 400,
    duration: 70,
    interest: 00,
    isChoosen: false,
  },
];

var root = document.querySelector("#root"); //returns null if does not find selector
var div_row = document.createElement("div");
div_row.className = "row";
root.appendChild(div_row);
var div_container = document.createElement("div");
div_container.className = "container";
div_row.appendChild(div_container);
for (let i = 0; i < plans.length; i++) {
  if (plans[i].isChoosen) var currentChoosen = i;
  //ul
  var ul = document.createElement("ul");
  plans[i].isChoosen
    ? (ul.className = "planChoosen")
    : (ul.className = "planCommon");
  ul.addEventListener("click", ulClick);
  div_container.appendChild(ul);
  //plan name
  var li = document.createElement("li");
  li.className = "planName";
  li.innerHTML = plans[i].name;
  ul.appendChild(li);
  //plan price
  var li = document.createElement("li");
  li.className = "liPlanPrice";
  ul.appendChild(li);
  var span = document.createElement("span");
  span.className = "planPrice";
  span.innerHTML = "$" + plans[i].price;
  li.appendChild(span);
  var span = document.createElement("span");
  span.className = "mo";
  span.innerHTML = "/Mo";
  li.appendChild(span);
  //line
  var li = document.createElement("li");
  li.className = "liLine";
  ul.appendChild(li);
  //img
  var li = document.createElement("li");
  li.className = "liImg";
  ul.appendChild(li);
  //text1
  var li = document.createElement("li");
  li.className = "text1";
  li.innerHTML = "Unlimited usage";
  ul.appendChild(li);
  //text2
  var li = document.createElement("li");
  li.className = "text2";
  li.innerHTML = "Lorem Ipsum is simply dummy";
  ul.appendChild(li);
  //plan duration
  var li = document.createElement("li");
  li.className = "liPlanDuration";
  ul.appendChild(li);
  var span = document.createElement("span");
  span.className = "planDuration";
  span.innerHTML = plans[i].duration;
  li.appendChild(span);
  var span = document.createElement("span");
  span.className = "mo";
  span.innerHTML = "/Mo";
  li.appendChild(span);
  //text1
  var li = document.createElement("li");
  li.className = "text1";
  li.innerHTML = "Monthly Offers";
  ul.appendChild(li);
  //text2
  var li = document.createElement("li");
  li.className = "text2";
  li.innerHTML = "Lorem Ipsum is simply dummy";
  ul.appendChild(li);
  //plan interest
  var li = document.createElement("li");
  li.className = "planInterest";
  if (plans[i].interest < 10) li.innerHTML = "0";
  li.innerHTML += plans[i].interest + "%" + " interest";
  ul.appendChild(li);
  //text loans
  var li = document.createElement("li");
  li.className = "liLoans";
  li.innerHTML = "For loans";
  ul.appendChild(li);
  //line
  var li = document.createElement("li");
  li.className = "liLine";
  ul.appendChild(li);
  //button
  var li = document.createElement("li");
  ul.appendChild(li);
  var button = document.createElement("button");
  button.innerHTML = "Select";
  button.addEventListener("click", selectPlan);
  li.appendChild(button);
}

function ulClick() {
  let planName = this.getElementsByClassName("planName")[0].innerHTML;
  let planIndex = plans.findIndex(x => x.name === planName);
  let ulPlan = document.getElementsByTagName("ul");
  ulPlan[currentChoosen].className = "planCommon";
  currentChoosen = planIndex;
  ulPlan[currentChoosen].className = "planChoosen";
}

function selectPlan() {
  console.log("Plan selected");
}
