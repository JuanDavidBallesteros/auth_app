# Cybersecurity Project
by Juan David Ballesteros and Alejandra Diaz 

## Requirements
* Docker
* Docker compose

## How to run
Run the command
```
docker-compose up
```
...and the service will be running on port 3000.

## Stages of construction
1. Define the system and its sections. It was determined that it would consist of a frontend, a backend and a database.
2. Create the docker-compose that allows to run all the services at the same time, synchronizing them.
3. Analyze which would be a coherent flow that an user would follow while using the app. With that in mind, build the frontend and the backend, and connect them.
4. Create the database and connect it with the rest of the project.

## Challenges
#### Creating an user and an administrator
This was solved by making the first logged person the administrator, while the next one will all be normal users.


#### Graphic interface
* In which screen shall the program show the list?
* How is the program going to display the posibility of changing the password?
* Making the pictures well aligned and organized.
* We tried to use an interactive and virtualized list, but its implementation was too difficult. We ended up using a more traditional list, but its downside it's that it is not optimal cause it uploads all the data like an array. This could be solved in future versions by implementing pagination.


#### Libraries
We tried to implement Axio's library but, because of the dependencies management and updates the library didn't work well, so we decided to stay with fetch to make queries from the frontend to the backend.


#### Asynchronous tasks
There was a time when the hashing function was being called synchronously, but the hashing returned the promise and not the result (it was a parenthesis error).
Later it was decided to separate the code more and thus the tasks could be more easily identified and to be able to synchronize the methods and make the hashing function so that it doesn't return the promise, and to be able to save the password with hash and salt in the database.


#### Updates
Another challenge was to integrate the update cases, seeking to reduce the amount of code that was written. For this, we send a new parameter within the update function, which allows identifying if only the password is being updated and doing the hash function over the new password.


#### URLs
This challenge consisted in identifying the URLs that are within the docker-compose to make them able to communicather with other services.


## Conclusions
We can appreciate the CIA triad of cybersecurity throughout the project. Confidentiality corresponds with the hashing of the passwords, while integrity is an inherent characteristic that the database implements, and is considered while saving and retrieving data from it. Finally, availabity is showm through the list of users that can be displayed at any moment, and through the guarantee that the backend services can always be accessed and the data can always be queried from the database.


