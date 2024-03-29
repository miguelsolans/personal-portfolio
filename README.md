# 	Portfolio

*Portfolio* is a project created with nodeJS technology, MongoDB and several external APIs, all built with JavaScript.
This web-app *Portfolio* may work not only as a Curriculum Vitae but also as a free space for his owner to upload and 
display their own content, integrating several social networks.

#   Dependencies

This project has been built and uses technologies and third party npm libraries such as
1. EJS
1. Express
1. FS (built-in nodeJS)
1. MongoDB
1. Mongoose  

Besides npm and nodeJS, APIs such as:
1. Instagram via Instafeed
1. Facebook via Facebook SDK
1. ~~LastFM~~

To install all dependencies, it is mandatory to run the following command inside portfolio folder containing *package.json*

```
$ npm install 
```

#   Considerations Before Running
1. This project has a self signed SSL certificate until 18th of June 2019 therefore, to access this webapp,
it is mandatory to type the following address (https://localhost:3000) after running the server.

1. MongoDB has been published on Cloud. It might be required using VPN or you can simply switch to local server
by commenting line 11 and uncommenting line 12 of server.js file



#   Running
This nodeJS app can be ran through the following commands, depending on its purpose:
* Start App:  
```   
$ node app
```   
* Dev Mode:  
```
$ npm run dev
```

By running in Dev Mode, the server will refresh itself every time changes in code are saved  

For debugging purposes, and due to some APIs, this project has a self signed SSL certificate, 
therefore, it is MANDATORY type the following address https://localhost:3000

#   Accessing Dashboard
For CRUD operations, Dashboard can be accessed by entering navigating to https://localhost:3000 with the following credentials
* Username: miguelsolans
* Password: NotTellingYou  
  
User permissions will be created, eventually

#   Changelog

1. June the 7th, 2019
   - Sort usings in EJS and HTML files
   - Rich Text editing Library
2. June the 9th, 2019
   - File structure re-organized 
   - Rich Text support when adding new content (editing currently unsupported)
3. June the 13th, 2019
   - New Tags System
   - Fixed bug where Instafeed library couldn't be imported
  
#   To Do List
Some features to be implemented in the future  
  
| ID | Feature                              | Priority       | Status             |
| -- | ------------------------------------ | -------------- | ------------------ |
| 1  | Dashboard Notifications              | Medium         | To Develop         |
| 2  | Allow users to create own portfolios | High           | To Develop         |
| 3  | Portfolio Themes                     | Medium         | To Develop after 2 |
| 4* | Export to Curriculum Vitae           | Low            | To Develop         |
| 5  | Custom CSS stylesheet                | Medium         | Under Development  | 
  
  \* More fields need to be created on database  
 
#   Repository

I've put my sweat and tears into this project and I will continue doing so 
because I found this project quite empowering and fun.  

If you find it useful or interesting, please do not replicate this idea. 
Although, you're free to contribute on this [Github Repository](https://github.com/miguelsolans/personal-portfolio). Every bit is appreciated ;-) !  
    
#   Disclaimer
Copyright (c) 2019, Miguel Solans  
