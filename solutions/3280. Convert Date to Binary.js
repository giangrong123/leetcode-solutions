/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
     // Tách năm, tháng, ngày từ chuỗi
    let [year, month, day] = date.split('-').map(num => parseInt(num));

    // Chuyển từng phần sang nhị phân
    let yearBinary = year.toString(2);
    let monthBinary = month.toString(2);
    let dayBinary = day.toString(2);

    // Ghép lại theo định dạng "year-month-day"
    return `${yearBinary}-${monthBinary}-${dayBinary}`;
};

// cách 2 đơn giản ngắn 
//   return date.replace(/\d+/g, num => parseInt(num).toString(2));
