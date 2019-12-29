const someMock = require('./mocks/electronMock');

const assert = require('assert');

describe('some test', function () {
	it('test a thing', () => {
		//Arrange
		
		//Act
		let testVar = someMock.someFunction();
		//Assert
		assert.equal(testVar, true, "some message")
	});
})