import { dom } from '../helpers/utils';

/**
 * 渲染 HTML Select option #countyTown
 * @param {*} importData 篩選已選擇的城市地區
 */
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
