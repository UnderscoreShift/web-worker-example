let i;
for (i = 0; i <= 100; i++) {
    console.log(`%c WA${i}! `, 'color: #000000; background: #bada55');
    self.postMessage(['WA', ` WA${i}`]);
}
