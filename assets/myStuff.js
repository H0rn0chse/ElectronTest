const myOtherStuff = require("./myOtherStuff")
module.exports = {
	doStuff: function () {
		var oObj = {
			stuff: true
		}
		return oObj = myOtherStuff.importantStuff(oObj);
	},

	doMoreStuff: function () {
		var oObj = this.doStuff()
		oObj.more = true
		return oObj
	}

}