var barcode = require('./barcode');
var qrcode = require('./qrcode');

function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
function convert_length(length) {
  return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}

export function barc(id, code, width, height) {
  barcode.code128(wx.createCanvasContext(id), code, convert_length(width), convert_length(height))
  // barcode.code128(wx.createCanvasContext(id), code, width, height)
}

export function qrc(id, code, width, height) {
  // qrcode.api.draw(code, {
  //   ctx: wx.createCanvasContext(id),
  //   width: convert_length(width),
  //   height: convert_length(height)
  // })
  qrcode.api.draw(code, {
    ctx: wx.createCanvasContext(id),
    width: width,
    height: height
  })
}


export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime,
  barc,
  qrc
}
