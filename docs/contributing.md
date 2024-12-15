# Contributing

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Getting started

### Prerequisites

You must have the following installed on your machine to run the project.

1. [Git](https://git-scm.com/downloads)
2. [Node.js (NPM)](https://nodejs.org/en)

### Installation

1. Clone repository to your local machine

```bash
cd <your projects directory>

# creates a new folder containing the repo
git clone https://github.com/skyler-hall/Recyclepediamdc.git recyclepedia

cd recyclepedia
```

2. Install dependencies

```bash
npm install
```

**Note:** You must run `npm install` whenever you pull changes from the remote repository, as it may contain new or updated dependencies. This ensures your local environment has all required packages.

3. Start development environment

```bash
npm run dev
```

4. Open the development environment in your browser: http://localhost:3000

## Basic Git Workflow

_Note: This section provides a basic overview of our Git workflow._

1. Create a new branch

```bash
git checkout -b <branch-name>
```

2. Make changes to the code

3. Commit changes

```bash
git commit -m "Commit message"
```

4. Push changes to remote repository

```bash
git push origin <branch-name>
```

5. Create a pull request

6. Create a pull request on GitHub: [Instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Your pull request will now be available for review. Other team members can provide feedback, request changes, or approve and merge your code.

**Important:** Before starting any work, ensure your local repository is up-to-date by pulling the latest changes from the main branch.
