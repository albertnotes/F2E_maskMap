import { dom } from '../helpers/utils';

export default function upDateTown(importData) {
  let str = '<option value=\'全部地區\'>全部地區</option>';
  importData[0].AreaList.forEach((element) => {
    str += `
    <option value='${element.AreaName}'>
    ${element.AreaName}</option>
    `;
  });
  dom.countyTown.innerHTML = str;
}
