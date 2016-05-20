/**
 * Created by fw on 11.05.16.
 */
const remote = require('electron').remote;
const language = require('../ressources/lang/' + remote.getGlobal('config').language + '.json');
const fallback = require('../ressources/lang/en.json');

exports.i18n = function(key){
    if(language.hasOwnProperty(key)){
        return language[key]
    } else if(fallback.hasOwnProperty(key)) {
        return fallback[key];
    } else {
        return key;
    }
};