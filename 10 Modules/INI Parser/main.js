const {parse_INI} = require("./ini_parser.mjs")

let ini_data = `searchengine=https://duckduckgo.com/?q=$1
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
outputdir=/home/reed/enemies/joy`

console.log(parse_INI(ini_data))

/*
{ searchengine: 'https://duckduckgo.com/?q=$1',
  spitefulness: '9.7',
  Dipu:
   { fullname: 'Dipu Ahmed',
     type: 'Underground debt collector',
     website: 'http://545.879.574.6/jhLYy5uyojferowjf/info' },
  Joy:
   { fullname: 'Avijit Dey Joy',
     type: 'evil scientist',
     outputdir: '/home/reed/enemies/joy'
   }
}

*/
