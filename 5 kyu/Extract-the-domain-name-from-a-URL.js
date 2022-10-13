/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
*/

//Parameters: given a url (type of string), will the url be empty?, 
//Return: domain name of url (type of string), what should I return if url is empty?

/*Examples:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
*/

/*PSUEDOCODE
- Search the string for a "/" or a '.'
- Replace a 'https://' , 'http://' or a 'www.' with an empty characterr '' essentially deleting it
- Then I can split my string using the space '.' as the identifier to split on
- Split returns an array. The first element in the array should be the domain name since the '.' comes after the domain name
- Return the first element of the array
*/

function domainName(url){
    //if url given is empty, then return empty string
   if (url.length === 0) {
     return " ";
   }
 
   return url.replace('https://', '').replace('http://' , '').replace('www.', '').split('.')[0] 
   
 }