function solution(year) {
  if (year < 1918) {
    if (year % 4 == 0) return "12.09." + year;
    else return "13.09." + year;
  } else if (year == 1918) {
    return "26.09." + year;
  } else {
    if (year % 400 == 0) {
      return "12.09." + year;
    } else if (year % 4 == 0 && year % 100 != 0) {
      return "12.09." + year;
    } else return "13.09." + year;
  }
}


console.log(solution(2017)) // 13.09.2017
console.log(solution(2016)) // 12.09.2017
console.log(solution(1800)) // 12.09.1800
