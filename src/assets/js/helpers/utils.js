import jsonData from '../data/CityCountyData.json';

/**
 * 重覆使用的 DOM 節點
 */
export const dom = {
  county: document.querySelector('#county'),
  countyTown: document.querySelector('#countyTown'),
  sideBarSwitchBtn: document.querySelector('#btnId'),
  sideData: document.querySelector('#sideData'),
  search: document.querySelector('#search'),
};

/**
 * 重覆使用的 Model 變數
 */
export default {
  pharmacyData: '',
  area: jsonData,
  map: L.map('mapId', {
    center: [25.04828, 121.51435],
    zoom: 16,
  }), // 地圖圖層
  markers: new L.MarkerClusterGroup(),
};
