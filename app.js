const brayan_aruquipa = require('./modules/brayan_aruquipa');
const zodiac = require('./node_modules/zodiac-signs')('en');
const zodiacSign = zodiac.getSignByDate({ day: 24, month: 12});

console.log(`Hola, soy ${brayan_aruquipa[0]}, disfruto ${brayan_aruquipa[1]}, soy de ${brayan_aruquipa[2]}, mi signo zodiacal es ${zodiacSign.name} y su simbolo es ${zodiacSign.symbol} .`);
