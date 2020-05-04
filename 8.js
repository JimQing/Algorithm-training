/**
 * a to the power of n
 * 
 * tips: 2^0 => pow(2, 0)
 *  11   1*2^0+1*2^1+0*2^2+1*2^3
 * a  = a
 *    = a^1*(2^0) * a^1*(2^1) * a^0*(2^2) * a^1*(2^3)
 */

function Power(a, b) {
    return Math.pow(a, b);
}

function Power2(a, b) {
    let result = a;

    while(--b) {
        result *= a;
    }
    return result;
}

function Power3(a, b) {
    let result = 1, base = a;

    while(b) {
        if (b&1) {
            result *= base;
        }
        base *= base; // a * a = pow(a, 2)
    }
    return result;
}

function bestPower(base, exponent) {
    let res = 1, n;

    if (exponent > 0) {
        n = exponent;
    } else if (exponent < 0) {
        if (base === 0) throw Error('Zero until exponent < 0')
        n = -exponent;
    } else {
        return 1;
    }
    while(n) {
        if (n&1) res *= base;
        base *= base;
        n>>1;
    }
    return exponent > 0 ? res : 1/res;
}