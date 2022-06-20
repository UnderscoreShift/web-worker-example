let i;
for (i = 0; i <= 100; i++) {
    console.log(`%c WD${i}! `, 'color: #ffffff; background: #575986');
    self.postMessage(['WD', ` WD${i}`]);
}
