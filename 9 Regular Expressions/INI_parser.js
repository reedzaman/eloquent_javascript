let INI = 
`searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; This is a comment
; And comments and, new line charecters are ignored
[Dipu]
fullname=Dipu Ahmed
type=Underground debt collector
website=http://545.879.574.6/jhLYy5uyojferowjf/info

[Joy]
fullname=Avijit Dey Joy
type=evil scientist
outputdir=/home/reed/enemies/joy`;

function parse_INI(INI) {
  let result = {};
  let section = result;
  INI.split('\n').forEach(line => {
    let match;
    if(match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if(match = line.match(/^\[(\w+)\]$/)) {
      section = result[match[1]] = {};
    } else if(!(/^\s*(;.*)?$/.test(line))) {
      throw new Error("Invalid line found!");
    }
  });
  return result;
}

parse_INI(INI);
// {
//   searchengine: 'https://duckduckgo.com/?q=$1',
//   spitefulness: '9.7',
//   Dipu: {
//     fullname: 'Dipu Ahmed',
//     type: 'Underground debt collector',
//     website: 'http://545.879.574.6/jhLYy5uyojferowjf/info'
//   },
//   Joy: {
//     fullname: 'Avijit Dey Joy',
//     type: 'evil scientist',
//     outputdir: '/home/reed/enemies/joy'
//   }
// }







console.log("end of viewport..");