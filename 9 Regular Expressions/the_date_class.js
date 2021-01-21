console.log(new Date());
// Date Thu Jan 21 2021 12:51:11 GMT+0600 (Bangladesh Standard Time)




/*
.. year and month counts from one
.. Month counts from zero
   10 means Nov & 0 means Jan
*/
console.log(new Date(1997, 10, 02));
// Date Sun Nov 02 1997 00:00:00 GMT+0600 (Bangladesh Standard Time);




/*
.. getTime() method gives Us timestamp of a time.
.. Time stamp counts from 01 Jan 1970 in miliseconds
.. Giving a time stamp(integer) as argument returns the respective date
*/
console.log(new Date(2009,10,04).getTime());
// 1257267600000
console.log(new Date(1257267600000));
// Wed Nov 04 2009 00:00:00 GMT+0700 (Bangladesh Summer Time)




/*
.. creating new date object from a string
*/
function get_date(string) {
  let [none, day, month, year] = /(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(get_date("02.11.1999"));
// Date Tue Nov 02 1999 00:00:00 GMT+0600 (Bangladesh Standard Time)










console.log("end of viewport..");