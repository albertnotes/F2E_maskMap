const addMarker = (importData) => {
  importData.forEach((element) => {
    // 解構賦值寫法，宣告要從來源變數(element)接收解開的值之變數。
    const { geometry, properties } = element;
    // 判斷 background-color
    const adultStockNoMore = (() => {
      if (properties.mask_adult === 0) {
        return 'h-bg-info';
      }
      return 'h-bg-primary';
    })();
    const childStockNoMore = (() => {
      if (properties.mask_child === 0) {
        return 'h-bg-info';
      }
      return 'h-bg-secondary';
    })();
    // 判斷 icon 顏色
    const iconColor = (() => {
      if (properties.mask_adult > 0 && properties.mask_child > 0) {
        return new L.Icon({
          iconUrl:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
          shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
      }
      if (properties.mask_adult === 0 && properties.mask_child === 0) {
        return new L.Icon({
          iconUrl:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
          shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
      }
      return new L.Icon({
        iconUrl:
          'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
    })();
    // 套上 marker
    markers.addLayer(
      L.marker([geometry.coordinates[1], geometry.coordinates[0]], {
        icon: iconColor,
      }).bindPopup(`
  <div class="p-card p-card--map">
    <div class="h-d-flex h-mb-3 h-align-items-center">
      <h2 class="heading h-flex-1">${properties.name}</h2>
      <a class="fas fa-location-arrow h-mr-3" href="https://www.google.com.tw/maps/dir//${properties.address}" target="_blank"></a>
    </div>
    <span class="textContent h-text-dark">${properties.address}</span>
    <br>
    <span class="textContent h-text-dark">${properties.phone}</span>
    <br>
    <span class="textContent h-text-dark">${properties.note}</span>
    <div class="h-d-flex h-mt-2">
      <div class="p-badges ${adultStockNoMore}"><span class="textContent h-flex-1">成人口罩</span><span>${properties.mask_adult}</span></div>
      <div class="p-badges ${childStockNoMore}"><span class="textContent h-flex-1">兒童口罩</span><span>${properties.mask_child}</span></div>
    </div>
  </div>
  `),
    );
  });
  map.addLayer(markers);
};
