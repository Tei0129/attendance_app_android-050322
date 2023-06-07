// @ts-ignore
var exec = require('cordova/exec');
class PhotoViewer {
    static show(url, title = '', options = {
        share: false,
        closeButton: true,
        copyToReference: false,
        headers: '',
        piccasoOptions: {
            fit: true,
            centerInside: true,
            centerCrop: false
        }
    }) {
        if (url && url.trim() == '') {
            // Do nothing
            return;
        }
        var args = [url, title, options.share, options.closeButton, options.copyToReference, options.headers, options.piccasoOptions];
        exec(function () { }, function () { }, "PhotoViewer", "show", args);
    }
}
// @ts-ignore
module.exports = PhotoViewer;
//# sourceMappingURL=PhotoViewer.js.map