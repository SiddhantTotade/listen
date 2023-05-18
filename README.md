<div align="center" >
  <img src="https://github.com/SiddhantTotade/spotify/blob/main/app_images/listen_logo.png" />
</div>

# About the project

Listen is a web music player. With this the user can listen any music he wants around the world. This application has music selection category along with the top artists and type of music the user wants and also has the search part where a person can search any song or any singer he wants. This application is using `Rapid API - Shazam Core` which delivers the music. Because it is an API, it only delivers songs only for 1.5 - 2 min not the full length of songs. Overall the application is OK and working fine.

# Getting Started
+ Clone the repo in your PC or Laptop.
```shell
git clone git@github.com:SiddhantTotade/listen.git.
```
+ Change directory to spotify.
```shell
cd listen_app
```
+ Open a terminal in the `listen_app` and type command.
```shell
npm install
```
+ After installation, type command.
```shell
npm run dev
```
+ Open application
```shell
http://localhost:3000/
```

## Configure the application
+ Visit the link `https://rapidapi.com/tipsters/api/shazam-core`
+ Create an account
+ After creating, copy the `X-RapidAPI-Key`
+ Create a `.env` file in `src` directory and paste the following code in `.env` file.
`VITE_SHAZAM_CORE_RAPID_API_KEY=API_KEY`

## Project Images
<div align="center" gap="10px" display="flex">
<img src="https://github.com/SiddhantTotade/listen/blob/main/app_images/listen_1.png" width="400px" />
<div/>
