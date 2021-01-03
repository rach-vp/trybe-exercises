## Part I - Input and Output commands

# # # # #
# 1. Navigate to the directory ```unix_test```
# # # # #

cd ..
cd 1.3_Unix_and_Bash_Pt1/unix_tests/

# # # # #
# 2. Create a new text file using the terminal named ```skills2.txt``` and add the values ```Internet```, ```Unix``` and ```Bash```, one in each line
# # # # #

touch skills2.txt
echo "Internet" >> skills2.txt
echo "Unix" >> skills2.txt
echo "Bash" >> skills2.txt

# # # # #
# 3. Add 5 more items to your skills list and print the sorted list on terminal screen
# # # # #

echo "React" >> skills2.txt
echo "SQL" >> skills2.txt
echo "JavaScript" >> skills2.txt
echo "Testes" >> skills2.txt
echo "Python" >> skills2.txt
sort < skills2.txt

# # # # #
# 4. Count how many lines the file ```skills2.txt``` has
# # # # #

cat skills2.txt | wc -l

# # # # #
# 5. Create a new file named ```top_skills.txt``` using ```skills2.txt```, containing the 3 first skills in alphabetic order
# # # # #

sort < skills2.txt | head -n 3 > top_skills.txt

# # # # #
# 6. Create a new file named ```phrases2.txt``` using the terminal and add some phrases of your choice
# # # # #

touch phrases2.txt
echo "Amo demais meus bichos" > phrases2.txt
echo "Quero comer chocolate" >> phrases2.txt
echo "Saudades do mar" >> phrases2.txt

# # # # #
# 7. Count the numbers of lines that contain of letters ```br```
# # # # #

grep br phrases2.txt | wc -l

# # # # #
# 8. Count the number ao lines that doesn't
# # # # #

grep -v br phrases2.txt | wc -l

# # # # #
# 9. Add two names of countries in the end of the file ```phrases2.txt```
# # # # #

echo "Nova Zelândia" >> phrases2.txt
echo "Maldivas" >> phrases2.txt

# # # # #
# 10. Create a new file named ```bunch_of_things.txt``` with the content of the files ```phrases2.txt``` and ```countries.txt```
# # # # #

cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# # # # #
# 11. Sort the file ```bunch_of_things.txt```
# # # # #

sort bunch_of_things.txt -o bunch_of_things.txt

## Part II - Permissions

# # # # # #
# 1. Navigate to the directory ```unix_tests```
# # # # #

# # # # #
# 2. Run the command ```ls -l``` and check which are the files permissions
# # # # #

ls -l

# # # # #
# 3. Change the permission of the file ```bunch_of_things.txt``` in order to everyone to have reading and writing acess, then check if it worked running ```ls -l```
# # # # #

chmod a+rw bunch_of_things.txt
ls -l

# # # # #
# 4. Remove the writing permission of the file ```bunch_of_things.txt``` for all users, then check if it worked running ```ls -l```
# # # # #

chmod a-w bunch_of_things.txt
ls -l

# # # # #
# 5. Return the default permissions of the file ```bunch_of_things.txt``` using the command ```chmod 644 bunch_of_things.txt```
# # # # #

chmod 644 bunch_of_things.txt
ls -l

## Part III - Processes and Jobs

# # # # # #
# 1. List all processes
# # # # #

ps

# # # # #
# 2. Now use the command ```sleep 30 &```
# # # # #

sleep 30 &

# # # # #
# 3. Use the processes list to find the PId of the process which is executing the command ```sleep 30``` and kill its execution
# # # # #

ps | grep sleep
kill 9181

# # # # #
# 4. Exercute again the command ```sleep 30```, but now without &. Then, make it keep running on background
# # # # #

sleep 30
bg

# # # # #
# 5. Create a process on background the runs the command ```sleep``` for 300 seconds
# # # # #

sleep 300 &

# # # # #
# 6. Create 2 more processes the runs the command ```sleep``` for 200 e 100 seconds, respectively
# # # # #

sleep 200
sleep 100

# # # # #
# 7. check the only the process ```sleep 300``` is runnins with the command ```jobs```. Suspend its execution.
# # # # #

jobs
fg %1
jobs

# # # # #
# 8. Return the execution of the process ```sleep 100``` on background with the command ```bg```
# # # # #

bg %3
jobs

# # # # #
# 9. Kill the execution of all processes
# # # # #

kill all sleep
