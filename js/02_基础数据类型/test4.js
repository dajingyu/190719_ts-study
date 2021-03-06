/*
类型推断: TS会在没有明确的指定类型的时候推测出一个类型
    定义变量时赋值了, 推断为对应的类型
    定义变量时没有赋值, 推断为any类型
*/
(function () {
    // 定义变量时同时赋值, 如果没有声明类型, 推断为值对应的类型
    var a = 3; // 推断为number
    // a = 'abc' // error
    // 定义变量没有赋值, 如果没有声明类型, 推断为any类型
    var b;
    b = 3;
    b = 'abc';
    b = {};
})();
