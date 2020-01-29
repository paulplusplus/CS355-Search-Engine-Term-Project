
var deskWidth = screen.width;
var deskHeight = screen.height;
var width = window.innerWidth;
var height = window.innerHeight;
var json;
console.warn(deskWidth);
console.warn(deskHeight);

console.log(width);
console.log(height);

if(width < 800) document.getElementById("sidemenu").style.display = "none";



var resultTitle = ['Hour of Code - Learn | Code.org', 'Learn Coding Today | NoviceDev',
'Learning coding on Khan Academy (article) | Khan Academy', 'Hour of Code | Coding Adventure | CodeMonkey',
'What Ive Learned from a year of coding – freeCodeCamp.org', 'What is Coding?Computer Science Degree Hub',
'How to get started coding? | Codechallenges.org', 'Looking for a challenge? | Codechallenges.org']

var resultURL = ["https://code.org/learn", "https://novicedev.com/learn", "https://www.khanacademy.org/computing/hour-of-code/hour-of-drawing-code/a/how-we-teach-coding-on-ka",
"https://www.playcodemonkey.com/blog/hour-of-code/coding-adventure/", "https://medium.freecodecamp.org/what-ive-learned-from-a-year-of-coding-bf39c5823e9b",
"https://www.computersciencedegreehub.com/faq/what-is-coding/", "https://www.codechallenges.org/get-started/",
"https://www.codechallenges.org/challenge-start-here/"]

var resultDescription = ["AlgoBot: Coding Action. Grades 2-8 | Language independent (can be taught in multiple languages). GameCode: Conditions in a video game. Grades 6+ | Blocks.",
"Interested in learning how to code? Start today - for free!", "Read and learn for free about the following article: Learning coding on Khan Academy.",
"Coding Adventure is an intuitive and fun coding game that teaches the basics of computer coding for kids. Kids as young as 7 years old can learn how to code.",
"I also developed an interest in websites and how they're built. But while I thought they were cool, I assumed coding was not for me. This year, I ...Local Results",
"Coding is basically the computer language used to develop apps, websites and software.", "New to coding? Start here with our free program!",
"Are you an experienced developer? Begin challenging yourself and developing your skills!"]



var x = document.getElementById("main-content");
//x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";

document.getElementById("submitsearch").addEventListener("click", displayResults);
document.getElementById("menu-button").addEventListener("click", openSideMenu);
document.getElementById("homeclick").addEventListener("click", clearContent);
document.getElementById("dev").addEventListener("click", showDev);
document.getElementById("contact").addEventListener("click", contactInfo);

document.getElementById("hardcode").addEventListener("click", hardCode);
document.getElementById("filesearch").addEventListener("click", fileSearch);
document.getElementById("googlesearch").addEventListener("click", displayResults);
document.getElementById("customsearch").addEventListener("click", customSearch);
document.getElementById("browserinfo").addEventListener("click", browserInfo);
document.getElementById("windowinfo").addEventListener("click", windowInfo);
document.getElementById("screeninfo").addEventListener("click", screenInfo);
document.getElementById("locationinfo").addEventListener("click", locationInfo);



function displayResults(){
    clearContent();
    var downbox = createDownloadLink();
    x.appendChild(downbox);
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var theval = document.getElementById("searchbar").value;
    googleSearch(theval);
    
}

function createDownloadLink(){
    var dropdown = document.createElement("select");
    var jsonopt = document.createElement("option");
    var csvopt = document.createElement("option");
    var xmlopt = document.createElement("option");
    //dropdown.setAttribute("id")
    jsonopt.appendChild( document.createTextNode("JSON") );
    csvopt.appendChild( document.createTextNode("CSV") );
    xmlopt.appendChild( document.createTextNode("XML") );

    dropdown.setAttribute("id", "dropdwn");
    dropdown.addEventListener("change", createDownload);
    jsonopt.setAttribute("value", "JSON");
    csvopt.setAttribute("value", "CSV");
    xmlopt.setAttribute("value", "XML");
    dropdown.appendChild(jsonopt);
    dropdown.appendChild(csvopt);
    dropdown.appendChild(xmlopt);
    return dropdown;
}

function createWholeResult(num){
    var wholecont = document.createElement("div");
    //var downlist = createDownloadLink();
    
    
    var h = document.createElement("h2");
    var link = document.createElement("a");
    var par = document.createElement("p");
    

    var thetitle = document.createTextNode(resultTitle[num]);
    var thelink = document.createTextNode(resultURL[num]);
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "chkbx");
    check.checked = true;
    var thepara = document.createTextNode(resultDescription[num]);

    h.appendChild(thetitle);
    link.appendChild(thelink);
    par.appendChild(thepara);

    wholecont.className = "resultbox";
    link.href = resultURL[num];
    wholecont.appendChild(check);
    //wholecont.appendChild(downlist);
    wholecont.appendChild(h);
    wholecont.appendChild(link);
    wholecont.appendChild(par);
    return wholecont;
}

function openSideMenu(){
    if(document.getElementById("sidemenu").style.display == "none") document.getElementById("sidemenu").style.display = "block";
    else document.getElementById("sidemenu").style.display = "none";
}

function clearContent(){
    var len = x.childNodes.length;
    while(len > 3){
        x.removeChild(x.childNodes[3]);
        len = x.childNodes.length
    }
    x.style.backgroundColor = "transparent";
    //x.appendChild(document.getElementById("searchcontain"));
}

function showDev(){
    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var h = document.createElement("p");
    var theDev = document.createTextNode("Paul Pluszczewicz, the main developer of this website, is an undergraduate at CUNY Queens College.");
    h.appendChild(theDev);
    wholecont.appendChild(h);
    x.appendChild(wholecont);
}

function contactInfo(){
    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var h = document.createElement("p");
    var d = document.createElement("a");
    var theDev = document.createTextNode("You may contact the developer at:");
    var theemail = document.createTextNode("p.pluszcz@gmail.com");
    h.appendChild(theDev);
    d.appendChild(theemail);
    wholecont.appendChild(h);
    wholecont.appendChild(d);
    x.appendChild(wholecont);
}

function hardCode(){
    clearContent();
    var downbox = createDownloadLink();
    x.appendChild(downbox);
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    
    for(var i = 0; i < 8; i++){
        //i = generateResult(resultTitle[i], resultURL[i], resultDescription[i]);
        x.appendChild(createWholeResult(i));
    }
}

function fileSearch(){
    //clearContent();
    var thefile = createInput();
    thefile.addEventListener("change", myFunc); 
    clearContent();
    
    var wholecont = document.createElement("div");
    var info = document.createElement("p");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var downbox = createDownloadLink();
    x.appendChild(downbox);
    wholecont.appendChild(thefile);
    x.appendChild(wholecont);
}

function googleSearch(queryy){
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyB1D0_pJOQ9lXSfpuKs_-DbKgGt3m4155M&cx=017576662512468239146:omuauf_lfve";
    var toadd = "&q=" + queryy;
    var total = url + toadd;
    var result;
    fetch(total) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) // Transform the data into json
    .then(json => {
        for(var i = 0; i < json.items.length; i++){
            bootleg(json.items[i].title, json.items[i].link, json.items[i].snippet);
        }
    });
}

function customSearch(){

}

function createInput() {
    var input = document.createElement('input');
    input.type = 'file';
    input.name = 'myfile';
    input.id = "inputfile";
    //input.accept = "*.json,*.csv,*.xml";
    //input.onchange = 'myFunc()';
    return input;
  }

  function myFunc(){
      var thisthat = document.getElementById("inputfile").files[0];
      //var infos = JSON.parse(thisthat);
        var fool = "'" + thisthat.name + "'";
      console.log(fool);
      name = fool;
      clearContent();
      x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
      
    var lenfgth;
    var reader = new FileReader();
    reader.addEventListener('load', (loadEvent) => {
    try {
      json = JSON.parse(loadEvent.target.result);
      console.log(json.Result.length);
    lenfgth = json.Result.length
      for(var i = 0; i < json.Result.length; i++){
        bootleg(json.Result[i].title, json.Result[i].url, json.Result[i].description);
    }

    } catch (error) {
      console.error(error);
    }
  });
  reader.readAsText(thisthat);
}
  
function bootleg(title, url, description){
    //var downbox = createDownloadLink();
    //x.appendChild(downbox);
    var wholecont = document.createElement("div");
    
    var h = document.createElement("h2");
    var link = document.createElement("a");
    var par = document.createElement("p");
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "chkbx");
    check.checked = true;

    var thetitle = document.createTextNode(title);
    var thelink = document.createTextNode(url);
    var thepara = document.createTextNode(description);

    h.appendChild(thetitle);
    link.appendChild(thelink);
    par.appendChild(thepara);

    wholecont.className = "resultbox";
    link.href = url;

    wholecont.appendChild(check);
    wholecont.appendChild(h);
    wholecont.appendChild(link);
    wholecont.appendChild(par);
    x.appendChild(wholecont);
}

function createDownload(){
    var nums = x.childNodes.length;
    var type = document.getElementById("dropdwn").value;
    nums -= 3;
    console.log(nums);
    console.log(type);
    
    for(var i = 0; i < nums; i++){
        var nextchild = x.childNodes[i];
        var nextchildren = nextchild.childNodes.length;
        
        var title = nextchild.childNodes[0];
        var url = nextchild.childNodes[1];
        var para = nextchild.childNodes[2];


        
    }
}
  
function browserInfo(){
    var acn = navigator.appCodeName;
    var an = navigator.appName;
    var av = navigator.appVersion;
    var ce = navigator.cookieEnabled;
    var l = navigator.language;
    var ol = navigator.onLine;
    var pl = navigator.platform;
    var ua = navigator.userAgent;

    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var acnacn = document.createElement("p");
    var anan = document.createElement("p");
    var avav = document.createElement("p");
    var cece = document.createElement("p");
    var ll = document.createElement("p");
    var olol = document.createElement("p");
    var plpl = document.createElement("p");
    var uaua = document.createElement("p");
    var theacn = document.createTextNode("The app code name is: " + acn);
    var thean = document.createTextNode("The app name is: " + an);
    var theav = document.createTextNode("The app version is: " + av);
    var thece = document.createTextNode("The cookie enabled is: " + ce);
    var thel = document.createTextNode("The language is: " + l);
    var theol = document.createTextNode("The online status is: " + ol);
    var thepl = document.createTextNode("The platform is: " + pl);
    var theua = document.createTextNode("The useragent is: " + ua);


    acnacn.appendChild(theacn);
    anan.appendChild(thean);
    avav.appendChild(theav);
    cece.appendChild(thece);
    ll.appendChild(thel);
    olol.appendChild(theol);
    plpl.appendChild(thepl);
    uaua.appendChild(theua);
    wholecont.appendChild(acnacn);
    wholecont.appendChild(anan);
    wholecont.appendChild(avav);
    wholecont.appendChild(cece);
    wholecont.appendChild(ll);
    wholecont.appendChild(olol);
    wholecont.appendChild(plpl);
    wholecont.appendChild(uaua);
    x.appendChild(wholecont);
}

function windowInfo(){
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var hh = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight; 

    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var h = document.createElement("p");
    var d = document.createElement("p");
    var thewidth = document.createTextNode("The width of your current window is: " + w);
    var theheight = document.createTextNode("The height of your current window is: " + hh);
    h.appendChild(thewidth);
    d.appendChild(theheight);
    wholecont.appendChild(h);
    wholecont.appendChild(d);
    x.appendChild(wholecont);
}

function screenInfo(){
    var w = screen.width;
    var h = screen.height;
    var aw = screen.availWidth;
    var ah = screen.availHeight;
    var cd = screen.colorDepth;
    var pd = screen.pixelDepth;

    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var ww = document.createElement("p");
    var hh = document.createElement("p");
    var awaw = document.createElement("p");
    var ahah = document.createElement("p");
    var cdcd = document.createElement("p");
    var pdpd = document.createElement("p");
    var thewidth = document.createTextNode("The width of your screen is: " + w);
    var theheight = document.createTextNode("The height of your screen is: " + h);
    var theawidth = document.createTextNode("The available width of your screen is: " + aw);
    var theaheight = document.createTextNode("The available height of your screen is: " + ah);
    var thecolordepth = document.createTextNode("The color depth of your screen is: " + cd);
    var thepixeldepth = document.createTextNode("The pixel depth of your screen is: " + pd);
    ww.appendChild(thewidth);
    hh.appendChild(theheight);
    awaw.appendChild(theawidth);
    ahah.appendChild(theaheight);
    cdcd.appendChild(thecolordepth);
    pdpd.appendChild(thepixeldepth);
    wholecont.appendChild(ww);
    wholecont.appendChild(hh);
    wholecont.appendChild(awaw);
    wholecont.appendChild(ahah);
    wholecont.appendChild(cdcd);
    wholecont.appendChild(pdpd);
    x.appendChild(wholecont);

}

function locationInfo(){
    var hr = window.location.href;
    var hn = window.location.hostname;
    var pn = window.location.pathname;
    var pc = window.location.protocol;

    clearContent();
    var wholecont = document.createElement("div");
    wholecont.className = "resultbox";
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var hrhr = document.createElement("p");
    var hnhn = document.createElement("p");
    var pnpn = document.createElement("p");
    var pcpc = document.createElement("p");
    var thehref = document.createTextNode("The href of this site is: " + hr);
    var thehn = document.createTextNode("The hostname of this site is: " + hn);
    var thepn = document.createTextNode("The pathname of this site: " + pn);
    var thepc = document.createTextNode("The protocol used is: " + pc);
    
    hrhr.appendChild(thehref);
    hnhn.appendChild(thehn);
    pnpn.appendChild(thepn);
    pcpc.appendChild(thepc);
    
    wholecont.appendChild(hrhr);
    wholecont.appendChild(hnhn);
    wholecont.appendChild(pnpn);
    wholecont.appendChild(pcpc);
    
    x.appendChild(wholecont);

}






