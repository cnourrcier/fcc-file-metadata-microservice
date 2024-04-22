# File Metadata Microservice

This project is a microservice built as part of the freeCodeCamp Back End Development and APIs Certification. It allows users to upload a file and receive information about the file, including its name, type, and size.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.

## Usage

1. Start the server by running `node server.js`.
2. Access the application through a web browser.
3. Navigate to the homepage (`/`) to access the HTML form.
4. Choose a file to upload and submit the form.
5. The server will respond with JSON data containing information about the uploaded file, including its name, type, and size.

## Endpoints

- `GET /`: Serves the HTML form for uploading files.
- `POST /api/fileanalyse`: Accepts file uploads and returns JSON data containing information about the uploaded file.

## Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `multer`: Middleware for handling file uploads.

## Configuration

- The server listens on the port specified by the `PORT` environment variable, defaulting to port `3000` if not specified.

## Credits

This project is part of the Back End Development and APIs Certification from [freeCodeCamp](https://www.freecodecamp.org/).

## License

This project is licensed under the [BSD 3-Clause License](LICENSE).

