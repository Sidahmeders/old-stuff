#! /usr/bin/bash

# #* ECHO COMMAND
# echo hi king ragnar

# #* VARIABLE 
# #* uppercase by convention
# #* letters, numbers, underscores
# NAME="Brad"
# echo "My name is $NAME"

read -p "enter your name: " USERNAME
echo "Hello $USERNAME, nice to meet you"

# #* SIMPLE IF STATMENT
# if [ "$USERNAME" == "ichigo" ]
# then 
#    echo "wellcome back KORUSAKI Ichigo"
# fi

# #* SIMPLE IF ELSE STATMENT
# if [ "$USERNAME" == "ichigo" ]
# then 
#    echo "wellcome back KORUSAKI Ichigo"
# else 
#    echo "go away aizen you are ashame"
# fi

# #* SIMPLE ELSE_IF (elif) STATMENT
# if [ "$USERNAME" == "ichigo" ]
# then 
#    echo "wellcome back KORUSAKI Ichigo"
# elif [ "$USERNAME" == "zaraki" ]
# then
#    echo "Hail to zaraki kimpachi"
# else 
#    echo "go away aizen you are ashame"
# fi

#* CREATE A FOLDER AND WRITE TO A FILE
mkdir hello
touch "hello/world.txt"
echo "hello ozumaki man of the world" >> "hello/world.txt"
echo "Created hello/wold.txt file"

