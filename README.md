# Contribution Guidlines: 
### Goal of project: 
This app will allow teachers to document their students, the progress and goals of each individual, and gives teachers a way to share with the student or other teachers links to their assignments. 
#### What problem is being solved?
  - As a private lesson teacher, almost all of your students forget their assignemt notebook, the asssignment sheet music, or what the assignment was all together. 
  - There are times when teachers need to get a replacement(substitute) teacher to fill in for a week or two. When this occurs, you have to write out the previous assignments of the students in a separate email. 
  - Students often forget to read their assignments. This can allow us to email not only the student, but the parent as well as a reminder. 
  - As a tool for teachers, this can aid in remembering small notes for ourselves to remember certain things for each individual. 
  
  ### What Stack? What is where?
  - MERN stack, using sass, ejs, webpack, nodemon.
  - React files are in `./src`
  - EJS files are in `./views`
  - Sass in `./sass`
  - Views(UX/UI) in `./UI`
  
  ### Contribting: 
  1. Fork on github
  2. Clone your fork locally
    - `git clone git@github.com:<my-github-name>/Teacher_app.git`
  3. Install packages: `npm install`
  4. run your local mongodb shell:
       - on mac ` mongo --shell `
  5. open file and insert connection to local mongodb:
	` DEV_URI="mongodb://localhost:27017/teacher-app" `
  6. point your git to the original project for updates: `git remote add upstream https://github.com/willybeans/Teacher_app`
  7. Always be up to date: `git pull master`
  8. open two terminals and run the commands: 
       - webpack bundle: `npm run dev`
       - nodemon server: `npm start`
  ### Your first push request
  - Make clear your intention to work on a problem in the issue section by either: 
   1. Making an issue yourself and leaving a comment of your intent to complete the issue
   2. Comment on existing issue with your intention to fix it
  - All code should be compliant to the proper es-lint rules laid out in the `eslintrc.js` file
  - Use a branch name like fix/short-fix-description or feature/short-feature-description
  - Please keep all push requests concise
  - *Avoid* pushing more than one file at a time (avoid `git add .` unless you are certain it is not adding additional unrelated material)
  - Push to staging branch so your commit can be tested and confirmed
  #### Issues
  - Pick an unassigned issue that you think you can accomplish, add a comment that you are attempting to do it.
  - Feel free to propose issues that aren’t described! Get the okay that it is inline with the project goals before working.
  
  ### Project Liscence: 
  GPL

# The Nitty Gritty:

### [Web App UI example](./UI/web-app-view.png)
### [Mobile App UI example](./UI/mobile-app-view.png)

## Front end:

### Features:
1. Login / signup
2. Display current students
3. Display “add student” button, opens modal

### Each student object will have this data structure: 
  * Name
  * Instrument
* Goals
* Allows list of goals
* Date of Lesson Start
* Assignments
* list assignments in chronological order by date
* Each assignment will have an internal structure allowing a link for sheet music and a link for a recording of the music. Both are not required

*When clicking on students  name from list* -- switch view to :
	1)Display Data object’s properties listed under student
	2) allow Goals and assignments to be updated or deleted
		Allow a time stamp to be added
		Allow links for recordings a sheet music

### Backend:
- Restful design to allow all HTTP requests. GET, POST, PUT, DELETE
- Model using mongo/mongoose of: 

1. Teacher:
    * Name: String
    * Instrument: String
    * List of students: array of id’s
    * Sync Students to Teacher
2. Student:
	* Name: string
	* Teachers Name: string
	* Contact info: Phone # : int
		  * Email: string
	* Goals:
		1. Goal Number: int
		2. Start Date: string
		3. Status: boolean
		4. Info: string
  	* Assignments:
  		1. Todays Date: string
  		2. Title: string
  		3. Composer: string
  		4. URL-sheet music: string
  		5. URL-recording: string
  		6. Notes: string
##DB QUERIES:

The students are part of teachers as a subdoc
  - when we want to add a student
    - open the teachers document save a new student to the teacher.
to add an assignment to the student pass the assignment the teacher student object and it creates a ref in its assignments array. 
this way the student object knows it is linked to the correct assignments in the assignments collection.
so just to clarify im reading this right @CyberPutty everything is going thtrough the teacher?
ok so when you want to update the students assignments you create an assignment directly that way it goes into a collection and does not live with the teacher document. when you do that you need to pass the assignment object to the student reference array which basically adds a pointer to the parent that says I live in the assignments field and you can now use the populate method to request and filter out what you want to get back in the assignments field of your students.
the whole point of reference isn't necessarily to make the setup easier, it's more that you can use advanced methods to get back more specific data and so that it loads efficiently. it's more powerful basically and you can load what you need.

