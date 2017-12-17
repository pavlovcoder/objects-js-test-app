//Activate all popovers over the document:
$(function(){
    $('[data-toggle="popover"]').popover()
})

//For dismissable all popovers, when you click second time:
$('.popover-dismiss').popover({
    trigger: 'focus'
})

//For activating all tooltips in the document:
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

document.getElementsByClassName("btn btn-warning basic")[0].addEventListener("click",function(){
    var outBlock = document.getElementsByClassName("form-control basic"),
    firstClass = {
        countryName : 'Country: Canada\n',
        capital : 'Capital: Ottawa\n',
        gov : 'Government: Federal parlamentary democracy under constitutional monarchy\n',
        pr_min : 'Prime Minister: Justin Trudeau\n',
        parlament : {
            legislature : 'Legislature: parlament\n',
            up_house : 'Upper House: senate\n',
            low_house : 'Low House: House of Commons\n'
        },
        population : 'Population: ' + 35151728 + '\n',
        GDP : 'GDP: $1.672 trillion\n'
    },
    cont;
    cont += firstClass.countryName;
    cont += firstClass.capital;
    cont += firstClass.gov;
    cont += firstClass.pr_min;
    cont += firstClass.parlament.legislature;
    cont += firstClass.population;
    cont += firstClass.GDP;
    outBlock[0].value = cont;
    console.log(outBlock[0].value);
})

document.getElementsByClassName("btn btn-warning basic reset")[0].addEventListener("click", function(){
    resetData('1')
});

function resetData(check){
    var doc = document.getElementsByClassName("form-control basic");
    if(check === '1'){
        doc[0].value = "";
    } else if(check === '2'){
        doc[1].value = "";
    }
}

document.getElementsByClassName("btn btn-warning basic")[2].addEventListener("click", createObj);

function createObj(){
    var outBlock = document.getElementsByClassName("form-control basic"),
    newObj = new Object(),
    cont;
    newObj.type_cars = 'Type of car: sedan\n';
    newObj.producer = "Producer: BMW\n";
    newObj.pr_year = "Year of production: 2018\n";
    newObj.fReview = 34;
    newObj.sReview = 110;
    newObj.summary = "All previews = " + (newObj.fReview*1 + newObj.sReview*1); 
    
    cont += newObj.type_cars;
    cont += newObj.producer;
    cont += newObj.pr_year;
    cont += newObj.summary;
    
    console.log(cont);
    outBlock[1].value = cont;
}

document.getElementsByClassName("btn btn-warning basic reset")[1].addEventListener("click",function(){
    resetData('2');
})

//Function for testing accessing object properties:
document.getElementsByClassName("btn btn-warning basic3X")[0].addEventListener("click",function(){
    propObj('0');
})
document.getElementsByClassName("btn btn-warning basic3X")[1].addEventListener("click",function(){
    propObj('1');
})
document.getElementsByClassName("btn btn-warning basic3X")[2].addEventListener("click",function(){
    propObj('2');
})

function propObj(idTag){
    var outBlock = document.getElementsByClassName("form-control basic"),
    cont, 
    New_year = {
        year : 2018,
        place_celebration : 'Seatle, USA\n',
        presents : 'smartphone and laptop\n'
    }
    if(idTag === '0'){
        cont += "You use a 1-method:\n";
        cont += New_year.year + "\n";
        cont += New_year.place_celebration;
        cont += New_year.presents;
    } else if(idTag === '1'){
        cont += "You use a 2-th method:\n";
        cont += New_year['year'] + "\n";
        cont += New_year['place_celebration'];
        cont += New_year['presents'];
    } else if(idTag === '2'){
        cont += "You use a 3-th method:\n";
        var v = ['year','place_celebration','presents'];
        cont += New_year[v[0]] + '\n';
        cont += New_year[v[1]];
        cont += New_year[v[2]];
    }
    outBlock[2].value = cont;
}

//Function for testing looping all elements of object:
document.getElementsByClassName("btn btn-warning basic")[4].addEventListener("click",function(){
    loopObject('check');
})
document.getElementsByClassName("btn btn-warning basic")[5].addEventListener("click",function(){
    loopObject('reset');
})

function loopObject(attr){
    var getInput = document.getElementsByTagName("input"),
    getSpan = document.getElementsByClassName("input-group-addon sp");
    if(attr === 'check'){
        var i=0,err = 0;
        while(i<getSpan.length){
            if(getInput[i].value === ""){
                getSpan[i].style.background = "#990000";
                getSpan[i].style.color = "#ffffff";
                err++;
            }
            console.log(getSpan[i]);
            i++;
        }
        if(err === 0){
            var numObject = {
                val1 : getInput[0].value,
                val2 : getInput[1].value,
                val3 : getInput[2].value
            }
            //Loop for increasing values of properties in the object:
            var x;
            for(x in numObject){
                numObject[x] += 345;
            }
            getInput[0].value = numObject.val1;
            getInput[1].value = numObject.val2;
            getInput[2].value = numObject.val3;
            console.log(getInput);
        }
    } else {
        for(var i=0;i<getInput.length;i++){
            getInput[i].value = "";
        }
    }
}

//Function for testing adding new property operator:
document.getElementsByClassName("btn btn-warning basic")[6].addEventListener("click",function(){
    addProp('add');
})
document.getElementsByClassName("btn btn-warning basic")[7].addEventListener("click",function(){
    addProp('delete');
})
document.getElementsByClassName("btn btn-warning basic")[8].addEventListener("click",function(){
    addProp('reset');
})

function addProp(check){
    var inProp = document.getElementsByTagName("input"),
    spColor = document.getElementsByClassName("input-group-addon add"),
    human = {
        surname : 'Surname: Richard',
        name : 'Name: Poetry',
        age : 'Age: 34 years'
    }, j;
    var 
    mLab = document.getElementById("basic-addon8"),
    mBlock = document.getElementsByClassName("tab-pane fade show"),
    rRow = document.getElementById("loop-replace"),
    nRow = document.createElement("div"),
    nCol = document.createElement("div"),
    nText = document.createElement("textarea");
    
    nRow.setAttribute("class","row");
    nCol.setAttribute("class","col-lg-12");
    nCol.setAttribute("id","main-block");
    nText.setAttribute("class","form-control basic");
    nText.setAttribute("id","outBlock10");
    nText.setAttribute("rows","10");
    nText.setAttribute("readonly","");
    
    nCol.appendChild(nText);
    nRow.appendChild(nCol);
    
    mLab.innerHTML = "Output";
    if(check === 'add'){
        if(inProp[3].value !== ""){
            //Add a new property:
            human.citizenship = 'Citizenship: ' +  inProp[3].value;
            
            for(j in human){
                nText.value += human[j] + '\n';
            }
            mBlock[0].replaceChild(nRow,rRow);
        } else {
            spColor[0].style.background = "#990000";
            spColor[0].style.color = "#ffffff";
        }
    } else if(check === 'reset') {
        inProp[3].value = "";
    } else if(check === 'delete'){
        delete human['age'];
        var getTextArea = document.getElementById("outBlock10"),
        getMBlock = document.getElementById("main-block"),
        nText1 = document.createElement("textarea");
        nText1.setAttribute("class","form-control basic");
        nText1.setAttribute("id","outBlock11");
        nText1.setAttribute("rows","10");
        nText1.setAttribute("readonly","");
        
        for(j in human){
            nText1.value += human[j] + '\n';
        }
        getMBlock.replaceChild(nText1,getTextArea);
    }
}

//Accessing methods in the object:
document.getElementsByClassName("btn btn-warning basic")[9].addEventListener("click",function(){
    methObj('add');
})
document.getElementsByClassName("btn btn-warning basic")[10].addEventListener("click",function(){
    methObj('use');
})
document.getElementsByClassName("btn btn-warning basic")[11].addEventListener("click",function(){
    methObj('reset');
})

function methObj(attr){
    var 
    outText = document.getElementById("outBlock12"),
    VR = {
        oc_rift : 'Manufacturer: Oculus VR\n',
        price : 'Price: $600\n',
        date : 'March 28, 2016.\n',
        
        psVR : 'Manufacturer: Sony\n',
        price1 : 'Price: $550\n',
        date1 : 'October 13, 2016\n',
        
        htcVive : 'Manufacturer: HTC\n',
        price2 : 'Price: $599.00\n',
        date2 : '5 April, 2016 year\n',
        
        outVR : function(){
            outText.value = this.oc_rift + this.price + this.date + this.psVR + this.price1 + this.date1 + this.htcVive + this.price2 + this.date2;
        }
    };
    switch(attr){
        case 'add':
            VR.outVR = function(){
                outText.value = this.oc_rift + this.price + this.date + this.psVR + this.price1 + this.date1 + this.htcVive + this.price2 + this.date2;
            }
            break;
        case 'use':
            VR.outVR();
            break;
        case 'reset':
            outText.value = '';
            break;
    }
}

//Function for adding a new planet as a new object with help the main contructor-function:
document.getElementsByClassName("btn btn-warning basic")[12].addEventListener("click",function(){
    constructorObj('create');
})
document.getElementsByClassName("btn btn-warning basic")[13].addEventListener("click",function(){
    constructorObj('delete');
})

var 
switcher = 'Venus',
extCont = document.getElementsByClassName("external-container");
function constructorObj(checkTag){
    if(checkTag !== 'delete'){
        //Creation stable container for planets:
        var 
        plCont,
        card = document.createElement("div"),
        img_div = document.createElement("img"),
        card_body = document.createElement("div"),
        h4 = document.createElement("h4"),
        p_info = document.createElement("p"),
        ul = document.createElement("ul"),
        li1 = document.createElement("li"),
        li2 = document.createElement("li"),
        li3 = document.createElement("li"),
        card_other = document.createElement("div"),
        more = document.createElement("a");
        //Setting attributes to different elements:
        card.setAttribute("class","card");
        img_div.setAttribute("class","card-img-top");
        card_body.setAttribute("class","card-body main");
        h4.setAttribute("class","card-title");
        p_info.setAttribute("class","card-text");
        ul.setAttribute("class","list-group list-group-flush");
        li1.setAttribute("class","list-group-item b1");
        li2.setAttribute("class","list-group-item b2");
        li3.setAttribute("class","list-group-item b3");
        card_other.setAttribute("class","card-body other");
        more.setAttribute("class","card-link");
        more.setAttribute("href","");
        //Appending all elements to each other:
        card.appendChild(img_div);
        card.appendChild(card_body);
        card.appendChild(ul);
        card.appendChild(card_other);
        card_body.appendChild(h4);
        card_body.appendChild(p_info);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        card_other.appendChild(more);
        switch(switcher){
            case 'Venus':
                plCont = new Planet(
                    'http://www.userlogos.org/files/backgrounds/Mafia_Penguin/Ven.jpg',
                    'Venus',
                    'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets.',
                    'Mean radius = 6051km',
                    'Surface gravity = 8.87m/s2',
                    'Orbital period = 224.70 days',
                    'https://en.wikipedia.org/wiki/Venus'
                    );
                    switcher = 'Earth';
                    console.log(plCont);
                    break;
                case 'Earth':
                    plCont = new Planet(
                        'https://orig00.deviantart.net/3e7b/f/2011/141/2/4/stock_ice_planet_3_with_clouds_by_rich35211-d37z2tg.png',
                        'Earth',
                        'Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago in the past.',
                        'Mean radius = 6371km',
                        'Surface gravity = 9.807m/s2',
                        'Orbital period = 365.701 days',
                        'https://en.wikipedia.org/wiki/Earth'
                        );
                        switcher = 'Neptune';
                        break;
                    case 'Neptune':
                        plCont = new Planet(
                            'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwMS80ODAvb3JpZ2luYWwvaF92ZW51c19zdHVkeV8wNjAyMjFfMDIuanBn',
                        'Neptune',
                        'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet and giant planet in the solar system.',
                        'Mean radius = 24662km',
                        'Surface gravity = 11.15m/s2',
                        'Orbital period = 60182 days',
                        'https://en.wikipedia.org/wiki/Neptune'
                            );
                            switcher = 'Mercury';
                            break;
                        case 'Mercury':
                            plCont = new Planet(
                                'lib/images/planets/mercury.jpg',
                                'Mercury',
                                'Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.',
                                'Mean radius = 2439.7km',
                                'Surface gravity = 3.7m/s2',
                                'Orbital period = 87.69 days',
                                'https://en.wikipedia.org/wiki/Mercury_(planet)'
                                );
                                switcher = 'Mars';
                                break;
                            case 'Mars':
                                plCont = new Planet(
                                    'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
                                    'Mars',
                                    'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".',
                                    'Mean radius = 3389.5km',
                                    'Surface gravity = 3.71m/s2',
                                    'Orbital period = 686.87 days',
                                    'https://en.wikipedia.org/wiki/Mars" class="card-link'
                                    );
                                    switcher = 'Saturn';
                                    break;
                                case 'Saturn':
                                    plCont = new Planet(
                                        'http://wanderingspace.net/wp-content/uploads/2009/04/saturn_four_moons_transit_hubble.jpg',
                                        'Saturn',
                                        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth.',
                                        'Mean radius = 58232km',
                                        'Surface gravity = 10.44m/s2',
                                        'Orbital period = 10759.22 days',
                                        'https://en.wikipedia.org/wiki/Saturn" class="card-link'
                                        );
                                        switcher = '';
                                        break;
        }
        img_div.setAttribute("src",plCont.image);
        h4.innerHTML = plCont.name;
        p_info.innerHTML = plCont.info;
        li1.innerHTML = plCont.mean_radius;
        li2.innerHTML = plCont.surf_gravity;
        li3.innerHTML = plCont.orb_period;
        more.setAttribute("href",plCont.more_link);
        more.innerHTML = 'More';
        //Append a new planet to the container:
        extCont[0].appendChild(card);
    } else {
        var clCont = document.getElementsByClassName("card"),
        plNum = clCont.length;
        for(var i=0;i<plNum;i++){
            console.log(plNum);
            extCont[0].removeChild(clCont[0]);
            console.log(clCont[i]);
        }
        switcher = 'Venus';
    }
}

//Constructor function for default creation any number of planets:
function Planet(visual,name,info,radius,gravity,orbit,more){
    this.image = visual;
    this.name = name;
    this.info = info;
    this.mean_radius = radius;
    this.surf_gravity = gravity;
    this.orb_period = orbit;
    this.more_link = more;
}

var instr = document.getElementsByClassName("in-win");
var createdObject;
//Display mini-tooltips after clicking buttons:
document.getElementsByClassName("btn btn-warning basic")[14].addEventListener("click",function(){
    instr[0].style.display = "none";
    instr[1].style.display = "block";
    //Adding a ner property to the existed prototype:
    Rocket.prototype.compIndex = null;
    Rocket.prototype.payload_to_GTO_Out = '';
    Rocket.prototype.cost_per_launch_Out = '';
});

//Function for adding and deleting buttons from menu:
document.getElementsByClassName("btn btn-warning basic")[15].addEventListener("click",function(){
    addRocketBtn();
    //Adding new methods to the prototype:
    Rocket.prototype.comparise = function(){
        this.compIndex = this.payload_to_GTO/this.cost_per_launch;
    };
    Rocket.prototype.changeOut = function(){
        this.payload_to_GTO_Out = this.payload_to_GTO + "kg";
        this.cost_per_launch_Out = "$" + this.cost_per_launch;
    }
    createdObject = new Rocket(
        'Minotaur I',
        'Orbital Sciences',
        'USA',
        30000000,
        '19.21m',
        '1.67m',
        '36.2t',
        '4 or 5',
        580
        );
    createdObject.comparise();
    createdObject.changeOut();
    console.log(createdObject.payload_to_GTO_Out);
    console.log(createdObject.cost_per_launch_Out);
});

function addRocketBtn(){
    var btnCont = document.getElementsByClassName("btn btn-warning basic"),
    btnMainCont = document.getElementsByClassName("btn-group rocket"),
    newBtn = document.createElement("button");
    
    newBtn.setAttribute("type","button");
    newBtn.setAttribute("class","btn btn-warning basic");
    newBtn.setAttribute("onclick","addLoader()");
    newBtn.textContent = "Create a new rocket-prototype";
    newBtn.style.width = "100%";
    instr[1].style.display = "none";
    btnMainCont[0].removeChild(btnCont[14]);
    btnMainCont[0].removeChild(btnCont[14]);
    btnMainCont[0].appendChild(newBtn);
    console.log(btnCont.length);
}

function addLoader(){
    var lCont = document.getElementsByClassName("loader-cont"),
    loader = document.getElementsByClassName("loader"),
    timeFunc,
    btnCont = document.getElementsByClassName("col-lg-12 rocket"),
    btnButton = document.getElementsByClassName("btn-group rocket"),
    successCont = document.getElementsByClassName("success-cont");
    lCont[0].style.display = "block";
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Loading new packages...";
    },1000);
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Developing general database...";
    },3500);
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Creating prototypes...";
    },7500);
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Adding new properties...";
    },10000);
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Adding new methods...";
    },12000);
    timeFunc = setTimeout(function(){
        loader[0].innerHTML = "Finishing creating a new rocket-protype...";
    },15000);
    timeFunc = setTimeout(function(){
        lCont[0].style.display = "none";
        btnCont[0].removeChild(btnButton[0]);
        successCont[0].style.display = "block";
        var newBtnCont = document.createElement("div"),
        newBtn = [],
        i=0;
        newBtn.length = 2;
        newBtnCont.setAttribute("class","btn-group rocket");
        newBtnCont.setAttribute("role","group");
        newBtnCont.setAttribute("aria-label","basic-buttons");
        while(i<newBtn.length){
            newBtn[i] = document.createElement("button");
            newBtn[i].setAttribute("type","button");
            newBtn[i].setAttribute("class","btn btn-warning basic");
            if(i == 0){
                newBtn[i].textContent = "Add a new rocket object";
            } else {
                newBtn[i].textContent = "Reset all data";
            }
            newBtnCont.appendChild(newBtn[i]);
            console.log("Array " + newBtn);
            i++;
        }
        btnCont[0].appendChild(newBtnCont);
        console.log(newBtnCont);
    },18000);
}

//Prototype of rocket-object:
function Rocket(Name,MAN,C,CPL,H,D,m,st,PGTO){
    this.name = Name;
    this.manufacturer = MAN;
    this.country = C;
    this.cost_per_launch = CPL;
    this.height = H;
    this.diameter = D;
    this.mass = m;
    this.stages = st;
    this.payload_to_GTO = PGTO;
}