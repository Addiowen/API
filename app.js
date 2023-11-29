// require modules
const express = require('express');
const mongoose = require('mongoose');
const Developer = require('./models/devs');

// Create express app
const app = express();

// Create connection URI
const dbURI = 'mongodb+srv://oscar:OOgymodZdjwBoAvl@cluster0.kuzcnac.mongodb.net/owenApi?retryWrites=true&w=majority';

// Middleware to parse JSON requests
app.use(express.json());

// Connect app with MongoDB
mongoose.connect(dbURI)
.then(() => {
    // Listen for requests
    app.listen(3000, () => {
        console.log("API App running on port 3000");
    });
    console.log("Connection Success!");
})
.catch((err) => {
    console.log(err);
});

// Saving data to database
const newDeveloper = new Developer({
    firstName: 'Faith',
    lastName: 'Nyaberi',
    email: 'abiolajames@gmail.com',
    skills: ['Python', 'Flask', 'SQL'],
    projects: [
      {
        title: 'FindDev API',
        description: 'An API that can fetch information about a developer',
        technologies: ['React', 'Express', 'MongoDB'],
        url: 'https://finddev.netlify.com',
      },
    ],
    socialMedia: {
      github: 'https://github.com/obonyo',
      linkedin: 'https://www.linkedin.com/in/obonyo',
      twitter: 'https://twitter.com/obonyo',
    },
  });
  
  newDeveloper.save()
  .then(savedDeveloper => {
    console.log('Developer saved:', savedDeveloper);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
  
// routes
app.get('/', (req, res) => {
    res.send("Hello Simple API");
});

app.get('/blog', (req, res) => {
    res.send("hello i am a test blog");
});
