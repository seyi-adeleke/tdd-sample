
const isBoolean = (value) => {
    if (Boolean(value) || !Boolean(value)) {
        return true;
    }
};


module.exports = {
    isBoolean,
}