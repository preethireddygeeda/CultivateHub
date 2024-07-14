function showCropRecommendation() {
    document.getElementById('crop-recommendation').style.display = 'block';
}

function getRecommendation() {
    const nitrogen = parseFloat(document.getElementById('nitrogen').value);
    const phosphorus = parseFloat(document.getElementById('phosphorus').value);
    const potassium = parseFloat(document.getElementById('potassium').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);

    const data = {
        nitrogen: nitrogen,
        phosphorus: phosphorus,
        potassium: potassium,
        temperature: temperature,
        humidity: humidity,
        ph: ph,
        rainfall: rainfall
    };

    const recommendedCrop = getCropRecommendation(data);
    document.getElementById('output').innerText = `Recommended Crop: ${recommendedCrop}`;
}

function getCropRecommendation(data) {
   
    if (data.nitrogen < 120 && data.phosphorus < 60 && data.potassium < 40 &&
        data.temperature < 25 && data.humidity < 60 && data.ph == 6 && data.rainfall < 800) {
        return 'Wheat';
    } else if (data.nitrogen < 100 && data.phosphorus < 50 && data.potassium < 40 &&
               data.temperature < 30 && data.humidity < 80 && data.ph >= 5 && data.ph <= 7 && data.rainfall < 2000) {
        return 'Rice';
    } else if (data.nitrogen < 100 && data.phosphorus < 60 && data.potassium < 50 &&
               data.temperature < 27 && data.humidity < 60 && data.ph >= 5.5 && data.ph <= 7 && data.rainfall < 800) {
        return 'Maize';
    } else if (data.nitrogen < 20 && data.phosphorus < 50 && data.potassium < 30 &&
               data.temperature < 30 && data.humidity < 70 && data.ph >= 6 && data.ph <= 7.5 && data.rainfall < 700) {
        return 'Soybean';
    } else if (data.nitrogen < 80 && data.phosphorus < 40 && data.potassium < 40 &&
               data.temperature < 35 && data.humidity < 70 && data.ph >= 5.8 && data.ph <= 8 && data.rainfall < 800) {
        return 'Cotton';
    } else if (data.nitrogen < 150 && data.phosphorus < 80 && data.potassium < 100 &&
               data.temperature < 30 && data.humidity < 80 && data.ph >= 6 && data.ph <= 7.5 && data.rainfall < 1600) {
        return 'Sugarcane';
    } else if (data.nitrogen < 120 && data.phosphorus < 60 && data.potassium < 50 &&
               data.temperature < 27 && data.humidity < 70 && data.ph >= 6 && data.ph <= 6.8 && data.rainfall < 1000) {
        return 'Tomato';
    } else if (data.nitrogen < 140 && data.phosphorus < 50 && data.potassium < 120 &&
               data.temperature < 20 && data.humidity < 70 && data.ph >= 5 && data.ph <= 6.5 && data.rainfall < 700) {
        return 'Potato';
    } else if (data.nitrogen < 100 && data.phosphorus < 50 && data.potassium < 80 &&
               data.temperature < 21 && data.humidity < 70 && data.ph >= 6 && data.ph <= 6.8 && data.rainfall < 600) {
        return 'Carrot';
    } else if (data.nitrogen < 180 && data.phosphorus < 60 && data.potassium < 120 &&
               data.temperature < 20 && data.humidity < 80 && data.ph >= 6 && data.ph <= 6.8 && data.rainfall < 700) {
        return 'Cabbage';
    } else if (data.nitrogen < 80 && data.phosphorus < 40 && data.potassium < 50 &&
               data.temperature < 24 && data.humidity < 70 && data.ph >= 6 && data.ph <= 7 && data.rainfall < 700) {
        return 'Onion';
    } else if (data.nitrogen < 100 && data.phosphorus < 50 && data.potassium < 70 &&
               data.temperature < 30 && data.humidity < 70 && data.ph >= 6 && data.ph <= 6.8 && data.rainfall < 800) {
        return 'Pepper';
    } else if (data.nitrogen < 120 && data.phosphorus < 60 && data.potassium < 80 &&
               data.temperature < 30 && data.humidity < 70 && data.ph >= 6 && data.ph <= 7 && data.rainfall < 600) {
        return 'Cucumber';
    } else {
        return 'peas';
    }
}

















// function showCropRecommendation() {
//     document.getElementById('crop-recommendation').style.display = 'block';
// }

// function getRecommendation() {
//     const nitrogen = document.getElementById('nitrogen').value;
//     const phosphorus = document.getElementById('phosphorus').value;
//     const potassium = document.getElementById('potassium').value;
//     const temperature = document.getElementById('temperature').value;
//     const humidity = document.getElementById('humidity').value;
//     const ph = document.getElementById('ph').value;
//     const rainfall = document.getElementById('rainfall').value;

//     // Logic to handle prediction using form data
//     // For demonstration, we'll just show the input values
//     const output = `
//         Nitrogen: ${nitrogen} <br>
//         Phosphorus: ${phosphorus} <br>
//         Potassium: ${potassium} <br>
//         Temperature: ${temperature} <br>
//         Humidity: ${humidity}% <br>
//         pH: ${ph} <br>
//         Rainfall: ${rainfall}
//     `;

//     document.getElementById('output').innerHTML = output;
// }
