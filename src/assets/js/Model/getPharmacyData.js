export default async function getPharmacyData() {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',
    );
    const data = await res.json();
    return data.features;
  } catch (error) {
    return console.log('getPharmacyData:', error);
  }
}
