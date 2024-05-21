//Creating a buffer with 10 bytes
const buffer = buffer.alloc(10);

buffer.write('Hello', 'utf-8'); //Write a string to the buffer
console.log(buffer.toString('utf-8')); //Read the data from the buffer

const buffer1 = buffer.from('Hello');
const buffer2 = buffer.from(' World');

const combinedBuffer = buffer.concat([buffer1, buffer2]);
console.log(combinedBuffer.toString('utf-8')); // Should print 'Hello World'
