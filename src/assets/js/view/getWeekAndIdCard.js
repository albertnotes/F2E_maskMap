/**
 * 取得星期、身分證號渲染於 #week #idCard
 */
export default function getWeekAndIdCard() {
  // DOM
  const week = document.querySelector('#week');
  const idCard = document.querySelector('#idCard');
  const today = new Date().getDay();
  switch (true) {
    case today === 1:
      week.textContent = '星期一';
      idCard.textContent = '1,3,5,7,9';
      break;
    case today === 2:
      week.textContent = '星期二';
      idCard.textContent = '0,2,4,6,8';
      break;
    case today === 3:
      week.textContent = '星期三';
      idCard.textContent = '1,3,5,7,9';
      break;
    case today === 4:
      week.textContent = '星期四';
      idCard.textContent = '0,2,4,6,8';
      break;
    case today === 5:
      week.textContent = '星期五';
      idCard.textContent = '1,3,5,7,9';
      break;
    case today === 6:
      week.textContent = '星期六';
      idCard.textContent = '0,2,4,6,8';
      break;
    default:
      week.textContent = '星期日';
      idCard.textContent = '不限制';
      break;
  }
}
