/**
 * 取得日期渲染於 #date
 */
export default function getDate() {
  // DOM
  const date = document.querySelector('#date');
  const today = new Date();
  // model
  const month = (() => {
    const value = today.getMonth() + 1;
    if (value > 9) {
      return value;
    }
    return `0${value}`;
  })();
  // view
  const dateStr = `${today.getFullYear()}-${month}-${today.getDate()}`;
  date.textContent = dateStr;
}
