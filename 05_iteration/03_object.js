const myCoding =[
    {
        languageName: "JavaScript",
        languageFileName: ".js"
    },
    {
        languageName: "Java",
        languageFileName: ".java"
    },
    {
        languageName: "Python",
        languageFileName: ".py"
    },
    {
        languageName: "HTML",
        languageFileName: ".html"
    },
];

myCoding.forEach((item)=>{
    // console.log(item.languageName);
});
/*
languageName:-
JavaScript
Java
Python
HTML
*/

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
});
/*
languageFileName:-
    .js
    .java
    .py
    .html
*/