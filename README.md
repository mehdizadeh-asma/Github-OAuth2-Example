# Github-OAuth2-Example

This project consists of implementation of GITHUB OAuth2 in Reactjs and Nodejs.

## Purpose

A simple web application that retrieves and displays the user profile, repositories, gists and organizations in Github

### UX/UI

Include Responsive Interface consisting of an input to enter the username, one area to display the repositories, gists and organizations of the user, and separeated areas to display the authorized user profile and searched user profile. every module has diffrent page to display results but all of the pages has the same responsive template.

### Retrieving data

- To retrieve the user details, it uses the steps from [here](https://docs.github.com/en/rest/reference/users#get-a-user)
- To retrieve the user gists, it uses the steps from [here](https://docs.github.com/en/rest/reference/gists#list-gists-for-a-user)
- To retrieve the user organizations, it uses the steps from [here](https://docs.github.com/en/rest/reference/orgs#list-organizations-for-a-user)

### Specifications

- used JavaScript, TypeScript, NodeJS, ExpressJS, React, Nextjs, Bootstrap, React-Bootstrap, and Sass.
- The test results are uploaded.
- The docker image is built and pushed into Docker Hub

