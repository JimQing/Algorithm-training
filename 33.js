/**
 * Find the first character that appears only once in the string s. If not, return a single space. s contains only lowercase letters.
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if (s.length === 0) return ' ';
    if (s.length === 1) return s;
    const result = {};

    for (let i = 0; i < s.length; i++) {
        if (result[s[i]]) {
            result[s[i]]++;
        } else {
            result[s[i]] = 1;
        }
    }

    for (let key in result) {
        const item = result[key];

        if (item === 1) return key;
    }

    return ' ';
};