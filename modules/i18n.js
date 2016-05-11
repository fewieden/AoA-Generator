/**
 * Created by fw on 11.05.16.
 */
const remote = require('electron').remote;
const lang = require('../ressources/lang/' + remote.getGlobal('config').lang + '.json');
const fallback = require('../ressources/lang/en.json');

exports.i18n = function(key){
    if(lang.hasOwnProperty(key)){
        return lang[key]
    } else if(fallback.hasOwnProperty(key)) {
        return fallback[key];
    } else {
        return key;
    }
};