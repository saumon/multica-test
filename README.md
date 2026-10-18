<div align="center">

# multica-test

**A sandbox repository for testing the [Multica](https://github.com/multica-ai/multica) platform.**

**[🌐 Visit the landing page](https://saumon.github.io/multica-test/)**

[![Landing page](https://img.shields.io/badge/landing%20page-online-6f42c1)](https://saumon.github.io/multica-test/)
[![Powered by Multica](https://img.shields.io/badge/powered%20by-Multica-6f42c1)](https://github.com/multica-ai/multica)
[![Status: sandbox](https://img.shields.io/badge/status-sandbox-orange)](#about)
[![Last commit](https://img.shields.io/github/last-commit/saumon/multica-test)](https://github.com/saumon/multica-test/commits/main)
[![Open issues](https://img.shields.io/github/issues/saumon/multica-test)](https://github.com/saumon/multica-test/issues)
[![Open pull requests](https://img.shields.io/github/issues-pr/saumon/multica-test)](https://github.com/saumon/multica-test/pulls)
[![Contributors](https://img.shields.io/github/contributors/saumon/multica-test)](https://github.com/saumon/multica-test/graphs/contributors)
[![Repo size](https://img.shields.io/github/repo-size/saumon/multica-test)](https://github.com/saumon/multica-test)

</div>

---

## Table of contents

- [About](#about)
- [How it is used](#how-it-is-used)
- [Landing page](#landing-page)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## About

This project exists solely to test [Multica](https://github.com/multica-ai/multica).

It contains no production code: it is used to verify how the platform works (agents, issues, repositories, pull requests, etc.).

> [!NOTE]
> Nothing in this repository is meant to be deployed or reused. Changes here are experiments driven by Multica issues.

## How it is used

Issues are created on the Multica board and assigned to coding agents. Each agent checks out this repository, works on a dedicated branch, and opens a pull request for human review.

```mermaid
flowchart LR
    A[Multica issue] -->|assigned to| B[Agent]
    B -->|checks out repo,<br/>creates branch| C[Changes]
    C -->|push| D[Pull request]
    D -->|human review| E[Merge into main]
```

What this sandbox lets you verify:

- **Agents** — an agent picks up an issue and acts on it autonomously.
- **Issues** — status transitions, comments and wakeups on the Multica board.
- **Repositories** — checkout of a GitHub repository on a dedicated branch.
- **Pull requests** — branch push, PR creation and linking back to the issue.

## Landing page

A static landing page (HTML, CSS and vanilla JavaScript, no build step) lives in [`docs/`](docs/) and is published with GitHub Pages at **<https://saumon.github.io/multica-test/>**.

To preview it locally:

```bash
python3 -m http.server --directory docs 8000
# then open http://localhost:8000
```

> [!TIP]
> GitHub Pages must be enabled once in **Settings → Pages** with *Source: Deploy from a branch*, branch `main`, folder `/docs`.

## Repository structure

```text
.
├── docs/            # Landing page published with GitHub Pages
│   ├── .nojekyll    # Serve files as-is (no Jekyll processing)
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md        # This file
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/saumon/multica-test.git
cd multica-test
```

There is nothing to build or install.

## Contributing

1. Create an issue on the Multica board describing the change.
2. Let an agent (or yourself) work on a dedicated branch — never push directly to `main`.
3. Open a pull request and link it to the issue.
4. A human reviews and merges.

## License

No license has been specified for this repository yet. Until one is added, all rights are reserved by the repository owner.
