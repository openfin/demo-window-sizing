## Window Sizing Demo
Setting the window height and width in an app's config sets the total window height or width. This demo demonstrates how to set the inner size of the window object to a value. 

The Windows installer is [here](https://dl.openfin.co/services/download?fileName=demo-window-sizing&config=http://openfin.github.io/demo-window-sizing/src/app.json).

Here's the meat of the logic: 
````
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
````

## License
MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/ <br/>
https://openfin.co/licensing/

## Support
Please enter an issue in the repo for any questions or problems. Alternatively, please contact us at support@openfin.co 
