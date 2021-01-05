# 6.1 HTML and CSS: Forms

## Contents

Let's practice a little creating a login screen? 🔥

1. Add fields for inputting email and password
2. Add a checkbox with the text ``Remember me``
3. Add a button with the text ``Enter``
4. Add placeholders to the input boxes
5. Add the attribute ``required`` to the input boxes
6. Add the attribute ``autocomplete=off`` to the e-mail field
7. Add the attribute ``autofocus`` to the e-mail field

## Exercises

- Create a file named ``form.html`` to build the form in it
- If you judge necessary, create CSS styles for your form according to your imagination. Put the at ``style.css``
- Create also a file named ``script.js`` to build the script

Let's create a CV register form based on the following specification:

1. Create a ``<fieldset>`` for the following personal data:

    - Name - Text

        - Limit of 40 characters
        - Required field

    - E-mail - text

        - limit of 50 characters
        - Required field

    - CPF - Text

        - Limit of 11 characters
        - Required field

    - Address - Text

        - Limit of 200 characters
        - Required field

    - City - Text

        - Limit of 28 characters
        - Required field

    - State - Text

        - All brazilian States
        - Use repetition loops via **_JavaScript_** for generation the  ``<option>``
        - Required field

    - Tipo - Radio button

        - House, Flat
        - Required field

2. Create another ``<fieldset>`` for the data of your previous job

    - Resume of your CV - TextArea

        - Limit of 1000 characters
        - Required field

    - Role - Text

        - Limit of 40 characters
        - Required field

    - Role description - Text

        - Limit of 500 characters
        - Required field

    - Beginning date - Text

        - Check the format ``dd/mm/aaa``
        - Day must be > 0 and  <= 31
        - Month must be > 0 and <= 12
        - Year can't be negative
        - If any of this coditions is invalid when sending the form, show an contextualized error message
        - Required field

3. Below the form, create a button which:

    - Calls a JS function and interrupt the automatic form's flow using [preventDefault()](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault)
    - Execute the validations that were asked along with the form filling
    - Build a ``<div>`` showing the filled data of the form

4. Create a button ``Clear`` that clears all fields and also the ``<div>`` with the CV
