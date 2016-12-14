var should = require("should");
var formatLocation = require("../lib/formatLocation");

describe("formatLocation", () => {
	var testCases = [
		[ "string", "str", "str" ],
		[ "number", 12, "12" ],
		[ "line-column", { start: { line: 1, column: 2 }, end: { line: 3, column: 4} }, "1:2-3:4" ],
		[ "line-column (same line)", { start: { line: 1, column: 2 }, end: { line: 1, column: 4} }, "1:2-4" ],
		[ "line-column (start only)", { start: { line: 5, column: 6 } }, "5:6" ],
		[ "start-end string", { start: "start", end: "end" }, "start-end" ],
		[ "start-end number", { start: 9, end: 7 }, "9-7" ],
		[ "line", { start: { line: 10 }, end: { index: 20 } }, "10:?-+20" ],
		[ "line", { start: null, end: /f/ }, "?" ]
	];
	testCases.forEach(testCase => {
		it(`should format location correctly for ${testCase[0]}`, () => {
			formatLocation(testCase[1]).should.be.eql(testCase[2]);
		});
	});
});
