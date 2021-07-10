export function formatHeatmapData(data) {
  const dates = data.map((x) => new Date(x.date));
  const mnDate = dates
    .reduce((a, b) => {
      return a < b ? a : b;
    })
    .getFullYear();

  const mxDate = dates
    .reduce((a, b) => {
      return a > b ? a : b;
    })
    .getFullYear();

  const exportData = [];
  for (let i = mnDate; i < mxDate + 1; i++) {
    const d = new Date(i, 0, 1);
    const startDay = new Date(d.setDate(d.getDate() - d.getDay()));

    const d2 = new Date(i, 11, 31);
    const endDay = new Date(d2.setDate(d2.getDate() - d2.getDay() + 6));
    console.log(startDay);
    console.log(endDay);


  }
  return '';
}
