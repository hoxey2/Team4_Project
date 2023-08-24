var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var dateString = year + '-' + month  + '-' + day;
console.log(dateString);
// 결과 : 2021-05-30

document.querySelector(".main_noticeDate_top").innerHTML = day;
document.querySelector(".main_noticeDate_bottom").innerHTML = year+"."+month+".";