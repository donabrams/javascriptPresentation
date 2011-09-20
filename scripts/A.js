define(
	["Class"],
	function (Class) {	
		//private variable (also static)
		var privateVar = "private1";
		//private function
		var printHelper = function(label, value) {
			return label + ":" + value;
		};
		var A = Class.extend({
			//constructor: anything here will execute with 'new A(label)'
			init: function(arg1, arg2) {
				if (arg1) {
					this.arg1 = arg1;
				}
				if (arg2) {
					this.arg2 = arg2;
				}
			},
			//public variables
			arg1: "default1",
			arg2: privateVar,
			//public function
			prettyPrint: function() {
				return printHelper(1, this.arg1) + "," + printHelper(2, this.arg2);
			},
			//public function to return private variable
			getPrivateValue: function() {
				return privateVar;
			}
		});
		return A;
});
