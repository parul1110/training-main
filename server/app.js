const express = require('express');
const session = require('express-session');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');
const booksRoutes = require('./routes/employeeRouter');
const authRoutes = require('./routes/authRouter');
const db = require('./db/index');
const app = express();
app.use(bodyParser.json());

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(cors());
app.get('/health', (req, res) => {
  res.send('This is a health check of server');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/employees', booksRoutes);
app.use('/auth', authRoutes);

// Start the server
const port = process.env.PORT || 8080;

db.connect().then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start the server:', err);
  });

