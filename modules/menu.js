/**
 * Created by fw on 11.05.16.
 */
const electron = require('electron');
const i18n = require('./i18n.js').i18n;

let menu = [
    {
        label: i18n('APP_NAME'),
        submenu: [
            {
                label: i18n('MENU_HOME'),
                accelerator: 'Esc',
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'main'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'home'
            }
        ]
    },
    {
        label: i18n('MENU_EDIT'),
        submenu: [
            {
                label: i18n('COMPANY'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'edit',
                                'tab': 'company'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'edit_company'
            },
            {
                label: i18n('DRIVER'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'edit',
                                'tab': 'driver'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'edit_driver'
            },
            {
                label: i18n('CLERK'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'edit',
                                'tab': 'clerk'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'edit_clerk'
            },
            {
                type: 'separator'
            },
            {
                label: i18n('SETTINGS'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'edit',
                                'tab': 'settings'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'edit_settings'
            },
            {
                label: i18n('MENU_GENERATE'),
                accelerator: 'CmdOrCtrl+S',
                role: 'generate'
            },
            {
                label: i18n('MENU_GENERATE_AND_PRINT'),
                accelerator: 'CmdOrCtrl+P',
                role: 'generate_and_print'
            }
        ]
    },
    {
        label: i18n('ADD'),
        submenu: [
            {
                label: i18n('COMPANY'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'add',
                                'tab': 'company'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'add_company'
            },
            {
                label: i18n('DRIVER'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'add',
                                'tab': 'driver'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'add_driver'
            },
            {
                label: i18n('CLERK'),
                click: function(){
                    document.dispatchEvent(new CustomEvent("menu", {
                        detail: {
                            message: {
                                'page':'add',
                                'tab': 'clerk'
                            },
                            time: new Date()
                        },
                        bubbles: false,
                        cancelable: true
                    }));
                },
                role: 'add_clerk'
            }
        ]
    },
    {
        label: i18n('MENU_VIEW'),
        submenu: [
            {
                label: i18n('MENU_RELOAD'),
                accelerator: 'CmdOrCtrl+R',
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
            /*{
                label: i18n('MENU_FULLSCREEN'),
                accelerator: (function () {
                    if (process.platform == 'darwin')
                        return 'Ctrl+Command+F';
                    else
                        return 'F11';
                })(),
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            },*/
            {
                label: i18n('MENU_DEVELOPER'),
                accelerator: (function () {
                    if (process.platform == 'darwin')
                        return 'Alt+Command+I';
                    else
                        return 'Ctrl+Shift+I';
                })(),
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.webContents.toggleDevTools();
                }
            }
        ]
    },
    {
        label: i18n('MENU_HELP'),
        submenu: [
            {
                label: i18n('MENU_HELP'),
                click: function () {
                    electron.shell.openExternal('https://github.com/fewieden/AoA-Generator/blob/master/README.md')
                },
                role: 'help'
            },
            {
                type: 'separator'
            },
            {
                label: i18n('MENU_ABOUT'),
                click: function () {
                    electron.shell.openExternal('https://github.com/fewieden')
                },
                role: 'about'
            },
            {
                label: i18n('MENU_REPORT_BUGS'),
                click: function () {
                    electron.shell.openExternal('https://github.com/fewieden/AoA-Generator/issues/new?title=Bug+Report')
                },
                role: 'report_bugs'
            },
            {
                label: i18n('MENU_ADD_LANGUAGE'),
                click: function () {
                    electron.shell.openExternal('https://github.com/fewieden/AoA-Generator/issues/new?title=New+Language')
                },
                role: 'add_language'
            }
        ]
    }
];

module.exports = menu;