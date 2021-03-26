"use strict";
exports.__esModule = true;
exports.mainWindow = void 0;
var electron_1 = require("electron");
var path_1 = require("path");
var url_1 = require("url");
function createWindow() {
    var indexpath = path_1.join(__dirname, "/index.html");
    var electronurl = path_1.resolve(indexpath);
    exports.mainWindow = new electron_1.BrowserWindow({
        width: 1100,
        height: 800,
        webPreferences: {
            allowRunningInsecureContent: false,
            contextIsolation: true,
            nodeIntegration: false,
            preload: __dirname + '/preload.js'
        }
    });
    if (process.env.NODE_ENV === 'development') {
        exports.mainWindow.loadURL("http://localhost:3000");
    }
    else {
        exports.mainWindow.loadURL(url_1.format({
            pathname: indexpath,
            protocol: 'file:',
            slashes: true
        }));
    }
    exports.mainWindow.on('closed', function () {
        exports.mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (exports.mainWindow === null) {
        createWindow();
    }
});
electron_1.ipcMain.on('onButtonClick', function () { });
