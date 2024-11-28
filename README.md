<h1 align="center"> React Portfolio</h1>

This repository is home to a simple, fully functional React portfolio website designed specifically for aspiring front-end developers. It's an ideal starting point for anyone who wants to:

- Learn React by building a practical project.
- Gain inspiration for their own portfolio design.
- Understand basic React components and state management.


![3-devices-black](https://github.com/user-attachments/assets/8ebb69f0-be98-49d8-839b-b66ea2bcc325)
## Features



- Smooth Scrolling
- Scroll Animations
- Responsiveness



## Run Locally

Clone the project

```bash
  git clone https://github.com/MuhammadRomanKhan717/portfolio.git
```

Go to the project directory

```bash
  cd react-portfolio
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```

<h1 align="center">How to Publish a React App</h1>

This guide provides step-by-step instructions on deploying a React app to a live server using popular platforms.

---
## steps to create the repo
### Steps to Create a GitHub Repository
1. Log in to your GitHub account.
2. Click the green "New" button on the top-left.
3. Fill in the details:
   *  Repository Name: Enter a unique name for your repository
   * Description (optional): Add a short description of your project.
   * Visibility: Choose Public (visible to everyone) or Private (only you and collaborators can see).
     
4. Click "Create Repository".  
## or  
Go to this [guide](https://docs.github.com/en/pages/quickstart) to learn all the steps for creating a repository and setting up a GitHub page.


   
## Steps to Publish

### Step 1: Build the App for Production
You can create a production build to prepare your React app for deployment.

```bash
npm run build
```
## Option C: GitHub Pages

### Step 1: Install the `gh-pages` package
Install the `gh-pages` package as a development dependency:

```bash
npm install gh-pages --save-dev
```
## Step 2: Add Deployment Scripts
### add the homepage in the GitHub page links in pachage.json
```bash
"homepage": "https://Your_userName.github.io/YourRepo_name",
```
### Update your package.json file to include the following scripts:

```bash
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
###  Step 3: Deploy the App
Run the following command to deploy your app to GitHub Pages:
```bash
npm run deploy
```
### Your app will be live at:
```php
https://<your-username>.github.io/<your-repo>

```
## FAQ

### Can I use this project as a template to create my portfolio?

Yes! But don't forget to add your magic to it ✨.


