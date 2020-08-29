import utils from './helpers/utils';
import getPharmacyData from './Model/getPharmacyData';
import upDateCounty from './view/upDateCounty';
import upDateTown from './view/upDateTown';
import upDateSidebar from './view/upDateSidebar';
import buildMap from './view/buildMap';
import addMarker from './view/addMarker';
import onEvent from './controller/onEvent';

(async () => {
  // 取得藥局原始資料
  utils.pharmacyData = await getPharmacyData();
  // 預設篩選台北市地區
  const areaData = utils.area.filter(
    (element) => element.CityName === '臺北市',
  );
  // 篩選有符合縣市的藥局資料
  const pharmacyData = utils.pharmacyData.filter(
    (element) => element.properties.address.match('臺北市'),
  );

  upDateCounty(utils.area);
  upDateTown(areaData);
  upDateSidebar(pharmacyData);
  buildMap(utils.map);
  addMarker(utils.pharmacyData, utils.markers, utils.map);

  const loading = document.querySelector('.c-loading');
  loading.setAttribute('style', 'display: none');
})();

// 網頁上監聽事件 function 集合
onEvent();
