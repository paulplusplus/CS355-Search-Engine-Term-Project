import {hardcodes} from './hardcode.js';

var json;
var stateObj;

var x = document.getElementById("main-content");
//x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";

if(window.innerWidth < 800) {
    document.getElementById("sidemenu").style.display = "none";
} else document.getElementById('menu-button').style.display="none";


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

window.addEventListener('resize', () => {
    var menu = document.querySelector('#sidemenu');
    var button = document.querySelector('#menu-button');
    if (window.innerWidth < 1000){
        menu.style.display = "none";
        button.style.display = "block";
    } else{
        menu.style.display = "block";
        button.style.display = "none";
    } 
});

function displayResults(){
    clearContent();
    if(window.innerWidth < 800) openSideMenu();
    var downbox = createDownloadLink();
    x.appendChild(downbox);
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    var theval = document.getElementById("searchbar").value;
    if(theval === '') theval = "google";
    googleSearch(theval);
    
}

function createDownloadLink(){
    var dropdiv = document.createElement("div");
    var dropdown = document.createElement("select");
    var jsonopt = document.createElement("option");
    var csvopt = document.createElement("option");
    var xmlopt = document.createElement("option");
    //dropdown.setAttribute("id")
    jsonopt.appendChild( document.createTextNode("JSON") );
    csvopt.appendChild( document.createTextNode("CSV") );
    xmlopt.appendChild( document.createTextNode("XML") );

    var btn = document.createElement("BUTTON");
    btn.addEventListener("click", createDownload);
    btn.innerHTML = "Download";

    dropdown.setAttribute("id", "dropdown");
    //dropdown.addEventListener("change", createDownload);
    jsonopt.setAttribute("value", "JSON");
    csvopt.setAttribute("value", "CSV");
    xmlopt.setAttribute("value", "XML");
    dropdown.appendChild(jsonopt);
    dropdown.appendChild(csvopt);
    dropdown.appendChild(xmlopt);

    dropdiv.setAttribute("id", "dropdwn");
    dropdiv.appendChild(dropdown);
    dropdiv.appendChild(btn);
    return dropdiv;
}

function createWholeResult(obj){ //num
    var wholecont = document.createElement("div");
    //var downlist = createDownloadLink();
    
    
    var h = document.createElement("h2");
    var link = document.createElement("a");
    var par = document.createElement("p");
    //We'll be accessing an object now

    //var thetitle = document.createTextNode(resultTitle[num]);
    //var thelink = document.createTextNode(resultURL[num]);
    var thetitle = document.createTextNode(obj.title);
    var thelink = document.createTextNode(obj.url);
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "chkbx");
    check.checked = true;
    var thepara = document.createTextNode(obj.description);
    //var thepara = document.createTextNode(resultDescription[num]);

    h.appendChild(thetitle);
    link.appendChild(thelink);
    par.appendChild(thepara);

    wholecont.className = "resultbox";
    link.href = obj.url;
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
    stateObj = null;
    while(len > 0){
        x.removeChild(x.childNodes[0]);
        len = x.childNodes.length
    }
    x.style.backgroundColor = "transparent";
    //x.appendChild(document.getElementById("searchcontain"));
}

function showDev(){
    clearContent();
    if(window.innerWidth < 800) openSideMenu();
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
    if(window.innerWidth < 800) openSideMenu();
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
    if(window.innerWidth < 800) openSideMenu();
    var downbox = createDownloadLink();
    x.appendChild(downbox);
    x.style.backgroundColor = "rgba(40, 30, 30, 0.92)";
    stateObj = hardcodes;
    for(var i = 0; i < hardcodes.length; i++){
        //i = generateResult(resultTitle[i], resultURL[i], resultDescription[i]);
        //x.appendChild(createWholeResult(i));
        x.appendChild(createWholeResult(hardcodes[i]));
    }
    
}

function fileSearch(){
    //clearContent();
    
    var thefile = createInput();
    thefile.addEventListener("change", myFunc); 
    clearContent();
    if(window.innerWidth < 800) openSideMenu();
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
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyB1D0_pJOQ9lXSfpuKs_-DbKgGt3m4155M&cx=002032052943112485988:w0waoe8pxw8";
    var toadd = "&q=" + queryy;
    var total = url + toadd;
    var arr = [];
    fetch(total) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) // Transform the data into json
    .then(json => {
        for(var i = 0; i < json.items.length; i++){
            bootleg(json.items[i].title, json.items[i].link, json.items[i].snippet);
            arr.push({title: json.items[i].title, url: json.items[i].link, description: json.items[i].snippet});
        }
        stateObj = arr;
    });
}

/*function googleSearch(queryy){
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyB1D0_pJOQ9lXSfpuKs_-DbKgGt3m4155M&cx=017576662512468239146:omuauf_lfve";
    var toadd = "&q=" + queryy;
    var total = url + toadd;
    try{
        const result = fetch(total, {
            method: 'GET',
            mode: 'cors'
        });
        var r = result.json();
        for(var i = 0; i < r.items.length; i++){
            bootleg(r.items[i].title, r.items[i].link, r.items[i].snippet);
        }

    }catch(error){
        console.error(error);
    }
}*/

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
      lenfgth = json.Result.length;
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
    //var nums = x.childNodes.length;
    var type = document.getElementById("dropdown").value;
    console.log(type);
    var he = document.createElement('a');
    he.target = '_blank';
    if(type === 'JSON'){
       he.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stateObj));
       he.download = 'results.json';
       he.click();
    }
    if(type === 'XML'){
        var xlm = "<?xml version='1.0' encoding='UTF-8'?><results>";
        stateObj.forEach(element => {
            xlm += `<result><title>${element.title}</title><url>${element.url}</url><description>${element.description}</description></result>`
        });
        xlm += "</results>";
        he.href = "data:text/xml;charset=utf-8," + encodeURIComponent(xlm);
        he.download = 'results.xml';
        he.click();
    }
    if(type === 'CSV'){
        var csv = 'title,url,description\n';
        stateObj.forEach(element => {
            console.log(element);
            //csv += `${element.title.replace(/,/g, '')},${element.url.replace(/,/g, '')}, \"${element.description.replace(/,/g, '')}\"\n`;
            csv += `'${element.title}','${element.url}', '${element.description}'\n`;
            //+= `\"${array[i][index]}\"`;
            //csv += element.description.replace(/,/g, '');
            //csv += '\n';
        });
        he.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
        he.download = 'results.csv';
        he.click();
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
    if(window.innerWidth < 800) openSideMenu();
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
    if(window.innerWidth < 800) openSideMenu();
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
    if(window.innerWidth < 800) openSideMenu();
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
    if(window.innerWidth < 800) openSideMenu();
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

function customSearch(){
    clearContent();
    if(window.innerWidth < 800) openSideMenu();
}





