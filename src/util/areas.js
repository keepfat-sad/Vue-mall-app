import { provinceAndCityData } from 'element-china-area-data';

const areasList = {
  province_list: {},
  city_list: {},
};
provinceAndCityData.map((area) => {
  areasList.province_list[+area.value] = area.label;
  area.children.map((areas) => {
    areasList.city_list[+areas.value] = areas.label;
    return false;
  });
  return false;
});
export default areasList;
