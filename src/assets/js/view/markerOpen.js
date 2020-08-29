export default function markerOpen(lat, lng, markers) {
  // 搜尋 markers 圖層下的子圖層
  markers.eachLayer((layer) => {
    // 抓取圖層的 經緯度
    // eslint-disable-next-line no-underscore-dangle
    const eachLat = layer._latlng.lat;
    // eslint-disable-next-line no-underscore-dangle
    const eachLng = layer._latlng.lng;
    // 如果與參數的經緯度相同，就抓取那個 layer
    if (eachLat === lat && eachLng === lng) {
      // zoomToShowLayer 這個是 MarkerClusterGroup 給的函式
      // 方法是調用 MarkerClusterGroup 下的子圖層
      // 打開 bindPopup 的 HTML
      markers.zoomToShowLayer((layer), () => layer.openPopup());
    }
  });
}
