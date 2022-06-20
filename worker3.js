let i;
for (i = 0; i <= 100; i++) {
    console.log(`%c WC${i}! `, 'color: #000000; background: #e75f7b');
    self.postMessage(['WC', ` WC${i}`]);
}
