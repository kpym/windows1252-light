"use strict";

// convert Unicode string `str` to Windows-1252
// return Uint8Array
// all characters that are not in the Windows-1252 table are replaced by `rep`
// the default value of `rep` is '?'
// to ignore missing characters use '' for `rep`
function UnicodeToWindows1252(str, rep) {
  // utility constant for UnicodeToWindows1252
  const windows1252 = '\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F€\x81‚ƒ„…†‡ˆ‰Š‹Œ\x8DŽ\x8F\x90‘’“”•–—˜™š›œ\x9DžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';
  // set the default value for replacements ?
  var r = windows1252.indexOf(rep)
  if (r < 0) { // undefined or bad character ?
    r = 63; // use default '?'
  }
  var data = [];
  for (let c of str.normalize("NFC")) {
    var d = windows1252.indexOf(c);
    if (d < 0) { // missing character ?
      if (r == 0) { // ignore it ?
        continue;
      } else {
        d = r; // use the replacement character
      }
    }
    data.push(d);
  }
  return new Uint8Array(data);
}
