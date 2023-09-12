let generateButton = document.getElementById("generate-button");
        let fibCountInput = document.getElementById("fib-count");
        let fibSequenceDiv = document.getElementById("fib-sequence");

        generateButton.addEventListener("click", generateFibonacci);

        function generateFibonacci() {
            let n = parseInt(fibCountInput.value);
            if (isNaN(n) || n <= 0) {
                alert("Please enter a valid positive number.");
                return;
            }

            let fibonacciSeries = calculateFibonacci(n);
            fibSequenceDiv.textContent = `Fibonacci Sequence (${n} numbers): ${fibonacciSeries.join(", ")}`;
            console.log("Fibonacci Series:", fibonacciSeries);
        }

        function calculateFibonacci(n) {
            let fibonacciList = [0, 1];
            for (let i = 2; i < n; i++) {
                let nextFibonacci = fibonacciList[i - 1] + fibonacciList[i - 2];
                fibonacciList.push(nextFibonacci);
            }
            return fibonacciList;
        }