module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(item => item.join(''));

    while (str.length > 0) {
        let newStr = str;

        brackets.forEach(item => newStr = newStr.replace(item, ''));

        if (newStr === str)  return false ;

        str = newStr;

    }

    return str.length === 0;
}
