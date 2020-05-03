// const result = [
//   {
//     date: dataFromState.date,
//     Deaths: dataFromState.deaths,
//     Cases: dataFromState.positive,
//     Recovered: dataFromState.recovered,
//     humanDate: humanReadable(dataFromState.date)
//   },
//   {
//     date: dataFromState.date,
//     Deaths: dataFromState.deaths,
//     Cases: dataFromState.positive,
//     Recovered: dataFromState.recovered,
//     humanDate: humanReadable(dataFromState.date)
//   }
// ]

const humanMonths = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
}

export function chartDataHelper(dataFromState){
  
  let convertedChartData = [];

  for(let dayData of dataFromState){
    convertedChartData.push(
      {
            date: dayData.date,
            Deaths: dayData.death,
            Cases: dayData.positive,
            Recovered: dayData.recovered,
            humanDate: makeHumanReadableDate(dayData.date)
      }
    )
  }
  return convertedChartData;
}

function makeHumanReadableDate(date){
  const days = String(date).slice(-2);
  const month = humanMonths[String(date).slice(4,6)];
  return `${days}-${month}`
}
