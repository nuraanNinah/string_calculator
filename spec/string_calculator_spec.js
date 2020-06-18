const {
  stringCalculator
} = require('../src/string_calculator');

let myAdd = require("../src/string_calculator");
let add = myAdd.add

describe("add", function () {
  it(`should return 0`, function () {
    expect(add("")).toBe(0);
  });
  it(`should return 1`, function () {
    expect(add("1")).toBe(1);
  });
  it(`should return 2`, function () {
    expect(add("1,1")).toBe(2);
  });
  it(`should return 10`, function () {
    expect(add("1,2,3,4")).toBe(10);
  });
  it(`should return 6`, function () {
    expect(add("1\n2,3")).toBe(6);
  });
  it(`should return 3`, function () {
    expect(add("//;\n1;2")).toBe(3);
  });
  it(`should return 3`, function () {
    expect(add("//4\n142")).toBe(3);
  });
  it(`should return  Negatives not allowed`, function () {
    expect(function () {
      add("-1,2,3,4")
    }).toThrow("negatives not allowed -1")
  });
  it(`should return 3`, function () {
    expect(add("//;\n1000;1;2")).toBe(3);
  });
  it(`should return 3`, function () {
    expect(add("//***\n1***2***3")).toBe(6);
  });

  it(`should return 3`, function () {
    expect(add("//;\n1000;1;2")).toBe(3);
  });

  it(`should return 6`, function () {
    expect(add("//***\n1***2***3")).toBe(6);
  });

  it(`should return 6`, function () {
    expect(add("//[:D][%]\n1:D2%3")).toBe(6);
  });

});