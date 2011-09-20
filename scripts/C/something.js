define(
	["A"],
	function (A) {	
		var newPrivate = "new Private";
		var C = A.extend({
			prettyPrint: function() {
				return "<I>" + this._super() + "</I>";
			},
			getPrivateValue: function() {
				return newPrivate;
			}
		});
		return C;
});
