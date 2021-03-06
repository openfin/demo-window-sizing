window.addEventListener('DOMContentLoaded', fin.desktop.main.bind(null, init));

// set the window to be 500 x 500
function init() {
    var me = fin.desktop.Window.getCurrent();

    me.getBounds(function(bounds) {
        var desiredHeight = 500,
            desiredWidth = 500,
            totalWidth = bounds.width,
            totalHeight = bounds.height,
            windowWidthDiff = totalWidth - window.innerWidth,
            windowWidthHeightDiff = totalHeight - window.innerHeight,
            newWidth = desiredWidth + windowWidthDiff,
            newHeight = desiredHeight + windowWidthHeightDiff;

        me.resizeTo(newWidth, newHeight, "top-left", function() {
            document.write('window.innerWidth: ', window.innerWidth, ' window.innerHeight: ', window.innerHeight);
            me.show();
        }, me.show);
    });
}
