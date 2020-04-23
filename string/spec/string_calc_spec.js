const {
    stringCalculator
} = require('../src/string_calc');


const validate = new stringCalculator();


    describe("the string", function () {
        let validate = new stringCalculator;
        it("should have an empty string", function () {
            expect(validate.Add(" ")).toEqual(0);
        });


        it("should have numbers in string", function () {
            expect(validate.Add("1")).toEqual(1);
        });

        it("should add two numbers", function () {
            expect(validate.Add("1,2")).toEqual(3);
        });

        it("Should allow newline between numbers", function () {
            expect(validate.Add("1 ,\n 2")).toEqual(3);
        });

        it("returns an error message and a negative number/s", function () {
            expect(validate.Add("/-1\n-2%"))
        }).toThrowError("Negatives not allowed -1 -2 ");
    })


    it("should not be greater than 1000", function () {
        expect(validate.Add("2+1001")).toEqual(2);
    });
