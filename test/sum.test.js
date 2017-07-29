const { assert, expect } = require('chai');
const {soma} = require('../src/sum')

describe('this is an test', ()=>{

	it("my it is running", ()=>{
		expect(soma(1,2) ).to.be.equal(3);
	});

});
