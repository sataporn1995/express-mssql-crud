# express-mssql-crud
Create API using Express.js and SQL Server

## Step: 1 Create Database & Table
Create Database and Table by file "create-database.sql"

## Step: 2 Installation
$ npm install
<br>run service on http://localhost:3000/

## Step: 3 Requests
**C = Create** ==> [POST] /create-employee<br>
Body:<br>
{<br>
  "name": "TESTER",<br>
  "date": "2022-01-01"<br>
}<br>
<br>
**R = Read** ==> [GET] /all-employees<br>
<br>
**U = Update** ==> [POST] /edit-employee<br>
Body:<br>
{<br>
  "id": 1,<br>
  "name": "ABCD",<br>
  "date": "2022-01-02"<br>
}<br>
<br>
**D = Delete** ==> [GET] /remove-employee/<id>
