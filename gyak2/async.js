function waitFor(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
}
waitFor(1000).then(function () { console.log(1); })
console.log(2);