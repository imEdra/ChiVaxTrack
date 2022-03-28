
import axios from 'axios';
const url = 'https://data.cityofchicago.org/resource/2vhs-cf6b.json/';
 const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(url);
      const sortedData = await data.slice().sort((a, b) => b.date - a.date);
      return sortedData.map(({ total_doses_cumulative, _1st_dose_daily, _1st_dose_cumulative, vaccine_series_completed_daily, vaccine_series_completed_cumulative}) => ({ total_doses_cumulative, _1st_dose_daily, _1st_dose_cumulative, vaccine_series_completed_daily, vaccine_series_completed_cumulative }))[0];
    } catch (error) {
      return error;
    }
  };
  export default fetchDailyData;
