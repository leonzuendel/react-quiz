# React Quiz 💬

I designed this quiz about myself as part of a job application. However, it can be easily customized to be a quiz about any topic.

## Local setup

1. Git clone this project
2. Run `yarn install` to install local dependencies
3. Run `docker compose up --build` to start the Docker container and initialize a build
4. Visit [http://localhost:3000/](http://localhost:3000/) in your browser

## Customizing content and styling

### Add questions

You can edit and replace any questions in this file: `/src/data/quiz.json`. There is no limit to the amount of questions, but every question should have exactly 4 answers.

### Edit welcome and results text

You can change both texts in their corresponding files `welcome.md` and `results.md` in this folder: `/src/content`.

### Customize styling

The styles are defined in SCSS using a simple folder hierarchy inside `/src/scss`. All SCSS files with an underscore (`_`) in front of their name are imported in `main.scss`. The color variables are defined in `globals.scss`.
