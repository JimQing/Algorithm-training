/**
 * Longest Palindromic substring
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * babad => bab or aba
 * cbbd => bb
 */

const longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let res =  s.substring(0, 1), maxLen = 1;

    for (let i = 0; i < s.length - 1; i++) {
        const oddStr = centerSpread(s, i, i);
        const evenStr = centerSpread(s, i, i + 1);
        const maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr;

        if (maxLenStr.length > maxLen) {
            maxLen = maxLenStr.length;
            res = maxLenStr;
        }
    }

    return res;
}

const centerSpread = function(s, left, right) {
    const length = s.length;

    while(left >= 0 && right < length) {
        if (s[left] === s[right]) {
            left--;
            right++;
        } else {
            break;
        }
    }

    return s.substring(left + 1, right);
}