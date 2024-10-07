function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let resultText = `Your BMI is ${bmi}.`;
        let healthStatusText = "";

        if (bmi < 18.5) {
            resultText += "\nYou are underweight";
            healthStatusText = "Being underweight can lead to \n health issues such as weakened \n immune system, fragile bones, and \n fatigue. Consider consulting a \n healthcare provider for advice.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "\n You have a \n normal weight.";
            healthStatusText = "Maintaining a normal weight is\n associated with a lower risk \n of serious health conditions.\n Keep up with a balanced diet \n and regular exercise.";
        } 
         else {
            resultText += "\nYou are Overweight ";
            healthStatusText = "Obesity can lead to severe\n health problems including heart\n disease, diabetes, and high blood\n pressure.Seek medical advice to\n develop a suitable weight loss.";
        }

        document.getElementById('result').innerText = resultText;
        document.getElementById('healthStatus').innerText = healthStatusText;
    } else {
        document.getElementById('result').innerText = "Please enter valid height and weight.";
        document.getElementById('healthStatus').innerText = "";
    }
}
