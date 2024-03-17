# Bookstore with React + TypeScript + Vite

## Setup

This project works with an external API, Google Books. Therefore, before buiding the app please create a .env file with the following parameters:

VITE_GOOGLE_BOOKS_BASE_URL=https://www.googleapis.com/books/v1/volumes
VITE_GOOGLE_BOOKS_API_KEY=\*\*\*

For the parameter VITE_GOOGLE_BOOKS_API_KEY you must create a valid Google Books Api Key in the following page : [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

Once you hay your valid API KEY set up, you can build the project by running the following command:

`npm run dev`

## Project Info

This is a project developed to explore a configuration with React, TypeScript and Vite.
I've used different resources such as React and custom hooks & React context utility.
I've also explored the API Google Books and the connection to it through API Keys.

## Folder Structure

Even if it's a small project, it's structure is designed to be scallable and divides the appplication by components, context, hooks, models, reducers and services.

## Following iterations

The following iterations for this project should be the following:

- Refine styles.
- Add testing with Vitest.
