function hello(compiler) {
    var _loop_1 = function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
    console.log("Hello from " + compiler);
}
hello("TypeScriptTypeScript");
