### [Web App UI example](web-app-view.png)
### [Mobile App UI example](mobile-app-view.png)

Allow teachers to document their students progress and goals. Gives teachers a way to share with the student links to related music and recordings of recently received assignments. 

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
