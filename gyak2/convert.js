"use strict";

const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});

db.remove({}, {multi: true}, function (err, numRemoved) {
    if (err) throw err;
    fs.readdir('gyak2/imgs', function (err, files) {
        if (err) throw err;
        files.forEach(function (fileName) {
            jimp.read(`gyak2/imgs/${fileName}`, function (err, image) {
                if (err) throw err;
                const {width, height} = image.bitmap;
                db.insert({fileName, width, height}, function (err, insertedImage) {
                    if (err) throw err;0
                    console.log(insertedImage);
                })
            })
        })
    });
});