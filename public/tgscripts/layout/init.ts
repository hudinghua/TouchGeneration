function hello(compiler: string) {
	for (let i = 0; i < 10 ; i++) {
	    setTimeout(function() {console.log(i); }, 100 * i);
	}
    console.log(`Hello from ${compiler}`);
}
hello("TypeScriptTypeScript");