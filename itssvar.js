var sprintf = require('sprintf-js').sprintf

/**
 * Lager alle varianter av tallet svar
 * Eks:
 > itssvar(4.0, 'cm')
 "4,0", "4.0", "4,0 cm", "4,0cm", ...osv
 */
function itssvar (tall, enhet) {
  var desimaler = antallDesimaler(tall)
  var svar = []
  for (var i = 0; i < 3; ++i) {
    svar = [...svar, ...svarVarianter(tall, enhet, desimaler + i)]
  }
  console.log('"' + svar.join('", "') + '"')
}
exports.itssvar = itssvar

function svarVarianter (tall, enhet, desimaler) {
  var svar = []
  svar.push(sprintf(`%.${desimaler}f`, tall))           // 4.1
  svar.push(sprintf(`%.${desimaler}f${enhet}`, tall))   // 4.1mm
  svar.push(sprintf(`%.${desimaler}f ${enhet}`, tall))  // 4.1 mm
  svar.push(sprintf(`%.${desimaler}f`, tall).replace('.', ','))           // 4,1
  svar.push(sprintf(`%.${desimaler}f${enhet}`, tall).replace('.', ','))   // 4,1mm
  svar.push(sprintf(`%.${desimaler}f ${enhet}`, tall).replace('.', ','))  // 4,1 mm
  return svar
}

function erHeltall (tall) {
  return tall % 1 === 0
}
exports.harRest = harRest

function harRest (tall) {
  return tall % 1 !== 0
}
exports.harRest = harRest

function antallDesimaler (tall) {
  var rest = tall % 1
  if (rest === 0) {
    return 0
  }
  var desimaler = 0
  while (Math.abs(rest) > 1e-6 && Math.abs(rest - 1) > 1e-6) {
    rest = (10 * rest) % 1
    ++desimaler
  }
  return desimaler
}
exports.antallDesimaler = antallDesimaler
