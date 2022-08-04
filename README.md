# Welcome to Assurance | Image Search 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Twitter: julbarg](https://img.shields.io/twitter/follow/julbarg.svg?style=social)](https://twitter.com/julbarg)

> Assurance | Image Search is an application that allows users to search and browse images online from Pixabay API.

### ✨ [Demo](https://image-search-assurance.vercel.app/)

## Install

```sh
yarn install
# or
npm install
```

## Usage

```sh
yarn start
# or
npm start
```

## Build With

- React
- [Material UI](https://mui.com/getting-started/installation/)
- TypeScript

## Decisions

- **Material UI:** MUI is a massive library of built-in UI components designers and developers can use to build React applications. Particularly for this project **Image List** component was used to implement the collection of images which are displayed in an organized grid using a masonry style that use a dynamically sized container. It is easy to implement responsiveness application using this library, it incorporates an breakpoint api system.
- **React + TypeScript:** TypeScript is a superset of JavaScript which primarily provides optional static typing, classes, and interfaces.
  - This combination of tools help developers to create more readable and understandable components
  - Type checking at compile time is way better that thing crashing at run time
  - As a developer we get better development experience because autocomplete knows more about what we are intending on doing
  - It is possible to put guardrails on how our code can be used
- **qs**: A querystring parsing and stringifying library with some added security. It was used to add query params to the URL.

## Improvements

- **Unit Testing:** Include unit testing in all components
- **Loading Experience:** Improve the experience when images are loaded. Include some technics such as:
  - Progressive image loading
  - Implementing a transition blur
- **Remove any types**

## Features - Architecture

- **Include more features**: For now it just showing the first 30 images. It could be nice to include the following features:
  - Pagination
  - Order by
  - Sort by
  - Image Details component to check the info for each image
- **Security Issues:** The key is visible for everyone. Add the sensitive data in secure place using env.local and env variables (Production).
- **Pipeline:** Include a pipeline to run test, build, static code analysis and finally deploy. Implement different environment at least Staging and Production.

## Author

👤 **Julian Barragan Verano**

- Website: Julian Barragan
- Twitter: [@julbarg](https://twitter.com/julbarg)
- Github: [@julbarg](https://github.com/julbarg)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/julian-barragan-b8844ab6\/](https://linkedin.com/in/https://www.linkedin.com/in/julian-barragan-b8844ab6/)
