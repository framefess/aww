@echo off 
set url=https://www.awmine.com/awhelper http://localhost:6336/
set /p number="Enter the number of screens you want to open: "
for /l %%i in (1, 1, %number%) do (
  start chrome %url% --profile-directory="Profile %%i" --new-window
)