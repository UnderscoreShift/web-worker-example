let i;
for (i = 0; i <= 100; i++) {
    console.log(`%c WE${i}! `, 'color: #ffffff; background: #77694c');
    self.postMessage(['WE', ` WE${i}`]);
}
