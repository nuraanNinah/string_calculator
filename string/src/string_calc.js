class stringCalculator {
    constructor() {
        this.regexp = /\d{1,}/gm;


        // add function that can add two intergers

        function add(num1, num2) {
            return num1 + num2;
        }
        console.log(add(0, 0))



        function add(num1, num2) {
            return num1 + num2;
        }

        console.log(add("1\n2,3"))


        Add(string); {
            let results = 0;

            let numbers = string.match(this.regexp)
        }


        if (string == "") {
            return 0;
        }

        let str = "";

        for (let i = 0; i < string.length; i++) {
            if (string[i] === "-" && !isNaN(string[i + 1])) {
                str += "-" + string[i + 1] + " "
            }
        }


        if (str != "") {
            throw new Error("Negatives not allowed" + str);
        }

        for (let i = 0; i < numbers.length; i++) {
            let digit = parseInt(numbers[i])
            if (digit > 1000) {
                continue
            }

            if (digit) {
                results += digit;
            }
        }
        return results

    }

}


module.exports = {
    stringCalculator
}



