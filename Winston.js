const winston = require('winston');

//Creating a custom logger
const logger = winston.createLogger({
    level: 'info', //Setting the logging level, here it will be set to 'info'
    format: winston.format.simple(), //Using a simple logging format
    transports: [
        new winston.transports.Console(), //Logging to the console, in my mind it's like console.log()
    ],
});

//Logging messages
logger.info('This is an info message.');
logger.error('This is an error message.');
logger.warn('This is a warning message.');
