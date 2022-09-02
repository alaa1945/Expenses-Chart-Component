let bar = Array.from(document.getElementsByClassName("bar"));
let days = Array.from(document.getElementsByClassName("day"));
let bar_Tooltip = Array.from(
  document.getElementsByClassName("bar-Data-Tooltip")
);
fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((fileData) => {
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.paddingTop = `${fileData[i].amount * 2}px`;
      days[i].textContent = fileData[i].day;
      bar_Tooltip[i].innerHTML = "$" + fileData[i].amount;
      if (fileData[i].amount > 50) {
        bar[i].style.backgroundColor = "hsl(186, 34%, 60%)";
      }
    }
  });
