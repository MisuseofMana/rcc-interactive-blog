import{cv as u}from"./DAMA_ESs.js";function c({targetSound:o,vol:n=1},e){new u.Howl({src:[`/audio/sound-effects/${o}.mp3`],loop:!1,volume:n,onend:e}).play()}export{c as u};
