import {appendSpanToDiv} from './helper.js'
console.log(`Start of JS file`);
let i;
for (i = 0; i <= 100; i++) {
    console.log(`%c inFile${i}! `, 'background: #d144ff');
    appendSpanToDiv('inFile', `inFile${i}`);
}

const webWorker = new Worker('worker.js');
const webWorker2 = new Worker('worker2.js');
const webWorker3 = new Worker('worker3.js');
const webWorker4 = new Worker('worker4.js');
const webWorker5 = new Worker('worker5.js');
[webWorker, webWorker2, webWorker3, webWorker4, webWorker5].forEach(function(element) {
    element.addEventListener('message',
        function (e) {
            // console.log(e);
            appendSpanToDiv(e.data[0], e.data[1])
        }
        ,
        false
    );
});

window.addEventListener('load', () => {
    let i;
    for (i = 0; i <= 100; i++) {
        console.log(`%c afterLoad${i}! `, 'background: #dc774c');
        appendSpanToDiv('afterLoad', ` afterLoad${i}`);
    }
})

console.log(`End of JS file`)

/**
 * Expected output:
 * Start of JS file -> inFile -> End of JS file -> afterLoad -> a possible mix of all workers
 */
