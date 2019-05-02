describe("pow",function(){
	
	// it ("2 raises to 3 is 8",function(){
		// assert.equal(pow(2,3),8);
	// });
	// it("3 raised to power 3 is 27", function() {
        // assert.equal(pow(3, 3), 27);
    // });
	describe("raises x to power n",function(){
	  before(()=>alert("Test started"));
	  after(()=>alert("Test finished"));
	  // beforeEach(()=>alert("before single test"));
	  // afterEach(()=>alert("after single test"));
	  function makeTest(x){
	  	let expected=x*x*x;
		  it (`${x} in the power 3 is ${expected}`,function(){
		  	assert.equal(pow(x,3),expected);
	  	});
	  };
      for(let i=1;i<=5;i++){
        makeTest(i);
      };
	});
	it ("for negative n the result is NaN",function(){
		assert.isNaN(pow(2,-1));
	});
	it ("for non-integer n the result is NaN",function(){
		assert.isNaN(pow(2,1.5));
	});
});
