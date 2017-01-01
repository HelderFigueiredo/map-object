module.exports = (test, message) => {

    if (typeof message !== 'string') {
        message = message.toString();
    }

    if (!!test) {
        return '[✓] ' + message;
    }

    return '[✘] ' + message;
};