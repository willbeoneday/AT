# ATS App

This project is an Applicant Tracking System (ATS) that allows users to post job listings, apply for jobs, and manage candidates.

## Project Structure

```plaintext
ats-app/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── uploads/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobForm.js
│   │   │   ├── JobList.js
│   │   │   ├── ApplicationForm.js
│   │   │   ├── CandidateList.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── index.js
│   └── package.json
├── database/
│   └── database.json
```

## Features

- **Job Postings**: Create, list, and manage job postings.
- **Job Applications**: Apply for jobs with resume uploads.
- **Candidate Management**: List and manage candidates.

## Setup Instructions

### Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the backend server**:
   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend development server**:
   ```bash
   npm start
   ```

### Database

The database is currently a simple JSON file located at `database/database.json`. You can replace this with a real database like MongoDB or PostgreSQL in the future.

## Usage

1. **Open the frontend**:
   Open `http://localhost:3000` in your web browser.

2. **Create Job Posts**:
   - Navigate to the "Create Job Post" section.
   - Fill in the job title and description.
   - Click "Create Job".

3. **Apply for Jobs**:
   - Navigate to the "Apply for a Job" section.
   - Fill in the applicant details and select a resume file.
   - Click "Apply".

4. **Manage Candidates**:
   - Navigate to the "Candidate Listings" section to view all candidates.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
