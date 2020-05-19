/**
 * Determine whether the sequence is the pop sequence of the pushV
 * 判断序列是否为该栈的输出序列
 * 1. 创建flag为false和临时栈，用临时栈进行压栈(压入输入队列)
 * 2. 一直压入到发现跟右侧弹出栈序列栈顶一致时同时出栈 （模拟弹出）
 * 3. 如果一直一致，就一直出栈，直到临时栈栈空或不相等
 * 4. 判断弹出栈序列是否为空（全部匹配）设置flag为true
 * 5. 如果临时栈已经压完了输入序列，则此时输入序列为空，结束循环
 * 6. 重复第2步
 */
function checkList(pushV, popV) {
    if (!pushV || !popV) return false;
    let tempStack = [], flag;
    while(pushV.length || tempStack.length) {
        while (tempStack[tempStack.length - 1] === popV[0] && tempStack.length) {
            tempStack.pop();
            popV.shift();
        }
        if (!popV.length) {
            flag = true;
        }
        if (!pushV.length) break;
        tempStack.push(pushV.shift());
    }
    return flag;
}