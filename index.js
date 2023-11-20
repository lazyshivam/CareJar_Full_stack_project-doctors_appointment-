const express = require('express');
const Chance = require('chance');
const path = require('path');
const cors= require('cors');

require('dotenv').config();



const PORT = process.env.PORT||8000;

const app = express();
app.use(express.json());
app.use(cors());



app.use(express.static(path.join(__dirname, 'dist')));

// Handle requests to your React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Create a new instance of Chance
const chance = new Chance();

// generating doctors info here 
const generateDoctors = () => {
  const doctors = [];
  for (let i = 1; i <= 20; i++) {
    const name = chance.name();
    const category = chance.pickone(['Cardiologist', 'Dermatologist', 'Orthopedic', 'Pediatrician']);
    const image = chance.avatar();
    const experience = chance.integer({ min: 5, max: 30 });
    const location = 'Dalanwala, Dehradun';
    const clinic = chance.sentence({ words: 4 });
    const consultationFee = chance.integer({ min: 100, max: 500 });

    const doctorDetails = {
      id: i,
      name: `Dr. ${name}`,
      category: category,
      image: image,
      details: {
        experience: `${experience} years experience overall!`,
        location: `${location} • ${clinic}`,
        consultationFee: `₹${consultationFee} Consultation fee at clinic`,
      },
    };

    doctors.push(doctorDetails);
  }
  return doctors;
};


const generatedDoctors = generateDoctors();
// console.log(generatedDoctors);


// gerenating random categories
const generateCategories = () => {
  const categories = [];
  for (const category of ['Cardiologist', 'Dermatologist', 'Orthopedic', 'Pediatrician']) {
    categories.push({
      name: category,
      description: chance.sentence(),
      image: chance.avatar(),
    });
  }
  return categories;
};

const doctors = generateDoctors();
const categories = generateCategories();

// API endpoints
app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/doctors/:category', (req, res) => {
  const selectedCategory = req.params.category;
  const filteredDoctors = doctors.filter(doctor => doctor.category === selectedCategory);
  res.json(filteredDoctors);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
