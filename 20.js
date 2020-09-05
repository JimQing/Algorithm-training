/**
 * Roman to Integer
 * 将罗马数字转化为整数
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */

const romanToInt = function(s) {
    if(!s.length) return 0;
    let preNum = getValue(s[0]);
    let sum = 0;

    for (let i = 1; i < s.length ; i++) {
        let num = getValue(s[i]);

        if (preNum < num) {
            sum-=preNum;
        } else {
            sum+=preNum;
        }
        preNum = num;
    }

    return sum + preNum;
};

const getValue = function(str) {
    switch (str) {
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;
    }
}


romanToInt("III") // 3
romanToInt("XLIII") // 43