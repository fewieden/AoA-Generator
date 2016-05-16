/**
 * Created by fw on 11.05.16.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

global.companies = JSON.parse(fs.readFileSync('./ressources/config/company.json', 'utf-8'));
global.drivers = JSON.parse(fs.readFileSync('./ressources/config/driver.json', 'utf-8'));
global.clerks = JSON.parse(fs.readFileSync('./ressources/config/clerk.json', 'utf-8'));
global.config = JSON.parse(fs.readFileSync('./ressources/config/general.json', 'utf-8'));


//global.config = require('./ressources/config/config.json');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 700,
        resizable: false
    });
    mainWindow.loadURL('file://' + __dirname + '/views/index.html');
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});