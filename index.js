// 1-masla
//document.getElementById("content").innerHTML = "<p>Bu yangi paragraf.</p>";
// 2-masla
//document.getElementById("changeText").onclick = function() {
//  document.getElementById("text").textContent = "Matn o'zgardi!";
//};
// 3-masla
//document.getElementById("button1").onclick = function() {
//  document.getElementById("image").src = "image1.jpg";
//};
//document.getElementById("button2").onclick = function() {
//  document.getElementById("image").src = "image2.jpg";
//};
// 4-masla
//document.getElementById("styleButton").onclick = function() {
//  const styledText = document.getElementById("styledText");
//  styledText.style.color = "blue";
//  styledText.style.fontSize = "24px";
//};
// 5-masla
//document.getElementById("addItem").onclick = function() {
//  const item = document.getElementById("item").value;
//  const li = document.createElement("li");
//  li.textContent = item;
//  document.getElementById("list").appendChild(li);
//};
// 6-masla
//document.getElementById("toggleButton").onclick = function() {
//  const toggleText = document.getElementById("toggleText");
//  toggleText.style.display = toggleText.style.display === "none" ? "block" : "none";
//};
// 10-masla
//ocument.getElementById("addTask").onclick = function() {
// const taskInput = document.getElementById("taskInput").value;
// const li = document.createElement("li");
// li.textContent = taskInput;
// li.onclick = function() {
//   li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
// };
// document.getElementById("taskList").appendChild(li);
//;
// 11-masla
//document.getElementById("cityInput").oninput = function() {
//  const filter = document.getElementById("cityInput").value.toLowerCase();
//  const cities = document.querySelectorAll("#cityList li");
//  cities.forEach(city => {
//    city.style.display = city.textContent.toLowerCase().includes(filter) ? "block" : "none";
//  });
//};
//// 13-masala
//document.getElementById("boldButton").onclick = function() {
//  const selection = window.getSelection();
//  if (selection.rangeCount > 0) {
//    const range = selection.getRangeAt(0);
//    const boldText = document.createElement("b");
//    boldText.appendChild(range.extractContents());
//    range.insertNode(boldText);
//  }
//};
// 17-masla
//document.getElementById("fontSizeSlider").oninput = function() {
//  document.getElementById("resizableText").style.fontSize = this.value + "px";
//};
// 18-masla
//document.getElementById("toggleInstructions").onclick = function() {
//  const instructions = document.getElementById("instructions");
//  instructions.style.display = instructions.style.display === "none" ? "block" : "none";
//};
// 19-masla
//onst tabs = document.querySelectorAll(".tabButton");
//abs.forEach(tab => {
// tab.onclick = function() {
//   document.querySelectorAll(".tabContent").forEach(content => content.style.display = "none");
//   document.getElementById(tab.getAttribute("data-target")).style.display = "block";
// };
//);
// 20-masal
//document.getElementById("changeTextColor").onclick = function() {
//  document.getElementById("coloredText").style.color = "red";
//};
//document.getElementById("changeBgColor").onclick = function() {
//  document.getElementById("coloredText").style.backgroundColor = "yellow";
//};
// 21-masla
//document.getElementById("checkNumber").onclick = function() {
//  const num = parseInt(document.getElementById("numberInput").value);
//  document.getElementById("numberOutput").textContent = num > 0 ? "Musbat son" : num < 0 ? "Manfiy son" : "0";
//};
