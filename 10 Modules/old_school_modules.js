const week_days = function() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    name(number) { return days[number] },
    number(name) { return days.indexOf(name) }
  };
}();

week_days.name(5);
//-> Friday
week_days.number("Friday");
//-> 5















console.log("end of viewport..");