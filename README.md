# FurReal

Team
- Name: Godwyn Dave Sebastian | GitHub: godwynndave-ux | Role: Product Owner
- Name: Erlben Reysani Julrik Cabuhat | GitHub: ERLBEN | Role: QA / Scrum Master
- Name: John Albert Bernardo | GitHub: magnus109 | Role: QA / Scrum Master
- Name: Veronica Marcos | GitHub: veronmar | Role: Frontend Developer
- Name: Hazel Rose De Guzman | GitHub: Choi-ai | Role: Backend Developer

## Setup

### Requirements

- Node.js LTS, which includes npm.

### Clone the repository

```sh
git clone https://github.com/godwynndave-ux/FurReal.git
cd FurReal
```

### Install dependencies

```sh
npm install
```

### Configure environment variables (optional)

The app uses `dotenv` to load environment variables from a `.env` file in the project root. No `.env` file is required to run the app. To use a custom port, create `.env` with a value such as:

```text
PORT=3001
```

If `PORT` is not set, the app uses port `3000`. Keep `.env` local and never commit it.

### Run the application

```sh
npm start
```

By default, open [http://localhost:3000](http://localhost:3000) in your browser. If you set a custom port, use that port in the URL.
