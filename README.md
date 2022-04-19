# Recipe App! Find your recipe today!

![alt text](/assets/project2-img1.png)
This is the second project from my Software Engineering Immersive course and also the first pair coding project, this was a front end design project highlighting the use of React, Express and JSX.

# Deployment 
The App is available here -> [RecipeApp!](https://bit.ly/3DiwCNB) 

# Getting started

1. Access the source code via the ‘Clone or download’ button 
2. Run Yarn in Terminal. 
3. Run Yarn start, it should automatically run in your chosen browser. 

# Objective & Language Used 

To create an App using an external API source and design a website with React and JSX. 

# Brief
Choose an external API Source and use React and Express to request and pull the data required for the website.
Creative freedom to design the App was given. 
Timeframe: 2 days 

# Process 
As the project was only a 2 day project, we did not have plenty of time to discuss and plan what we wanted, we had to keep the design to something realistically plausible in 2 days. 

1. Planning - Design, MVP, API Source & Features
We decided on a food related external API source as we found a user friendly and good amount of information stored in the API. 

We planned out our website on Sigma and had a rough design. 

![alt text](/assets/project2-img2.png)

2. Coding Back End - using Express to Request the data 
We needed to be able to selectively pull only the recipe we needed from the API thus we needed to code in JavaScript a request that filters through the input text inside the search bar which is done via the handleSearch function. 

![alt text](/assets/project2-img3.png)

3. Coding CSS Front End - CSS 
We used React CSS Framework to help us out with the layout of the website as it has a lot of pre-built components that will help us out to save time. 
We went with a clean user friendly layout, simple images and their names to highlight what the recipe is. 

![alt text](/assets/project2-img4.png)

4. Debugging/Error Handling. 
On the final day, we decided to focus on error handling and adding the loading spinner, both of us each trying to break the website in any way that we can in order to fix it and add the necessary boundaries in the code. 
One such error was writing numbers in the search bar which initially broke and crashed the website, thus we had to ensure that the text in the search bar was limited to only strings and created a string filter in the search. 

#  Featured Code 
I wanted to highlight a piece of code that we worked on which was to enable the user to use the search function along with the filter function, this took a lot of work out as previously it only worked with one or the other. 

![alt text](/assets/project2-img5.png)

This enabled our sumach to first filter through the filtered choice by running the catergoryFilter() function first which is then used inside the searchFilter() function afterwards. 

It took us a while to figure out but once we got the code working it was very satisfying and a highlight of one of the functionality of our website. 

# Completed task
1. Challenges 
The particular challenge was coding a search function to only request from the API the data that was required. 
Enabling the category filter and search filter to work in tandem to provide a dynamic feel to the website. 

2. Known error 
There is a lack of full error handling for the website, if you type a number in the search function it will loop as a permanent loading screen instead of “item not found”.

#Wins
1. I was extremely pleased with how the website turned out. It had a semi professional and clean fill.  
2. Being able to get the functionality of the search function along with the filter function was a challenge and a big win once we managed to get it working. 

# Key Learning 
1. Documentation Reading - This was the first time handling documentations and it was a good experience to use a framework and the multitude of pre-built items available. 
2. React - This project helped me understand the use and limitation of certain frameworks. It also highlighted how certain frameworks are more user friendly than others. 
3. Express - This was the first time using any API and the functionality of it for websites in general, this let me know that there are plenty of API sources online to be used. 
4. JSX - This was a good experience writing HTML and JavaScript in the same document, it enabled an ease of use for editing and planning functionality.   

# Future Aims 
1. Improvements & Features - I would like to go back and improve upon my code by adding some features that was originally planned such as: 
- Error handling.
- Dish of the Day to remain in the main page of the website (Local Storage).


