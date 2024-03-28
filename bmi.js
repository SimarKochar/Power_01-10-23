window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
        result.style.backgroundColor = "lightcoral"; // Light background for underweight
        result.style.color = "red"; // Text color for underweight
        result.style.padding = "10px"; // Add some padding for better visibility
        result.innerHTML += "  &#128123;"; // Add emoji for underweight (thinking face)
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
        result.style.backgroundColor = "lightgreen"; // Light background for normal
        result.style.color = "green"; // Text color for normal
        result.style.padding = "10px";
        result.innerHTML += "  &#128522;"; // Add emoji for normal (smiling face with sunglasses)
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Overweight: ${bmi}`;
        result.style.backgroundColor = "lightyellow"; // Light background for overweight
        result.style.color = "orange"; // Text color for overweight
        result.style.padding = "10px";
        result.innerHTML += "  &#128532;"; // Add emoji for overweight (frowning face)
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
        result.style.backgroundColor = "lightcoral"; // Light background for Class I obesity
        result.style.color = "orangered"; // Text color for Class I obesity
        result.style.padding = "10px";
        result.innerHTML += "  &#128561;"; // Add emoji for Class I obesity (worried face)
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
        result.style.backgroundColor = "lightcoral"; // Light background for Class II obesity
        result.style.color = "red"; // Text color for Class II obesity
        result.style.padding = "10px";
        result.innerHTML += "  &#128557;"; // Add emoji for Class II obesity (face screaming in fear)
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
        result.style.backgroundColor = "lightpink"; // Light background for extreme obesity
        result.style.color = "purple"; // Text color for extreme obesity
        result.style.padding = "10px";
        result.innerHTML += "  &#128125;"; // Add emoji for extreme obesity (slightly frowning face)
    }

}