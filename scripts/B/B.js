define(
	["A"],
	function (A) {	
		var B = A.extend({
			prettyPrint: function() {
				return "<B>" + this._super() + "</B>";
			}
		});
		return B;
});
