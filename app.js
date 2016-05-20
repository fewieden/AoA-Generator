/**
 * Created by fw on 11.05.16.
 */
const electron = require('electron');
const app = electron.app;
const ipc = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

global.company = JSON.parse(fs.readFileSync('./resources/config/company.json', 'utf-8'));
global.driver = JSON.parse(fs.readFileSync('./resources/config/driver.json', 'utf-8'));
global.clerk = JSON.parse(fs.readFileSync('./resources/config/clerk.json', 'utf-8'));
global.config = JSON.parse(fs.readFileSync('./resources/config/general.json', 'utf-8'));

ipc.on('add', function(event, arg){
    global[arg.type].items.push(arg.obj);
    fs.writeFileSync('./resources/config/' + arg.type + '.json', JSON.stringify(global[arg.type]), 'utf-8');
});

ipc.on('edit', function(event, arg){
    if(arg.type === 'config'){
        global[arg.type].language = arg.obj;
        fs.writeFileSync('./resources/config/general.json', JSON.stringify(global[arg.type]), 'utf-8');
        mainWindow.reload();
    }
});

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