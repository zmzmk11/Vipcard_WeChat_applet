import drawQrcode from 'weapp-qrcode'

export function code(object) {
    // 使用canvas画出二维码
    drawQrcode({
        width: object.width,
        height: object.height,
        canvasId: object.canvasId,
        text: object.text,
        callback: () => {
            wx.canvasToTempFilePath({
                canvasId: object.canvasId,
                quality: 1,
                success: function (res) {
                    var tempFilePath = res.tempFilePath;
                    console.log(tempFilePath);
                    return tempFilePath;
                },
                fail: function (res) {
                    console.log(res);
                    return res;
                }
            });
        }
    })
}

