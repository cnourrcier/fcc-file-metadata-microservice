# File Metadata Microservice

This is my File Metadata Microservice Project for freecodecamp.org. I used the provided [boilerplate](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/) to complete this challenge. The test requirements can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/cnourrcier/fcc-file-metadata-microservice.git
```

2. Install dependencies:

```bash
cd fcc-file-metadata-microservice
npm install
```

## Usage

1. Start the server:

```bash
npm run start
```

## API Endpoints

|   Endpoint    |  Description  |
| ------------- | ------------- |
| GET / | Serve the HTML form |
| POST /api/fileanalyse | Upload the file to uploads directory (if directory does not exist, it creates one first) and send the file name, type, and size to client |


## License

This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details. 

