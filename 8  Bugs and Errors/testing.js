function test(label, func) {
  if(!func()) console.log(`Failed: ${label}`);
  else console.log(`Passed: ${label}`);
}


test("Convert Lating text to upper case", () => {
  return "tHis.Is.LaTin".toUpperCase() === "THIS.IS.LATIN";
});
//-> 'Passed: Convert Lating text to upper case'

test("Convert case-less to upper case", () => {
  return "اثنا عشر شهرا في ".toUpperCase() === "اثنا عشر شهرا في ";
});
//-> 'Passed: Convert case-less to upper case'

















console.log("end of viewport..");