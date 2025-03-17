require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const candidateSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  resumePath: String,
  jobId: String,
  status: String,
});

const jobSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
});

const Candidate = mongoose.model('Candidate', candidateSchema);
const Job = mongoose.model('Job', jobSchema);

const upload = multer({ dest: 'uploads/' });

app.post('/jobs', async (req, res) => {
  try {
    const { title, description } = req.body;
    const job = new Job({
      id: uuidv4(),
      title,
      description,
    });
    await job.save();
    res.json({ message: 'Job posted!', job });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post job' });
  }
});

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, jobId } = req.body;
    const resumePath = req.file.path;

    const candidate = new Candidate({
      id: uuidv4(),
      name,
      email,
      phone,
      resumePath,
      jobId,
      status: 'Applied',
    });

    await candidate.save();
    res.json({ message: 'Application received!', candidate });
  } catch (error) {
    res.status(500).json({ error: 'Failed to apply for job' });
  }
});

app.get('/candidates', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch candidates' });
  }
});

app.listen(PORT, () => {
  console.log(`ATS backend running on http://localhost:${PORT}`);
});
