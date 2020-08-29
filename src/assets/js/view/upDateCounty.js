import { dom } from '../helpers/utils';

export default function upDateCounty(importData) {
  let str = '';
  importData.forEach((element) => {
    str += `
    <option value="${element.CityName}">
    ${element.CityName}</option>`;
  });
  dom.county.innerHTML = str;
}
