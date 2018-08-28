[Web App UI example](teacher-app-view.png)

Teaching app

Allow teachers to document their students progress and goals. Gives teachers a way to share with the student links to related music and recordings of recently received assignments. 

## Front end:

## Features:
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

## Backend:
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
		Email: string
	* Goals : string
		1. Goal Number
		2. Start Date
		3. Status
		4. Info
- Todays date maybe? date of starting lessons: string?
- Assignments : string
- list assignments in chronological order by date

	Teacher
Student
Info
Instrument (array of string)?
Assignment
Assignment Number
Instrument
Start Date
Target Date
Finish Date
Status
Info
Student
Instrument
Assignment
