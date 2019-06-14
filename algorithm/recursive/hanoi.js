// 汉诺塔问题 https://shirley5li.me/2018/03/13/%E6%B1%89%E8%AF%BA%E5%A1%94%E9%80%92%E5%BD%92%E7%AE%97%E6%B3%95JS%E5%AE%9E%E7%8E%B0/
var times = 0
function hanoi(n, src, aux, dist) {
    if(n > 0) {
        hanoi(n - 1, src, dist, aux)                                                       // 递归，把A(src)塔上编号1~n-1的圆盘移到B(aux)上，以C(dist)为辅助塔
        console.log("第" + (++times) + "次移动：" + n + "号盘从" + src + "移到" + dist);      // 把A塔上编号为n的圆盘移到C上
        hanoi(n - 1, aux, src, dist)                                                      // 递归，把B塔上编号1~n-1的圆盘移到C上，以A为辅助塔
    }
}
// hanoi(6, 'A', 'B', 'C')