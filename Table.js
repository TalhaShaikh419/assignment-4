var userinput = +prompt("Enter A Value")
if(userinput>=0)

for(i=1; i<11; i++){
    document.write(userinput+" " +"x"+" "+i+" "+" "+"="+" "+userinput*i ,"</br>")
}else

    for(i=1; i<11; i++){
    document.write(2+" " +"x"+" "+i+" "+" "+"="+" "+2*i ,"</br>")
}