var expect = chai.expect;

// PROBLEM `checkData`
describe('checkData', function() {
	it('should exist', function() {
		expect(checkData).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { checkData() }).to.throw('Invalid Input');
		expect(function() { checkData('') }).to.not.throw('Invalid Input');
		expect(function() { checkData('a') }).to.not.throw('Invalid Input');
		expect(function() { checkData(null) }).to.throw('Invalid Input');
		expect(function() { checkData(undefined) }).to.throw('Invalid Input');
		expect(function() { checkData(NaN) }).to.throw('Invalid Input');
		expect(function() { checkData([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { checkData({}) }).to.throw('Invalid Input');
		expect(function() { checkData(7) }).to.throw('Invalid Input');
	});
	it('should return false if the string is empty', function() {
		expect(checkData('')).to.be.false;
	});
	it('should return false if the string is "a"', function() {
		expect(checkData('a')).to.be.false;
	});
	it('should return false if the string is "3"', function() {
		expect(checkData('3')).to.be.false;
	});
	it('should return false if the string is "3a"', function() {
		expect(checkData('3a')).to.be.false;
	});
	it('should return false if the string is "bbbb"', function() {
		expect(checkData('bbbb')).to.be.false;
	});
	it('should return false if the string is "this is a test"', function() {
		expect(checkData('this is a test')).to.be.false;
	});
	it('should return true if the string is "aaa"', function() {
		expect(checkData('aaa')).to.be.true;
	});
	it('should return true if the string is "abc"', function() {
		expect(checkData('abc')).to.be.true;
	});
	it('should return true if the string is "A7s"', function() {
		expect(checkData('A7s')).to.be.true;
	});
	it('should return true if the string is "NjD"', function() {
		expect(checkData('NjD')).to.be.true;
	});
});

// PROBLEM `concatenateArrays`
describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(concatenateArrays).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { concatenateArrays(1, 2) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays(1, []) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([], 2) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([1,2,3], 2) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([1,2,3], ['a']) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([1,2,3,'g'], [1,3,'a']) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([1,2,3,1.2], [1,3]) }).to.throw('Invalid Input');
		expect(function() { concatenateArrays([1,2,3], [1,3]) }).to.not.throw('Invalid Input');
	});
	it('should return the concatenated arrays', function() {
		expect(concatenateArrays([1,2,3], [4,5,6])).to.be.eql([1,2,3,4,5,6]);
	});
});

// PROBLEM `fixProperNoun`
describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(fixProperNoun).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { fixProperNoun() }).to.throw('Invalid Input');
		expect(function() { fixProperNoun('') }).to.throw('Invalid Input');
		expect(function() { fixProperNoun('a') }).not.to.throw('Invalid Input');
		expect(function() { fixProperNoun(null) }).to.throw('Invalid Input');
		expect(function() { fixProperNoun(undefined) }).to.throw('Invalid Input');
		expect(function() { fixProperNoun(NaN) }).to.throw('Invalid Input');
		expect(function() { fixProperNoun([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { fixProperNoun({}) }).to.throw('Invalid Input');
		expect(function() { fixProperNoun(7) }).to.throw('Invalid Input');
	});
	it('should return the correct case', function() {
		expect(fixProperNoun('sam')).to.equal('Sam');
		expect(fixProperNoun('aAron')).to.equal('Aaron');
		expect(fixProperNoun('fAcEbOOk')).to.equal('Facebook');
		expect(fixProperNoun('1fAcEbOOk')).to.equal('1facebook');
	});
});

// PROBLEM `sortLetters`
describe('sortLetters', function() {
	it('should exist', function() {
		expect(sortLetters).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { sortLetters() }).to.throw('Invalid Input');
		expect(function() { sortLetters('') }).not.to.throw('Invalid Input');
		expect(function() { sortLetters('a') }).not.to.throw('Invalid Input');
		expect(function() { sortLetters(null) }).to.throw('Invalid Input');
		expect(function() { sortLetters(undefined) }).to.throw('Invalid Input');
		expect(function() { sortLetters(NaN) }).to.throw('Invalid Input');
		expect(function() { sortLetters([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { sortLetters({}) }).to.throw('Invalid Input');
		expect(function() { sortLetters(7) }).to.throw('Invalid Input');
	});
	it('should sort the letters in the input', function() {
		expect(sortLetters('sam')).to.equal('ams');
		expect(sortLetters('Sam')).to.equal('Sam');
		expect(sortLetters('abcdef')).to.equal('abcdef');
		expect(sortLetters('aBcDeF')).to.equal('BDFace');
		expect(sortLetters('sjdkfhsldfh')).to.equal('ddffhhjklss');
	});
});

// PROBLEM `absVal`
describe('absVal', function() {
	it('should exist', function() {
		expect(absVal).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { absVal() }).to.throw('Invalid Input');
		expect(function() { absVal('') }).to.throw('Invalid Input');
		expect(function() { absVal('a') }).to.throw('Invalid Input');
		expect(function() { absVal(null) }).to.throw('Invalid Input');
		expect(function() { absVal(undefined) }).to.throw('Invalid Input');
		expect(function() { absVal(NaN) }).to.throw('Invalid Input');
		expect(function() { absVal([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { absVal({}) }).to.throw('Invalid Input');
		expect(function() { absVal(7) }).not.to.throw('Invalid Input');
		expect(function() { absVal(7.5) }).to.throw('Invalid Input');
	});
	it('should return the absolute value', function() {
		expect(absVal(0)).to.equal(0);
		expect(absVal(-1)).to.equal(1);
		expect(absVal(-100)).to.equal(100);
		expect(absVal(3800)).to.equal(3800);
		expect(absVal(-34586778)).to.equal(34586778);
	});
});

// PROBLEM `myMin`
describe('myMin', function() {
	it('should exist', function() {
		expect(myMin).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { myMin() }).to.throw('Invalid Input');
		expect(function() { myMin('', 1) }).to.throw('Invalid Input');
		expect(function() { myMin(1, 'a') }).to.throw('Invalid Input');
		expect(function() { myMin(null, 5) }).to.throw('Invalid Input');
		expect(function() { myMin(5, undefined) }).to.throw('Invalid Input');
		expect(function() { myMin(NaN, 23) }).to.throw('Invalid Input');
		expect(function() { myMin(23, [1,2,3]) }).to.throw('Invalid Input');
		expect(function() { myMin(14, {}) }).to.throw('Invalid Input');
		expect(function() { myMin(-3, 7) }).not.to.throw('Invalid Input');
		expect(function() { myMin(55, 7.5) }).to.throw('Invalid Input');
	});
	it('should return the minimum of the passed in values', function() {
		expect(myMin(-34586778, 1)).to.equal(-34586778);
		expect(myMin(1, 1)).to.equal(1);
		expect(myMin(10, 1)).to.equal(1);
		expect(myMin(0, 1)).to.equal(0);
		expect(myMin(55, 23)).to.equal(23);
		expect(myMin(23, 55)).to.equal(23);
		expect(myMin(-478, -56)).to.equal(-478);
		expect(myMin(-43, 300)).to.equal(-43);
	});
});

// PROBLEM `myMax`
describe('myMax', function() {
	it('should exist', function() {
		expect(myMax).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { myMax() }).to.throw('Invalid Input');
		expect(function() { myMax('') }).to.throw('Invalid Input');
		expect(function() { myMax('a') }).to.throw('Invalid Input');
		expect(function() { myMax(null) }).to.throw('Invalid Input');
		expect(function() { myMax(undefined) }).to.throw('Invalid Input');
		expect(function() { myMax(NaN) }).to.throw('Invalid Input');
		expect(function() { myMax([1,2,3]) }).not.to.throw('Invalid Input');
		expect(function() { myMax({}) }).to.throw('Invalid Input');
		expect(function() { myMax([1,2,'a']) }).to.throw('Invalid Input');
		expect(function() { myMax([1,2,7.7]) }).to.throw('Invalid Input');
		expect(function() { myMax(7) }).to.throw('Invalid Input');
	});
	it('should return the minimum of the passed in values', function() {
		expect(myMax([1,2,3])).to.equal(3);
		expect(myMax([3,2,1])).to.equal(3);
		expect(myMax([2,3,1])).to.equal(3);
		expect(myMax([1,3,2])).to.equal(3);
		expect(myMax([1,3,2])).to.equal(3);
		expect(myMax([-1,1,3,2])).to.equal(3);
		expect(myMax([10,36,-3,88])).to.equal(88);
	});
});

// PROBLEM `getMonth`
describe('getMonth', function() {
	it('should exist', function() {
		expect(getMonth).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { getMonth() }).to.throw('Invalid Input');
		expect(function() { getMonth('') }).to.throw('Invalid Input');
		expect(function() { getMonth('a') }).to.throw('Invalid Input');
		expect(function() { getMonth(null) }).to.throw('Invalid Input');
		expect(function() { getMonth(undefined) }).to.throw('Invalid Input');
		expect(function() { getMonth(NaN) }).to.throw('Invalid Input');
		expect(function() { getMonth([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { getMonth({}) }).to.throw('Invalid Input');
		expect(function() { getMonth(7) }).not.to.throw('Invalid Input');
		expect(function() { getMonth(1) }).not.to.throw('Invalid Input');
		expect(function() { getMonth(12) }).not.to.throw('Invalid Input');
		expect(function() { getMonth(7.5) }).to.throw('Invalid Input');
		expect(function() { getMonth(0) }).to.throw('Invalid Input');
		expect(function() { getMonth(-1) }).to.throw('Invalid Input');
		expect(function() { getMonth(13) }).to.throw('Invalid Input');
		expect(function() { getMonth(100) }).to.throw('Invalid Input');
	});
	it('should return the appropriate month', function() {
		expect(getMonth(1)).to.equal('January');
		expect(getMonth(2)).to.equal('February');
		expect(getMonth(3)).to.equal('March');
		expect(getMonth(4)).to.equal('April');
		expect(getMonth(5)).to.equal('May');
		expect(getMonth(6)).to.equal('June');
		expect(getMonth(7)).to.equal('July');
		expect(getMonth(8)).to.equal('August');
		expect(getMonth(9)).to.equal('September');
		expect(getMonth(10)).to.equal('October');
		expect(getMonth(11)).to.equal('November');
		expect(getMonth(12)).to.equal('December');
	});
});

// PROBLEM `randomElement` @todo
describe('randomElement', function() {
	it('should exist', function() {
		expect(randomElement).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {

	});
	it('should return a random element', function() {

	});
});

// PROBLEM `studentPairs` @todo
describe('studentPairs', function() {
	it('should exist', function() {
		expect(studentPairs).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {

	});
	it('should return a random element', function() {

	});
});

// PROBLEM `sumSquares`
describe('sumSquares', function() {
	it('should exist', function() {
		expect(sumSquares).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { sumSquares() }).to.throw('Invalid Input');
		expect(function() { sumSquares('') }).to.throw('Invalid Input');
		expect(function() { sumSquares('a') }).to.throw('Invalid Input');
		expect(function() { sumSquares(null) }).to.throw('Invalid Input');
		expect(function() { sumSquares(undefined) }).to.throw('Invalid Input');
		expect(function() { sumSquares(NaN) }).to.throw('Invalid Input');
		expect(function() { sumSquares([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { sumSquares({}) }).to.throw('Invalid Input');
		expect(function() { sumSquares(7) }).not.to.throw('Invalid Input');
		expect(function() { sumSquares(7.5) }).to.throw('Invalid Input');

	});
	it('should return the sum of the squares', function() {
		expect(sumSquares(1)).to.equal(1);
		expect(sumSquares(2)).to.equal(5);
		expect(sumSquares(3)).to.equal(14);
		expect(sumSquares(4)).to.equal(30);
	});
});

// PROBLEM `findMaxDiff`
describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(findMaxDiff).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { findMaxDiff() }).to.throw('Invalid Input');
		expect(function() { findMaxDiff('') }).to.throw('Invalid Input');
		expect(function() { findMaxDiff('a') }).to.throw('Invalid Input');
		expect(function() { findMaxDiff(null) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff(undefined) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff(NaN) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff([1,2,3.3]) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff([1,2,3]) }).not.to.throw('Invalid Input');
		expect(function() { findMaxDiff([1,'a',3]) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff({}) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff(7) }).to.throw('Invalid Input');
		expect(function() { findMaxDiff(7.5) }).to.throw('Invalid Input');
	});
	it('should return 0 if there are no elements', function() {
		expect(findMaxDiff([])).to.equal(0);
	});
	it('should return 0 if there is one elements', function() {
		expect(findMaxDiff([])).to.equal(0);
	});
	it('should return 4 for [7, 3]', function() {
		expect(findMaxDiff([7, 3])).to.equal(4);
	});
	it('should return 4 for [3, 7]', function() {
		expect(findMaxDiff([3, 7])).to.equal(4);
	});
	it('should return 1 for [0, 1, 2, 3]', function() {
		expect(findMaxDiff([0, 1, 2, 3])).to.equal(1);
	});
	it('should return 2 for [-1, 1, 2, 3]', function() {
		expect(findMaxDiff([-1, 1, 2, 3])).to.equal(2);
	});
	it('should return 6 for [1,2,3,6,7,1,4,5,10]', function() {
		expect(findMaxDiff([1,2,3,6,7,1,4,5,10])).to.equal(6);
	});
});

// PROBLEM `insertDashes`
describe('insertDashes', function() {
	it('should exist', function() {
		expect(insertDashes).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { insertDashes() }).to.throw('Invalid Input');
		expect(function() { insertDashes('') }).not.to.throw('Invalid Input');
		expect(function() { insertDashes('a') }).not.to.throw('Invalid Input');
		expect(function() { insertDashes(null) }).to.throw('Invalid Input');
		expect(function() { insertDashes(undefined) }).to.throw('Invalid Input');
		expect(function() { insertDashes(NaN) }).to.throw('Invalid Input');
		expect(function() { insertDashes([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { insertDashes({}) }).to.throw('Invalid Input');
		expect(function() { insertDashes(7) }).to.throw('Invalid Input');
	});
	it('should insert dashes between the letters of words', function() {
		expect(insertDashes('123')).to.equal('1-2-3');
		expect(insertDashes('Aaron is cool')).to.equal('A-a-r-o-n i-s c-o-o-l');
		expect(insertDashes('this is a test')).to.equal('t-h-i-s i-s a t-e-s-t');
		expect(insertDashes('HERE IS AN   EXTRA SPACE')).to.equal('H-E-R-E I-S A-N   E-X-T-R-A S-P-A-C-E');
	});
});

// PROBLEM `mySubstring`
describe('mySubstring', function() {
	it('should exist', function() {
		expect(mySubstring).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { mySubstring() }).to.throw('Invalid Input');
		expect(function() { mySubstring('') }).to.throw('Invalid Input');
		expect(function() { mySubstring('a') }).to.throw('Invalid Input');
		expect(function() { mySubstring(null) }).to.throw('Invalid Input');
		expect(function() { mySubstring(undefined) }).to.throw('Invalid Input');
		expect(function() { mySubstring(NaN) }).to.throw('Invalid Input');
		expect(function() { mySubstring([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { mySubstring({}) }).to.throw('Invalid Input');
		expect(function() { mySubstring(7) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', '') }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 'a') }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', null) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', undefined) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', NaN) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', [1,2,3]) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', {}) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 7) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, 7.5) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, '') }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, 'a') }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, null) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, undefined) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, NaN) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, [1,2,3]) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, {}) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, 7) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, 7.5) }).to.throw('Invalid Input');
		expect(function() { mySubstring('a', 1, 2) }).to.throw('Invalid Input');
		expect(function() { mySubstring('aaaa', 1, 2) }).not.to.throw('Invalid Input');
	});
	it('should return the appropriate substring', function() {
		expect(mySubstring('abcde', 2, 3)).to.equal('cd');
		expect(mySubstring('this is a test', 2, 3)).to.equal('is');
		expect(mySubstring('this is a test', 2, 10)).to.equal('is is a t');
	});
});

// PROBLEM `splitSwap`
describe('splitSwap', function() {
	it('should exist', function() {
		expect(splitSwap).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { splitSwap() }).to.throw('Invalid Input');
		expect(function() { splitSwap('') }).to.throw('Invalid Input');
		expect(function() { splitSwap('a') }).to.throw('Invalid Input');
		expect(function() { splitSwap(null) }).to.throw('Invalid Input');
		expect(function() { splitSwap(undefined) }).to.throw('Invalid Input');
		expect(function() { splitSwap(NaN) }).to.throw('Invalid Input');
		expect(function() { splitSwap([1,2,3.3]) }).not.to.throw('Invalid Input');
		expect(function() { splitSwap([1,2,3]) }).not.to.throw('Invalid Input');
		expect(function() { splitSwap([1,'a',3]) }).not.to.throw('Invalid Input');
		expect(function() { splitSwap({}) }).to.throw('Invalid Input');
		expect(function() { splitSwap(7) }).to.throw('Invalid Input');
		expect(function() { splitSwap(7.5) }).to.throw('Invalid Input');
	});
	it('should split the array in half and swap halfs', function() {
		expect(splitSwap([])).to.eql([]);
		expect(splitSwap([1])).to.eql([1]);
		expect(splitSwap([1,2])).to.eql([2,1]);
		expect(splitSwap([1,2,'a'])).to.eql([2,'a',1]);
		expect(splitSwap(['he','ll','o','wo','rl','d'])).to.eql(['wo','rl','d','he','ll','o']);
		expect(splitSwap(['he','ll','o','wo','rl','d', '!'])).to.eql(['wo','rl','d', '!','he','ll','o']);
	});
});

// PROBLEM `smallMultiples`
describe('smallMultiples', function() {
	it('should exist', function() {
		expect(smallMultiples).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { smallMultiples() }).to.throw('Invalid Input');
		expect(function() { smallMultiples('') }).to.throw('Invalid Input');
		expect(function() { smallMultiples('a') }).to.throw('Invalid Input');
		expect(function() { smallMultiples(null) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(undefined) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(NaN) }).to.throw('Invalid Input');
		expect(function() { smallMultiples([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { smallMultiples({}) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(7) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, 7.5) }).not.to.throw('Invalid Input');
		expect(function() { smallMultiples(1, '') }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, 'a') }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, null) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, undefined) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, NaN) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, [1,2,3]) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, {}) }).to.throw('Invalid Input');
		expect(function() { smallMultiples(1, 7) }).not.to.throw('Invalid Input');
		expect(function() { smallMultiples(1, 7.5) }).not.to.throw('Invalid Input');
		expect(function() { smallMultiples(1, 2) }).not.to.throw('Invalid Input');
	});
	it('should return 6 for smallMultiples(7,1)', function() {
		expect(smallMultiples(7, 1)).to.equal(6);
	});
	it('should return 6 for smallMultiples(7.5, 1)', function() {
		expect(smallMultiples(7.5, 1)).to.equal(6);
	});
	it('should return 6 for smallMultiples(23.7, 5.3)', function() {
		expect(smallMultiples(23.7, 5.3)).to.equal(3);
	});
	it('should return 6 for smallMultiples(1.2, 1)', function() {
		expect(smallMultiples(1.2, 1)).to.equal(0);
	});
	it('should return 6 for smallMultiples(7, 7)', function() {
		expect(smallMultiples(7, 7)).to.equal(0);
	});
	it('should return 6 for smallMultiples(13, 7)', function() {
		expect(smallMultiples(13, 7)).to.equal(0);
	});
	it('should return 6 for smallMultiples(14, 7)', function() {
		expect(smallMultiples(14, 7)).to.equal(1);
	});
});

// PROBLEM `rot13` @todo
describe('rot13', function() {
	it('should exist', function() {
		expect(rot13).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {

	});
	it('should return a random element', function() {

	});
});

// PROBLEM `derot13` @todo
describe('derot13', function() {
	it('should exist', function() {
		expect(derot13).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {

	});
	it('should return a random element', function() {

	});
});

// PROBLEM `rotn` @todo
describe('rotn', function() {
	it('should exist', function() {
		expect(rotn).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {

	});
	it('should return a random element', function() {

	});
});

// PROBLEM `findBoth`
describe('findBoth', function() {
	it('should exist', function() {
		expect(findBoth).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { findBoth(1, 2) }).to.throw('Invalid Input');
		expect(function() { findBoth(1, []) }).to.throw('Invalid Input');
		expect(function() { findBoth([], 2) }).to.throw('Invalid Input');
		expect(function() { findBoth([1,2,3], 2) }).to.throw('Invalid Input');
		expect(function() { findBoth([1,2,3], ['a']) }).to.throw('Invalid Input');
		expect(function() { findBoth([1,2,3,'g'], [1,3,'a']) }).to.throw('Invalid Input');
		expect(function() { findBoth([1,2,3,1.2], [1,3]) }).to.throw('Invalid Input');
		expect(function() { findBoth([1,2,3], [1,3]) }).to.not.throw('Invalid Input');
	});
	it('should return the correct result array', function() {
		expect(findBoth([1,2,3], [1,3])).to.include(1).include(3);
		expect(findBoth([23,5,1,654,23,65], [1,3])).to.include(1);
		expect(findBoth([23,5,1,654,23,65], [1,3]).length).to.equal(1);
		expect(findBoth([23,5,1,654,23,65], [6,3])).to.eql([]);
		expect(findBoth([23,5,1,654,23,65], [6,3,5,65,78,23,1,55])).to
			.include(5)
			.include(1)
			.include(65)
			.include(23);
		expect(findBoth([23,5,1,654,23,65], [6,3,5,65,78,23,1,55]).length).to.equal(4);

	});
});

// PROBLEM `countBoth`
describe('countBoth', function() {
	it('should exist', function() {
		expect(countBoth).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { countBoth(1, 2) }).to.throw('Invalid Input');
		expect(function() { countBoth(1, []) }).to.throw('Invalid Input');
		expect(function() { countBoth([], 2) }).to.throw('Invalid Input');
		expect(function() { countBoth([1,2,3], 2) }).to.throw('Invalid Input');
		expect(function() { countBoth([1,2,3], ['a']) }).to.throw('Invalid Input');
		expect(function() { countBoth([1,2,3,'g'], [1,3,'a']) }).to.throw('Invalid Input');
		expect(function() { countBoth([1,2,3,1.2], [1,3]) }).to.throw('Invalid Input');
		expect(function() { countBoth([1,2,3], [1,3]) }).to.not.throw('Invalid Input');
	});
	it('should return the correct result', function() {
		expect(countBoth([1,2,3], [1,3])).to.equal(2);
		expect(countBoth([23,5,1,654,23,65], [1,3])).to.equal(1);
		expect(countBoth([23,5,1,654,23,65], [6,3])).to.eql(0);
		expect(countBoth([23,5,1,654,23,65], [6,3,5,65,78,23,1,55])).to.equal(4);
	});
});

// PROBLEM `isDiagonalMatrix`
describe('isDiagonalMatrix', function() {
	it('should exist', function() {
		expect(isDiagonalMatrix).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { isDiagonalMatrix() }).to.throw('Invalid Input');
		expect(function() { isDiagonalMatrix([]) }).to.throw('Invalid Input');
		expect(function() { isDiagonalMatrix([1]) }).to.throw('Invalid Input');
		expect(function() { isDiagonalMatrix(['a']) }).to.throw('Invalid Input');
		expect(function() { isDiagonalMatrix([[1],{}]) }).to.throw('Invalid Input');
		expect(function() { isDiagonalMatrix([[1],[2]]) }).not.to.throw('Invalid Input');
	});
	it('should return true if a diagonal matrix is provided', function() {
		expect(isDiagonalMatrix([[1]])).to.be.true;
		expect(isDiagonalMatrix([[0]])).to.be.true;
		expect(isDiagonalMatrix([
			[1, 0],
			[0, 1]
		])).to.be.true;
		expect(isDiagonalMatrix([
			['a', 0],
			[0, 1]
		])).to.be.true;
		expect(isDiagonalMatrix([
			['a', 0],
			[0, false]
		])).to.be.true;
		expect(isDiagonalMatrix([
			['a', 0],
			[0, false]
		])).to.be.true;
		expect(isDiagonalMatrix([
			[undefined, 0],
			[0, false]
		])).to.be.true;
		expect(isDiagonalMatrix([
			['a', 0, 0],
			[0, 'b', 0],
			[0, 0, 'c'],
		])).to.be.true;
		expect(isDiagonalMatrix([
			['a', 0, 0],
			[0, 'b', 0],
			[0, 0, 0],
		])).to.be.true;
	});
	it('should return false if a diagonal matrix is not provided', function() {
		expect(isDiagonalMatrix([[1]])).to.be.true;
		expect(isDiagonalMatrix([
			[1, 0],
			[false, 1]
		])).to.be.false;
		expect(isDiagonalMatrix([
			[1, 0],
			[null, 1]
		])).to.be.false;
		expect(isDiagonalMatrix([
			[1, 0],
			[undefined, 1]
		])).to.be.false;
		expect(isDiagonalMatrix([
			['a', 0],
			[1, 1]
		])).to.be.false;
		expect(isDiagonalMatrix([
			['a', 0],
			[1, false]
		])).to.be.false;
		expect(isDiagonalMatrix([
			['a', 'c'],
			[0, false]
		])).to.be.false;
		expect(isDiagonalMatrix([
			[undefined, 'Aaron'],
			[0, false]
		])).to.be.false;
		expect(isDiagonalMatrix([
			['a', 0, 0],
			[0, 'b', 0],
			[1, 0, 'c'],
		])).to.be.false;
	});
});

// PROBLEM `isAnagram`
describe('isAnagram', function() {
	it('should exist', function() {
		expect(isAnagram).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { isAnagram() }).to.throw('Invalid Input');
		expect(function() { isAnagram([]) }).to.throw('Invalid Input');
		expect(function() { isAnagram([1]) }).to.throw('Invalid Input');
		expect(function() { isAnagram(['a']) }).to.throw('Invalid Input');
		expect(function() { isAnagram([[1],{}]) }).to.throw('Invalid Input');
		expect(function() { isAnagram([[1],[2]]) }).to.throw('Invalid Input');
		expect(function() { isAnagram([[1],['abc']]) }).to.throw('Invalid Input');
		expect(function() { isAnagram([['cab'],['abc']]) }).to.throw('Invalid Input');
	});
	it('should return an array checking for anagrams in input arrays', function() {
		expect(isAnagram(
			['cinema', 'shot', 'aba', 'rain'],
			['iceman', 'hots', 'bab', 'train']
		)).to.deep.equal([true, true, false, false]);

		expect(isAnagram(
			['aaa', 'abcc', 'asdf', 'raint'],
			['aaab', 'aabc', 'fdsa', 'train']
		)).to.deep.equal([false, false, true, true]);
	});
});

// PROBLEM `validateParentheses`
describe('validateParentheses', function() {
	it('should exist', function() {
		expect(validateParentheses).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { validateParentheses() }).to.throw('Invalid Input');
		expect(function() { validateParentheses('') }).not.to.throw('Invalid Input');
		expect(function() { validateParentheses('a') }).to.throw('Invalid Input');
		expect(function() { validateParentheses('{])') }).not.to.throw('Invalid Input');
		expect(function() { validateParentheses(null) }).to.throw('Invalid Input');
		expect(function() { validateParentheses(undefined) }).to.throw('Invalid Input');
		expect(function() { validateParentheses(NaN) }).to.throw('Invalid Input');
		expect(function() { validateParentheses([1,2,3]) }).to.throw('Invalid Input');
		expect(function() { validateParentheses({}) }).to.throw('Invalid Input');
		expect(function() { validateParentheses(7) }).to.throw('Invalid Input');
	});
	it('should validate the parentheses', function() {
		expect(validateParentheses('[')).to.be.false;
		expect(validateParentheses(']')).to.be.false;
		expect(validateParentheses('{')).to.be.false;
		expect(validateParentheses('}')).to.be.false;
		expect(validateParentheses('(')).to.be.false;
		expect(validateParentheses(')')).to.be.false;
		expect(validateParentheses(')(')).to.be.false;
		expect(validateParentheses('()')).to.be.true;
		expect(validateParentheses('([)')).to.be.false;
		expect(validateParentheses('([)]')).to.be.false;
		expect(validateParentheses('([])]')).to.be.false;
		expect(validateParentheses('([])')).to.be.true;
		expect(validateParentheses('([{}])')).to.be.true;
		expect(validateParentheses('([]{})')).to.be.true;
		expect(validateParentheses('([]{()})')).to.be.true;
		expect(validateParentheses('([]{()}))')).to.be.false;
		expect(validateParentheses('([]{()}){')).to.be.false;
	});
});

// PROBLEM `flattenArray`
describe('flattenArray', function() {
	it('should exist', function() {
		expect(flattenArray).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() { flattenArray() }).to.throw('Invalid Input');
		expect(function() { flattenArray('') }).to.throw('Invalid Input');
		expect(function() { flattenArray('a') }).to.throw('Invalid Input');
		expect(function() { flattenArray(null) }).to.throw('Invalid Input');
		expect(function() { flattenArray(undefined) }).to.throw('Invalid Input');
		expect(function() { flattenArray(NaN) }).to.throw('Invalid Input');
		expect(function() { flattenArray([1,2,3.3]) }).not.to.throw('Invalid Input');
		expect(function() { flattenArray([1,2,3]) }).not.to.throw('Invalid Input');
		expect(function() { flattenArray([1,'a',3]) }).not.to.throw('Invalid Input');
		expect(function() { flattenArray({}) }).to.throw('Invalid Input');
		expect(function() { flattenArray(7) }).to.throw('Invalid Input');
		expect(function() { flattenArray(7.5) }).to.throw('Invalid Input');
	});
	it('should flatten the array', function() {
		expect(flattenArray(
			[1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]
		)).to.deep.equal([1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]);
		expect(flattenArray(
			['a', 'b', 'c']
		)).to.deep.equal(['a', 'b', 'c']);
		expect(flattenArray(
			['a', 'b', 'c', 5]
		)).to.deep.equal(['a', 'b', 'c', 5]);
		expect(flattenArray(
			['a', 'b', 'c', [5]]
		)).to.deep.equal(['a', 'b', 'c', 5]);
		expect(flattenArray(
			['a', ['b'], 'c', [5]]
		)).to.deep.equal(['a', 'b', 'c', 5]);
		expect(flattenArray(
			['a', ['b', 'q'], 'c', [5]]
		)).to.deep.equal(['a', 'b', 'q', 'c', 5]);
		expect(flattenArray(
			['a', ['b', 'q', [7]], 'c', [5]]
		)).to.deep.equal(['a', 'b', 'q', 7, 'c', 5]);
	});
});