# Utility API

Utility API is a lightweight Node.js backend designed to provide reusable server-side functions for multiple projects. It currently includes an email sending endpoint for contact forms, but is structured to easily accommodate additional backend utilities in the future.

Key Features

Email Sending: Uses Nodemailer to send emails from frontend forms to your configured inbox.

Serverless Ready: Can be deployed as a serverless function (e.g., on Vercel) or run as a full Express server locally.

Extensible Architecture: Modular structure allows easy addition of other utilities or endpoints for different projects.

Environment-Based Configuration: Securely manage credentials and API URLs using environment variables.

Technologies

Node.js

Express (optional, for local development)

Nodemailer

Vercel Serverless Functions compatible

Axios (frontend consumption)

# Usage

Clone the repository.

Install dependencies:

npm install


Set environment variables for email credentials and API URLs.

Run locally with:

node server.js
or 
nodemon server.js


Deploy serverless functions to Vercel (optional) for live endpoints.

Future Extensions

The API is built with scalability in mind. New endpoints for logging, analytics, notifications, or any other server-side utilities can be added without disrupting the current setup.
