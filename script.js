function calper(x) {
  attended = document.querySelector("#row" + x + " " + ".attended").textContent;
  delivered = document.querySelector(
    "#row" + x + " " + ".delivered"
  ).textContent;
  a = parseInt(attended);
  d = parseInt(delivered);
  res = "";
  if (!(isNaN(a) || isNaN(d)) && a <= d) {
    res = Math.trunc((a / d) * 10000) / 100 + " %";
  }
  document.querySelector("#row" + x + " " + ".res").textContent = res;
}
