/**
 * Fibonacci: F(1)=1，F(2)=1, F(n)=F(n - 2)+F(n - 1)（n ≥ 3，n ∈ N*）
 */

function FibonacciSimple(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) {
        return 1;
    }
    return FibonacciSimple(n - 2) + FibonacciSimple(n - 1);
}

function Fibonacci(n) {
    if (n<=1) return n;
    if (n === 2) return 1;
    let fn,
        f1 = 1,
        f2 = 1;

    for (let i = 2; i < n; i++) {
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }
    return fn;
}

function Fibonacci1(n) {
    if (n<=1) return n;
    if (n === 2) return 1;
    let f1 = 1,
        f2 = 1;

    for (let i = 2; i < n; i++) {
        [f1, f2] = [f1, f1 + f2];
    }
    return f1;
}

/**
 * n-factorial Fibonacci 
 * f(n) = f(n - 1) + f(n - 2) + f(n - 3)...
 * f(n - 1) = f(n - 2) + f(n - 3) + f(n - 4)...
 * 相减
 * f(n) - f(n - 1) = f(n - 1);
 * f(n)  = 2 * f(n - 1);
 * f(n) / f(n - 1) = 2
 * f(n) = 2^n
 */
function nFibonacci2(n) {
    let r = 1;

    for (let index = 0; index < n; index++) {
        r = 2 * r;
    }
    return r;
}