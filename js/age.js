var age, daysBetweenDates;
daysBetweenDates = function(d1, d2) {
    var diffDays, oneDay;
    oneDay = 24 * 60 * 60 * 1000;
    diffDays = (d2 - Date.parse(d1)) / oneDay;
    return diffDays;
};

age = function() {
    num = daysBetweenDates('Sep 4, 2004 00:00:00', new Date()) / 365
    $('#age').text(num.toString().slice(0, 12));
};

setInterval(age, 50);

$('#age').html('00.0401018');
