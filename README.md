# DevLink with Firebase

This boilerplate project is crafted specifically for the Webflow Developers community, offering a seamless, ready-to-use environment integrated with Firebase and DevLink. It encompasses state management, authentication methods, and a fundamental app structure, all complemented by a pre-configured Webflow template.

## Features 🚀
- Integrated Firebase Authentication and State Management
- DevLink Boilerplate incorporated with Webflow
- Structured Header, Footer, and Firebase Logout functionality

## Tech Stack ✨
- Utilizes Next.js & React for front-end development
- Employs Webflow DevLink & Tailwind for UI/UX design
- Incorporates Zustand & Typescript for state management and programming, along - with Firebase for backend services
<br></br>

# Documentation 📙
Here's a friendly guide on how to set up the project, including all the necessary assets to get started.

## Get DevLink with Firebase 🔗
It is recommended to fork the repository if you intend to build upon it, though cloning for testing purposes is also advisable. Below are the commands to familiarize yourself with running a project using Next.js, which is similar to other frameworks:

1. In the Terminal, execute the following command to clone the repository: ```git clone https://github.com/Azwedo/devlink-with-firebase```
2. Navigate into the cloned directory using: ```cd devlink-with-firebase```
3. Install the necessary packages with: ```npm install```
4. Start the development server using Next.js by running: ```npm run dev```
5. The server will be accessible at http://localhost:3000

## Variables (Env) 🔗
In this project, variables are utilized to enhance security, facilitate project sharing, enable deployment, among other functionalities. Listed below are the .env variables employed, predominantly sourced from Webflow and Firebase:

```bash
# Firebase
NEXT_PUBLIC_FB_API_KEY="..."
NEXT_PUBLIC_FB_AUTH_DOMAIN="..."
NEXT_PUBLIC_FB_PROJECT_ID="..."
NEXT_PUBLIC_FB_STORAGE_BUCKET="..."
NEXT_PUBLIC_FB_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FB_APP_ID="..."

# Webflow 
NEXT_PUBLIC_WF_SITE_ENDPOINT="..."
NEXT_PUBLIC_WF_AUTH_TOKEN="..."
NEXT_PUBLIC_WF_SITE_ID="..."
```

## Firebase 🔥
In this project, Firebase Auth is utilized to configure authentication for users via DevLink. Below are the steps to create a project, the necessary requirements, and the procedure to retrieve environmental variables:

1. Initialize a Firebase Project
2. Activate Firebase Authentication
3. Configure Authorized Domains
4. Within the same Firebase project, establish a Web App
5. Transfer variables to the pre-configured .env file

## Webflow 🖊️
Here is the list on how to setup the project and variables:

1. If you haven't already, sign up for a devlink at https://webflow.com/devlink. Fill in the form, and you should gain immediate access using the email you registered with
2. Next, visit {{link}} and clone our free template
3. Navigate to 'Site Settings' and then to 'Apps & Integrations'. In the 'API access' section, generate an API token. Save this token to your .env file.
3. Return to the dashboard and select 'Components'. There, you'll find a "Export components" button. Click on it to reveal a .json file. Extract the siteId variable from this file and add it to your environment variables.
4. If you haven't installed it yet, run npm i `@webflow/webflow-cli -g` to get the Webflow CLI.
<br><br/>

# End 😊
This project is available for free use, and all its assets are licensed under MIT, allowing for extensive utilization. We sincerely thank you for reviewing and using our repository. In case of encountering any bugs, please feel free to report them here. Additionally, we welcome open Pull Requests to facilitate enhancements, making the project better and more accessible for others.

## License
This project and all its assets are licensed under the MIT License, allowing for extensive utilization.