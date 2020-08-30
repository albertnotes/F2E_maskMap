/**
 * 地圖套件配置 tileLayer and L.control
 * @param {*} map Leaflet 底圖
 */
export default function buildMap(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '作者 Albert || 設計師 Wendy ',
  }).addTo(map);
  // 使用 control.locate 套件
  L.control
    .locate({
      showPopup: false,
    })
    .addTo(map)
    .start();
}
