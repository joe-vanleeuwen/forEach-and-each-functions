var nums = [10,9,8,7,6,5,4,3,2,1,0];

describe("javascript's forEach()", function() {

	describe("default return value", function() {

		it("should be undefined", function() {

			var returnValue = nums.forEach(function() {});

			expect(returnValue).toBe(undefined)
		});
	});

	describe("argument", function() {

		it("should be equal to each value in the array", function() {

			var argVal = [];
			nums.forEach(function(arg) {
				argVal.push(arg);
			});

			var indexVal = [];
			for(i = 0; i < nums.length; i++) {
				indexVal.push(nums[i]);
			}

			expect(argVal).toEqual(indexVal)
		});
	});
});

describe("jquery\'s each()", function() {

	describe("default return value", function() {
		
		it("should not be undefined", function() {

			var returnValue = $(nums).each(function() {});

			// jasmine was saying it was returning an object
			// with properties 0 through 11 having values
			// 10 down to 0 respectively with a final length property
			// with a value of 11. That's not what the console
			// returned for me. . .
			expect(returnValue).not.toBe(undefined)
			// expect(returnValue).toEqual([10,9,8,7,6,5,4,3,2,1,0])
		});
	});

	describe("argument", function() {

		it("should be equal to each index of the array", function() {

			var argVal = [];
			$(nums).each(function(arg) {
				argVal.push(arg);
			});

			var index = [];
			for(i = 0; i < nums.length; i++) {
				index.push(i);
			}

			expect(argVal).toEqual(index)
		});
	});
});