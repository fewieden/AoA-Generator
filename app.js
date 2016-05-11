/**
 * Created by fw on 11.05.16.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

global.config = require('./ressources/config/config.json');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/views/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});