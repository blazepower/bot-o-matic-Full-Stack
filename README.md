# Rishik Hombal Implementation
The languages used in this project are Java with a Spring Boot Framework and Javascript/TypeScript with an Angular CLI Framework

## What you will need to download to run this project
First and foremost you need to install Java.  I used the latest version of Java 8 for this project, but I imagine it would work with any higher version as well.  I used Maven to install dependencies for the back end server.
You will need to download that as well.  For the front end, all you will need to download is the NPM package manager.  All of these are free.

## How to run the project
You will first need to install all the back end dependencies using the maven package manager and the front end dependencies with NPM.  You can do this any way you choose, but I use the command line commands: NPM install and with the built in maven package manager in Intellij.  If you have an advanced IDE, it will probably do both of these for you.
Next you will need to run the backend server.  The main runner class is 'src/main/java/rishik/red_ventures/application/botomat/BotOMatApplication.java'.  You will need to compile and run this file.
After that, you will need to run the front end server.  You should be able to do this with ng serve -o.  This will open a tab that is listening on localhost:4200.

## What my Project Does
The project consists of 4 pages: Dashboard (the landing page), Create Robot, Add Task, and Leaderboard.  The dashboard will hold the robots that you create, and you will be able to run them from this page.
To get started, you will first need to make a robot.  You can do this by going to the 'Create Robot' page.  You can then add a name and type of robot as well as assign tasks to it.  Note, per the project requirements, you cannot add more than 5 tasks at any one time.
This will take you back to the dashboard page.  On the dashboard page you will see the information that you just entered and there will also be a start button.  This button will start all the tasks for the selected robot.  Once the robot finishes, there will be a notification that pops up at the bottom of the screen. To add tasks to a robot that has finished all tasks, click on the name or type of the robot.
If you want additional tasks beyond what is provided by default, you can go to the 'Add Task' page.  You can enter the information for the task and submit to add it to the list of options when you create or edit a robot. The final page is the leaderboard.  This will store a list of robots sorted by the total number of jobs they have completed.

# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a rishik.red_ventures.application.botomat.Robot of the type the user chooses, e.g. Larry, Bipedal. 

Given the list of tasks below, your application should then assign the rishik.red_ventures.application.botomat.Robot a set of five tasks, all of which complete after a duration that we show in milliseconds. 



- Collect a name and robot type from user.
- Instantiate a rishik.red_ventures.application.botomat.Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on rishik.red_ventures.application.botomat.Robot to complete tasks from the provided list

## rishik.red_ventures.application.botomat.Robot
rishik.red_ventures.application.botomat.Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each rishik.red_ventures.application.botomat.Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>
