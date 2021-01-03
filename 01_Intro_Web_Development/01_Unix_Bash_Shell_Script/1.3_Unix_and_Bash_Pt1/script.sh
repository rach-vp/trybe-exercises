# !/bin/bash

# # # # #
# 1. Using terminal, apply the directory creation command that you've learned: create a directory named ```unix_texts``` and navigate to it.
# # # # #

mkdir unix_tests
cd unix_tests

# # # # #
# 2. Create a text file named ```trybe.txt```
# # # # #

touch trybe.txt

# # # # #
# 3. Create a copy of the text file ```trybe.txt``` named ```trybe_backup.txt```
# # # # #

cp trybe.txt trybe_backup.txt

# # # # #
# 4. Rename the file ```trybe.txt```
# # # # #

mv trybe.txt other.txt

# # # # #
# 5. Inside ```unix_tests```, create a new directory named ```backup```
# # # # #

mkdir backup

# # # # #
# 6. Move the file ```trybe_backup.txt``` to the directory ```backup```
# # # # #

mv trybe_backup.txt backup

# # # # #
# 7. Inside ```unix_tests```, create a new directory named ```backup2```
# # # # #

mkdir backup2

# # # # #
# 8. Move the file ```trybe_backup.txt``` from directory ```backup``` to directory ```backup2```
# # # # #

mv backup/trybe_backup.txt backup2

# # # # #
# 9. Remove the directory named ```backup```
# # # # #

rmdir backup

# # # # #
# 10. Rename the directory ```backup2``` to ```backup```
# # # # #

mv backup2 backup

# # # # #
# 11. Check the complete path of the actual directory and list all files inside of it
# # # # #

pwd
ls -l

# # # # #
# 12. Remove the directory ```backup```
# # # # #

rm -rf backup

# # # # #
# 13. Clear the terminal screen
# # # # #

clear

# # # # #
# 14. Show on screen the first 5 lines of the file ```skills.txt```
# # # # #

head -n 5 skills.txt

# # # # #
# 15. Show on screen the last 4 lines of the file ```skills.txt```
# # # # #

tail -n 4 skills.txt

# # # # #
# 16. Delete all ```.txt``` files
# # # # #

rm *.txt

## Part II - Manipulation and Search

# # # # #
# 1. In directory ```unix_tests```, download a file with all country names using the command ```curl```

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 2. Show all the file ```countries.txt``` content on screen
# # # # #

cat countries.txt

# # # # #
# 3. Show the file ```countries.txt``` content, page by page, untill find ```Zambia```
# # # # #

less countries.txt

# # # # #
# 4. Show again the file ```countries.txt``` content page by page, but now use asome command to look for ```Zambia```
# # # # #

# # # # #
# 5. Search for ```Brazil``` in ```countries.txt```
# # # # #

grep Brazil countries.txt

# # # # #
# 6. Search again for ```brazil```, but now using lower case
# # # # #

grep -i brasil countries.txt

# # # # #
# 7. Search for the files that don't contain the word ```fox```
# # # # #

grep -v fox phrases.txt

# # # # #
# 8. Count the number of words in the file ```phrases.txt```
# # # # #

wc -w phrases.txt

# # # # #
# 9. Count the number of lines of the file ```phrases.txt```
# # # # #

wc -l phrases.txt

# # # # #
# 10. Create the files ```empty.tbt``` and ```empty.pdf```
# # # # #

touch empty.tbt
touch empty.pdf

# # # # #
# 11. List all files from the directory ```unix_tests```
# # # # #

ls -l

# # # # #
# 12. List all files from the directory that ends with ```txt```
# # # # #

ls -l *txt

# # # # #
# 13. List all files from the directory that end with ```tbt``` or ```txt```
# # # # #

ls -l *t?t

# # # # #
# 14. Access the manual of the command ```ls```
# # # # #

man ls
