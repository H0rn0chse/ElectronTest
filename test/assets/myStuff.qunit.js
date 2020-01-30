const sinon = require('sinon');
const myOtherStuff = require('./../../assets/myOtherStuff')
const myStuff = require('./../../assets/myStuff')

QUnit.module("doStuff", {
	beforeEach: function () {
		this.oImportantStuffStub = sinon.stub(myOtherStuff, "importantStuff")
		this.oImportantStuffStub.returns({
			imSpecial: true
		})
	},
	afterEach: function () {
		this.oImportantStuffStub.restore();
	}
});

QUnit.test("callsStuff", function (assert) {
	var oResult = myStuff.doStuff();
	var oExpectedResult = {
		imSpecial: true
	}
	assert.deepEqual(oResult, oExpectedResult, "all fine");
})

QUnit.module("doMoreStuff", {
	beforeEach: function () {
		this.oDoStuffStub = sinon.stub(myStuff, "doStuff")
		this.oDoStuffStub.returns({
			imVerySpecial: true
		})
	},
	afterEach: function () {
		this.oDoStuffStub.restore();
	}
});

QUnit.test("callsStuff", function (assert) {
	var oResult = myStuff.doMoreStuff();
	var oExpectedResult = {
		imVerySpecial: true,
		more: true,
		imBroken: true
	}
	assert.deepEqual(oResult, oExpectedResult, "all fine");
})
