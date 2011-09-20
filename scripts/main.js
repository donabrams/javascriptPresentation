require(
	["A",  // In scripts folder
	"B/B", // Nested under scripts folder
	"scripts/C/something.js", // Relative path from including html's base path
	"jquery"], 
	function (a, b, cSomething) {
		$("div#privateA").html(new a().getPrivateValue());
		$("div#privateB").html(new b().getPrivateValue());
		$("div#privateC").html(new cSomething().getPrivateValue());
		$("div#A").html(new a().prettyPrint());
		$("div#A2").html(new a("test1", "test2").prettyPrint());
		$("div#B").html(new b().prettyPrint());
		$("div#C").html(new cSomething().prettyPrint());
		//set a global variable
		B = b;
});
