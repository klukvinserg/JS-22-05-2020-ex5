let monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
document.getElementById('buttonGenerate').disabled = false;

function createCalendar(year, month, monthNames) {
  let realMonth = month - 1;
  let strCalendar = `<table>
                            <tr>
                                <th>MON</th>
                                <th>TUE</th>
                                <th>WED</th>
                                <th>THU</th>
                                <th>FRI</th>
                                <th>SUT</th>
                                <th>SUN</th>
                            </tr>   
                            <tr>
                      `;
  let date = new Date(year, realMonth);
  let strMonth = monthNames[date.getMonth()];
  let strYear = date.getFullYear();
  for (let i = 0; i < getDayFunc(date); i++) {
    strCalendar += `<td></td>`;
  }
  while (date.getMonth() === realMonth) {
    strCalendar += '<td>' + date.getDate() + '</td>';
    if (getDayFunc(date) % 7 == 6) {
      strCalendar += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
  }
  if (getDayFunc(date) !== 0) {
    for (let i = getDayFunc(date); i < 7; i++) {
      strCalendar += '<td></td>';
    }
  }
  strCalendar += `</tr></table>`;
  calendar.innerHTML = strCalendar;
  text.innerHTML = `${strMonth}, ${strYear}`;
  text.style.fontWeight = 'bold';
  text.style.marginBottom = '20px';
  document.getElementById('inputMonth').value = '';
  document.getElementById('inputYear').value = '';
}

function getDayFunc(date) {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
}

inputMonth.addEventListener('keydown', myFuncMonth);
inputYear.addEventListener('keydown', myFuncYear);
buttonGenerate.addEventListener('click', myFuncGenerate);

let count = 0;
let countY = 0;

function myFuncMonth() {
  if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      count++;
      if (count > 2) {
        count = 2;
        event.preventDefault();
        return false;
      }
    }
    if (event.keyCode === 8) {
      count--;
      if (count <= 0) {
        count = 0;
      }
    }
  } else {
    event.preventDefault();
    return false;
  }
}

function myFuncYear() {
  if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      countY++;
      if (countY > 4) {
        count = 4;
        event.preventDefault();
        return false;
      }
    }
    if (event.keyCode === 8) {
      countY--;
      if (countY <= 0) {
        countY = 0;
      }
    }
  } else {
    event.preventDefault();
    return false;
  }
}

function myFuncGenerate() {
  let numberMonth = document.getElementById('inputMonth').value;
  let numberYear = document.getElementById('inputYear').value;
  if (numberMonth < 1 || numberMonth > 12 || numberYear < 1900) {
    alert('incorrect');
    return;
  }
  createCalendar(numberYear, numberMonth, monthNames);
  document.getElementById('buttonGenerate').disabled = true;
}
