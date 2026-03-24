# Overview
This example shows how a form is created using PHP and how to read the contents of the form by using the built-in ****$_POST**** array.

## Simple Form
The form is declared by adding a form tag. Inside this form tag each input control is declared separately. In this case a single text input.

The link in the form is important since it defines to which page the result is sent. In this case the result is sent to the same page that contains the form i.e. IntroExample7code.php

## Print of Post
As can be seen in row 12 the results of the returned page (which is returned as an array) can be shown using the print_r function. The $_POST array is updated automatically with the content of the previous web page and it can be used as any other array. 

**Please test the application by writing text into the input in the preview pane and pressing the enter key**