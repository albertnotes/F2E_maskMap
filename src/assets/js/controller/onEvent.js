import utils, { dom } from '../helpers/utils';
import upDateTown from '../view/upDateTown';
import upDateSidebar from '../view/upDateSidebar';
import markerOpen from '../view/markerOpen';

let selectedCounty = '';

const changeCounty = (e) => {
  // 已選擇城市
  selectedCounty = e.target.value;
  // 篩選已選擇的地區
  const areaData = utils.area.filter(
    (element) => element.CityName === selectedCounty,
  );
  // 篩選有符合縣市的藥局資料
  const pharmacyData = utils.pharmacyData.filter(
    (element) => element.properties.address.match(selectedCounty),
  );
  // 動態替換地區資料
  upDateTown(areaData);
  if (pharmacyData.length === 0) {
    // eslint-disable-next-line no-alert
    alert('查無資料 (o´罒`o)');
  } else {
    const lat = pharmacyData[0].geometry.coordinates[1];
    const lng = pharmacyData[0].geometry.coordinates[0];
    upDateSidebar(pharmacyData);
    markerOpen(lat, lng, utils.markers);
  }
};

const changeTown = (e) => {
  // 預設選項第一個會是全部地區
  if (e.target.value === '全部地區') {
    const pharmacyData = utils.pharmacyData.filter(
      (element) => element.properties.address.match(selectedCounty),
    );
    const lat = pharmacyData[0].geometry.coordinates[1];
    const lng = pharmacyData[0].geometry.coordinates[0];
    // 以資料庫為參數帶入
    upDateSidebar(pharmacyData);
    markerOpen(lat, lng, utils.markers);
    return;
  }
  // 已選擇 城市 + 已選擇 地區
  const countyAndTownStr = selectedCounty + e.target.value;
  const pharmacyData = utils.pharmacyData.filter(
    (element) => element.properties.address.match(countyAndTownStr),
  );
  const lat = pharmacyData[0].geometry.coordinates[1];
  const lng = pharmacyData[0].geometry.coordinates[0];
  // 以資料庫為參數帶入
  upDateSidebar(pharmacyData);
  markerOpen(lat, lng, utils.markers);
};

const searchAddress = (e) => {
  // 阻止元素默認的行為
  // e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }
  const searchText = document.querySelector('#searchText').value;
  if (searchText === '') {
    // eslint-disable-next-line no-alert
    alert('請輸入資料，無法搜尋空白。');
  } else {
    const pharmacyData = utils.pharmacyData.filter(
      (element) => element.properties.address.match(searchText),
    );
    upDateSidebar(pharmacyData);
  }
};

const sideBarOpenAndClose = () => {
  const bar = document.querySelector('.p-sidebar');
  const mapId = document.querySelector('#mapId');
  bar.classList.toggle('active');
  mapId.classList.toggle('active');
};

const clickBar = (e) => {
  if (e.target.id !== 'path') {
    return;
  }
  // 阻止元素默認的行為
  e.preventDefault();
  const lat = Number(e.target.dataset.lat);
  const lng = Number(e.target.dataset.lng);
  // 以資料庫為參數帶入
  markerOpen(lat, lng, utils.markers);
  if (window.innerWidth < 768) {
    sideBarOpenAndClose();
  }
};

/**
 * 掛載監聽函式
 */
export default function onEvent() {
  dom.county.addEventListener('change', changeCounty);
  dom.countyTown.addEventListener('change', changeTown);
  dom.search.addEventListener('click', searchAddress);
  dom.sideData.addEventListener('click', clickBar);
  dom.sideBarSwitchBtn.addEventListener('click', sideBarOpenAndClose);
}
