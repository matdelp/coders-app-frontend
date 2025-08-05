# Coders App – Frontend

A responsive web application built with **React**, **TailwindCSS**, **Zustand**, and **Vite**, designed as part of the Code Labs Academy Web Development Bootcamp. This is the frontend for the Coders platform, allowing coders to register, solve challenges, and track their progress.

## Features

- **User Authentication** – Sign up, sign in, and protected routes.
- **Challenge Workspace** – Code editor with test case preview and submission.
- **Leaderboard** – Displays top coders with ranks and scores.
- **Profile Management** – View and edit personal information.
- **Challenge Browser** – List and filter coding challenges by category.
- **Dark / Light Theme** – Theme toggling with Zustand.

## Pages

- Sign In / Sign Up
- Home (Challenge listing)
- Challenge Workspace
- Leaderboard
- Profile

## Components

### Authentication
- `SignInPage` – React state-based form validation.
- `SignUpPage` – Built using `react-hook-form` + `zod`.

### Workspace
- `ChallengeDescription` – Markdown preview using `react-markdown-preview`.
- `Playground` – Code editor and test cases using `react-codemirror` and `react-split`.
- `DropDown` – Select language and font size.

### Leaderboard
- `LeaderboardPage` – Ranks, names, scores, and solved challenge count.

### Home
- `Navbar` – Logo, navigation links, user avatar, and theme toggle.
- `CategoriesList` – List of challenge categories.
- `ChallengesList` – List of challenges with status icons (`react-icons`).
- `TrendingCategoriesBox` – Highlights popular challenge categories.

## Theme

Supports **dark** and **light** modes with Zustand-based toggle.

## State Management

- Built using **Zustand**
- Theme and Workspace settings stored in the global store

## Development Setup

> This app was scaffolded using Vite with TailwindCSS.

## Author

Mathilde Delpeuch

Full-stack Web Development Student – Code Labs Academy

GitHub – @matdelp
