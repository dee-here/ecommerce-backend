# E-Commerce Back End
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  


## Description 
[E-Commerce Back End Demo video](https://drive.google.com/file/d/1VZWF3TBt8YOwwsJd_uboYPZo8_4_pF0f/view)

This project was to create the Back end for an e-commerce site by modifying starter code. This involved configuring a working Express.js API to use Sequelize to interact with a MySQL database.


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |-------------| 
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| node.js    | [https://nodejs.org/en](https://nodejs.org/en) | 
| mysql2    | [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2) | 
| Express.js    | [https://expressjs.com/](https://expressjs.com/) | 
| Sequelize    | [https://sequelize.org/](https://sequelize.org/) | 
| Git | [https://git-scm.com/](https://git-scm.com/)     |   
 


## Installation 
In a terminal navigate to the root folder of this project.
Rename the .env.example file to .env and add your database credentials there.

Run the following commands to intialise, seed and run this application.

Run these commands at the root of the project folder.
To run the schema file, use the source db/schema.sql command after logging into your mysql database.

```javascript
mysql -u root -p
source db/schema.sql
```
Exit the Mysql prompt and run the next commands at a terminal prompt at the root folder.

```javascript
npm install
npm run seed
npm run start
```

## Usage
Check API GET routes in Insomnia Core for categories, products, or tags.
Check API POST, PUT, and DELETE routes in Insomnia Core to create, update and delete Categories, tags and Products.

All the available routes are demonstarted in the attached video using Insomnia.

[E-Commerce Back End Demo video](https://drive.google.com/file/d/1VZWF3TBt8YOwwsJd_uboYPZo8_4_pF0f/view)


## Author Info

Deepak Sinha
* [Portfolio](https://dee-here.github.io/portfolio/)
* [Github](https://github.com/dee-here)
* [Questions ](mailto:deepakdilse@gmail.com)

## License
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  

[License Link](https://choosealicense.com/licenses/mit/)  
