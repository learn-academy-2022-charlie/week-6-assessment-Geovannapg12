# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: A foreign key is used to create associations.So if we forget to make that association we can create a migration 

  Researched answer: To be more specific the foreign key help define the relationship between tables by using the primary key to link them.  A foreign key will always go on the belongs_to side and it should have the modelname_id so the name of the key would be Cohort_id. To fix this we would need to do a migration to update the change. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: You need params for delete, update and show. To be able to change, view or delete  data from the database we need to be specific of which one we want and we do this by using their id. 
  
  
  Researched answer: It was a little hard to research this question, I wanted to have a better worded definition but according to the syllabus delete, update and show need params. 
  get '/resources/:id' => 'resources#show'
 put/patch '/resources/:id' => 'resources#update'
 delete '/resources/:id' => 'resources#destroy'


3. Name three rails generator commands. What is created by each?

  Your answer: rails g generate model that will generate a model will the name, rails generate rspec it will run the rspec in the app, rails generate migration, update the data base. 

  Researched answer: Rails g model will create a class that is used to represent data and interact with the database. Rails generate rspec, rspec is a ruby gem so when its generated we use it for testing. Rails migrate it updates or changes the applications database. 
  




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 
-- students#index, this will show all the students         

action: "POST"   location: /students  
students#create- it will create a new pice of data 

action: "GET"    location: /students/new
students#new-- it makes a new entry

action: "GET"    location: /students/2 
students#show- it will show the second data or the student with the id of 2 

action: "GET"    location: /students/2/edit  
students#edit-- it will edit that piece of data

action: "PATCH"  location: /students/2  
update- it will update the second piece data    

action: "DELETE" location: /students/2     
destroy-- it will destroy the second piece of data 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

-- As a user I can create rails app (follow the commands provided to you on the Terminal to create the app) 

--Use the commands to generate a model called List that will have a title for the to do list, it will have a description and priority, all will have datatypes of strings

-- As a user I can visit the rails page we just made localhost:3000

-- As a user I can see all the list on the rails app 


-- As a user I can create 3 items on the to do list- two of them marked with "yes" in priority

-- As a user I can see all of the items in the list with all their information 

-- As a user I can retrieve the 2nd instance of the to do list and change the title 

-- As a user  I can retrieve all the instances that have a "yes" in priority 

-- As a user I can rename, delete and create an item on the do to list  

-- As a user I can see my to do list on the rails app

