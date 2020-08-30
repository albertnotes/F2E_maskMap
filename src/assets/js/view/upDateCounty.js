import { dom } from '../helpers/utils';

/**
 * 渲染 HTML Select option 城市的資料 #county
 * @param {*} importData area 城市與地區資料
 */
export default function upDateCounty(importData) {
  let str = '';
  importData.forEach((element) => {
    str += `
    <option value="${element.CityName}">
    ${element.CityName}</option>`;
  });
  dom.county.innerHTML = str;
}
