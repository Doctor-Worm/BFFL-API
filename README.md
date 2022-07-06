# BFFL-API

## Goal
- To build an API backend for a social media network that uses a NoSQL database so that the website can handle large amounts of unstructured data.

___

<br>

## Application Details
- This is the backend for a Social Media application using Mongoose models which are synced to the MongoDB database
- The routes that have been built for the User model are:
    - GET all Users, GET User by Id, PUT to update User by Id, POST to create a User, & DELETE a User by Id
- User model has a virtually created Friends List that has:
    - POST to add friend to the list array, & DELETE friend from the friend array
- Routes for the Thought model are:
    - GET all Thoughts, GET Thought by Id, PUT to update Thought by Id, POST to create a Thought, & DELETE a Thought by Id
- Thought model has subdocument of Reactions that has:
    - POST to add Reaction to a Thought by Id, & DELETE a Reaction from a Thought by Id

<br>

## Challenges Faced
- Working with the virtually created models to update and delete provided challenges in the Mongoose syntax. Especially with with which exact parameters to pass through when referencing other models.
- Thinking through how to exactly organize this projects through different directories also took a few changes to make sure it made the most sense.

<br>

## *Links to GitHub repository & a walkthrough video:*

- **[Link to the GitHub Repository](https://github.com/Doctor-Worm/BFFL-API)**

- **[Walkthrough Video](https://drive.google.com/file/d/11VOFpXKvUaoy_BrYLAJU_gk9C2FZProD/view)**