# 1.3 - Unix and Bash - Pt 1

## Exercises

### Part I - Creation of Files and Directories

**Tip:** You can use the command ``touch file-name.extension`` to create empty files

1. Using the terminal, apply the directory creation command that you've learned: create a directory named ``unix_texts`` and navigate to it.
2. Create a text file named ``trybe.txt``
3. Create a copy of the text file ``trybe.txt`` named ``trybe_backup.txt``
4. Rename the file ``trybe.txt``
5. Inside ``unix_tests``, create a new directory named ``backup``
6. Move the file ``trybe_backup.txt`` to the directory ``backup``
7. Inside ``unix_tests``, create a new directory named ``backup2``
8. Move the file ``trybe_backup.txt`` from directory ``backup`` to directory ``backup2``
9. Remove the directory named ``backup``
10. Rename the directory ``backup2`` to ``backup``
11. Check the complete path of the actual directory and list all files inside of it
12. Remove the directory ``backup``
13. Clear the terminal screen

    ```text
    **For exercises 14 and 15, create either manually or at the GUI of your system, a file text containing the list below named ``skils.txt``**

    Internet
    Unix
    Bash
    HTML
    CSS
    JavaScript
    React
    SQL
    ```

14. Show on screen the first 5 lines of the file ``skills.txt``
15. Show on screen the last 4 lines of the file ``skills.txt``
16. Delete all ``.txt`` files

### Part II - Manipulation and Search

1. In directory ``unix_tests``, download a file with all country names using the command ``curl``

    ```bash
    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
    ```

2. Show all the file ``countries.txt`` content on the screen
3. Show the file ``countries.txt`` content, page by page, until find ``Zambia``
4. Show again the file ``countries.txt`` content page by page, but now use some command to look for ``Zambia``
5. Search for ``Brazil`` in ``countries.txt``
6. Search again for ``brazil``, but now using lower case

    **For the next exercises, create a new text file named ``phrases.txt`` and add some phrases of your choice. No need to create the file using the terminal**

7. Search for the files that don't contain the word ``fox``
8. Count the number of words in the file ``phrases.txt``
9. Count the number of lines of the file ``skills.txt``
10. Create the files ``empty.tbt`` and ``empty.pdf``
11. List all files from the directory ``unix_tests``
12. List all files from the directory that ends with ``txt``
13. List all files from the directory that end with ``tbt`` or ``txt``
14. Access the manual of the command ``ls``
