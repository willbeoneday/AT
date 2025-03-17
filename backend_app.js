const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Store candidates and jobs in memory (replace with DB later)
let candidates = [];
let jobs = [];

// File upload setup
const upload = multer({ dest: 'uploads/' });

// POST /jobs - Create a job post
app.post('/jobs', (req, res) => {
  const { title, description } = req.body;
  const job = {
    id: jobs.length + 1,
    title,
    description,
  };
  jobs.push(job);
  res.json({ message: 'Job posted!', job });
});

// GET /jobs - List all jobs
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// POST /apply - Candidate applies for a job
app.post('/apply', upload.single('resume'), (req, res) => {
  const { name, email, phone, jobId } = req.body;
  const resumePath = req.file.path;

  const candidate = {
    id: candidates.length + 1,
    name,
    email,
    phone,
    resumePath,
    jobId,
    status: 'Applied',
  };

  candidates.push(candidate);
  res.json({ message: 'Application received!', candidate });
});

// GET /candidates - List all candidates
app.get('/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`ATS backend running on http://localhost:${PORT}`);
});