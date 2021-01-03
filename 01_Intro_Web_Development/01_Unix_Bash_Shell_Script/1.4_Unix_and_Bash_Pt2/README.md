## Part I - Input and Output commands

1. Navigate to the directory ```unix_test```
2. Create a new text file using the terminal named ```skills2.txt``` and add the values ```Internet```, ```Unix``` and ```Bash```, one in each line
3. Add 5 more items to your skills list and print the sorted list on terminal screen
4. Count how many lines the file ```skills2.txt``` has
5. Create a new file named ```top_skills.txt``` using ```skills2.txt```, containing the 3 first skills in alphabetic order
6. Create a new file named ```phrases2.txt``` using the terminal and add some phrases of your choice
7. Count the numbers of lines that contain of letters ```br```
8. Count the number ao lines that doesn't
9. Add two names of countries in the end of the file ```phrases2.txt```
10. Create a new file named ```bunch_of_things.txt``` with the content of the files ```phrases2.txt``` and ```countries.txt```
11. Sort the file ```bunch_of_things.txt```

## Part II - Permissions

1. Navigate to the directory ```unix_tests```
2. Run the command ```ls -l``` and check which are the files permissions
3. Change the permission of the file ```bunch_of_things.txt``` in order to everyone to have reading and writing acess, then check if it worked running ```ls -l```
4. Remove the writing permission of the file ```bunch_of_things.txt``` for all users, then check if it worked running ```ls -l```
5. Return the default permissions of the file ```bunch_of_things.txt``` using the command ```chmod 644 bunch_of_things.txt```

## Part III - Processes and Jobs

1. List all processes
2. Now use the command ```sleep 30 &```
3. Use the processes list to find the PId of the process which is executing the command ```sleep 30``` and kill its execution
4. Exercute again the command ```sleep 30```, but now without &. Then, make it keep running on background
5. Create a process on background the runs the command ```sleep``` for 300 seconds
6. Create 2 more processes the runs the command ```sleep``` for 200 e 100 seconds, respectively
7. check the only the process ```sleep 300``` is runnins with the command ```jobs```. Suspend its execution.
8. Return the execution of the process ```sleep 100``` on background with the command ```bg```
9. Kill the execution of all processes
