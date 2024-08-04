let line=0;
function nextline(){
    document.getElementById("text").innerHTML=words[line];
    if(line==22)
        line=0;
    else
        line++;
    Dbutton()
}
function Dbutton(){
if(line!=0)
    document.getElementById("button").innerHTML="Click Me Again";
else if(line == 0)
    document.getElementById("button").innerHTML="Click Me";
}
const words=[
    "This is how I want to keep making you laugh.",
    "This is how I want to keep you happy.",
    "This is how I want to hold you in my arms",
    "Till the rest of my life.",
    "The seat beside you",
    "Is reeserved for me",
    "But which bus is it?",
    "Satragachi? B-garden?",
    "No. DN-47 then?",
    "Noooooooooooo.",
    "It's the bus called Life.", 
    "In every achievement of my",
    "I want you with me",
    "It won't be my or your achievement only",
    "It'll be our achievement",
    "Team Triple Inifinity's achievement.",
    "I want to experience everything",
    "WITH YOUUUUUUUUU BABY",
    "Tumi amay purno koro.",
    "Amar ardhangini.",
    "Amar better-half.",
    "I loveeeeeeeeee youuuuuuuuuuuu triple infinity",
    "🫂♾️♾️"
]