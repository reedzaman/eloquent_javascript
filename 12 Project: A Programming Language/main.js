/*
.. skips any space at the beginning of an expression
*/
function skipSpace(string){
  let first = string.search(/\S/);
  if(first == -1) return "";
  return string.slice(first);
}

/*
.. catches first part of the expression. classifies it and returns the rest
*/
function parseExpression(program) {
  program = skipSpace(program);
  let match, expr;
  if(match = /^"([^"]*)"/.exec(program)) {
    expr = {type: "value", value: match[1]};
  } else if(match = /^\d+\b/.exec(program)) {
    expr = {type: "value", value: Number(match[0])};
  } else if(match = /^[^\s(),"]+/.exec(program)) {
    expr = {type: "word", value: match[0]};
  } else {
    throw new SyntaxError("syntax error");
  }
  return parseApply(expr, program.slice(match[0].length));
}















console.log("end of viewport..");