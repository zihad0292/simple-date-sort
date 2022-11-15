function sortDateData(a, b) {
  let date1 = new Date(a);
  let date2 = new Date(b);
  if (date1 == "Invalid Date") {
    return -1;
  } else if (date2 == "Invalid Date") {
    return 1;
  } else if (date1 == "Invalid Date" && date2 == "Invalid Date") {
    return 0;
  } else {
    return date1.getTime() - date2.getTime();
  }
}
