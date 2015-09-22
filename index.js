fin.desktop.main(init);

// set the window to be 500 x 500
function init() {

    fin.desktop.System.clearCache({
        appcache: true,
    }, function() {
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

            console.log('the window before', window.innerHeight, window.innerWidth);

            me.resizeTo(newWidth, newHeight, "top-left", function() {
                console.log('the window after', window.innerHeight, window.innerWidth, args);
                document.write('Window width: ', window.innerWidth, '. Window height: ', window.innerHeight);
                fin.desktop.Window.getCurrent().show();
            });
        });
    });
}
