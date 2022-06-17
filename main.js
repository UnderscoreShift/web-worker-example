console.log(`Start of JS file`);
var i;
for (i = 0; i <= 100; i++) {
    console.log(`%c inFile${i}! `, 'background: #d144ff');
}
var webWorker = new Worker('worker.js');
var webWorker2 = new Worker('worker2.js');
var webWorker3 = new Worker('worker3.js');
var webWorker4 = new Worker('worker4.js');
var webWorker5 = new Worker('worker5.js');
window.addEventListener('load', () => {
    var i;
    for (i = 0; i <= 100; i++) {
        console.log(`%c afterLoad${i}! `, 'background: #dc774c');
    }
})

console.log(`End of JS file`)

/**
 * Expected output:
 * Start of JS file -> inFile -> End of JS file -> afterLoad -> a possible mix of all workers
 */
