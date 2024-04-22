let names= document.querySelectorAll('.input-box');
var invalidChars = /[^a-z A-Z]/;
Array.from(names).forEach(function(ele){
    ele.addEventListener("keydown",keyDisabler)
});

function keyDisabler(event){
    if ((event.key).match(invalidChars)) {
        event.preventDefault();    
    }
}

const verify = () => {
    names.forEach(function(name){
        if(! name.checkValidity()){
            document.getElementById("imgsrc").src = 'images/question.png';
            document.getElementById("result").innerHTML =  'Guess';
            document.getElementById("result").style.color='black';
        }
    });
    // mainFunction()
}


const mainFunction = (event) => {    
    event.preventDefault();
    let person1 = names[0].value.split(" ").join("").toLowerCase(); //to remove the white space
    let person2 = names[1].value.split(" ").join("").toLowerCase();
    console.log(person1)
    person1 = person1.split(" ").join("").toLowerCase(); //to remove the white space
    person2 = person2.split(" ").join("").toLowerCase();
    let abbreviation = {error:'Invalid',f:"Friends", l:"Love" , a:"Affection", m:"Marriage", e:"Enemy", s:"Sister"};
    let colors={error:'black', f:"rgb(255, 209, 3)", l:"rgb(201, 9, 9)", a:'rgb(204, 0, 255)', m:"rgb(253, 5, 108)", e:"orangered" , 
                s: "rgb(87, 19, 248)"};
    // let length1 = person1.length; let length2 = person2.length;
    if(person1 === person2){    
        document.getElementById("result").style.fontSize = 18;
        document.getElementById("result").style.color ='black';
        document.getElementById("result").innerHTML = "Name should not be same";
        document.getElementById("imgsrc").src = "images/question.png";
    }
    else{
        // let res= length1>=length2? removeMatchingLetters_1(person1,person2) : removeMatchingLetters_1(person2,person1);
        // console.log()
        let res = removeMatchingLetters_3(person1, person2);
        console.log(res);
        // console.log(abbreviation[res]);
        document.getElementById("result").style.fontSize = 40;
        document.getElementById("result").innerHTML =  abbreviation[res];
        document.getElementById("result").style.color = colors[res];
        document.getElementById("imgsrc").src= "images/" + abbreviation[res].toLowerCase() + ".png";
    }   
}


 function removeMatchingLetters_1(person1,person2){
    for(let i = 0; i < person1.length; i++){
        let matchingLetter = person2.indexOf(person1[i]); 
        if(matchingLetter > -1){
            person1 = person1.replace(person1[i], "");
            person2 = person2.replace(person2[matchingLetter], "");
            i--;
        }
    }
    // return flamesCalculation_3((person1+person2).length);
    if((person1+person2).length === 0 ){
        return "error";
    }
    return (person1 + person2).length;
}

function removeMatchingLetters_2(person1, person2){
    for(let i = 0; i < person1.length; i++){
        for(let j = 0; j < person2.length; j++){
            if(person1[i] === person2[j]){
                // console.log(person1[i] + " " + person2[j])
                person1 = person1.replace(person1[i], '');
                person2 = person2.replace(person2[j], '');
                // console.log(person1)
                i--;
                break;
            }
        }   
    }
    if((person1 + person2).length === 0){
        return "error";
    }

    // return flamesCalculation_3((person1 + person2).length)
    return (person1 + person2).length;
}


function removeMatchingLetters_3(person1 , person2){
    // let temp=person1;
    let length = (person1 + person2).length;
    person1 = person1.split("");
    let count = 0;
    person1.forEach (item => {if (person2.includes(item)){
        // console.log(person2. includes (item))
        person2 = person2.replace(item,'');
        count++ ;
    }});
    if(length - count * 2 === 0)
        return 'error';
    // return flamesCalculation_3 (length-count*2)
    return flamesCalculation_1(length - count * 2);    
}


function flamesCalculation_1(filteredWordLength){
    // let filteredWordLength = filteredWord.length;
    let flames ='flames';
    flamesLength = flames.length;
    while(flamesLength!=1){
        let targetLetter = filteredWordLength % flamesLength;       
        flames = targetLetter === 0 ? 
                    flames.substring(0, flamesLength-1) : 
                    flames = flames.substring(targetLetter,flamesLength) + flames.substring(0,targetLetter-1);
        flamesLength -= 1;
    }
    return flames;
}

function flamesCalculation_2 (filteredWordLength) {
    let flames = 'flames';
    let flamesLength = flames.length;
    let targetLetter = filteredWordLength;
    while(flamesLength > 1){
        let temp = "";
        while ( targetLetter > flamesLength){
            targetLetter = targetLetter - flamesLength;
        }
        for(let index = 0; index <= flamesLength; index++){
            if(index > targetLetter - 1){
                temp = flames.charAt(targetLetter - index + flamesLength) + temp; 
            }
            else if(index < targetLetter-1){
                temp = temp + flames.charAt(index);
            }
        }   
        flames = temp;
        flamesLength--;
        targetLetter = filteredWordLength;
    }
    return flames;
}
function flamesCalculation_3( filteredWordLength ){
    let flames = 'flames';
    let current_position = 0;
    let flamesLength = 6;
    // let tempLength = filteredWordLength;
    // let flamesLength = flames.length;
    while(flamesLength != 1){
        for (let index = 1; index <= filteredWordLength; index++ ){
            if(current_position < flamesLength){
                current_position++;
            }
            else{
                current_position = 1;
            }
        }
        flamesLength--;
        flames = flames.replace(flames.charAt(current_position - 1), "");
        current_position = current_position-1;
    }
    return flames;
}   

// const verification=(event)=>{
//     event.preventDefault()
//     if(names[0].value=='' || names[1].value==''){
//         console.log("proij");
//         names[0].classList.add()
//     }
// }
//flames function

// let start = Date.now();
// for(let element1 in person1){
//     for(let element2 in person2){
        
//         mainFunction(person1[element1] , person2[element2])
//     }
// }
// let timeTaken = Date.now() - start;
// console.log (timeTaken +"  :Time taken");
// console.log(start);

    // while(go){
    //     let current = 1;
    //     let replaced = 0;


        // if(tempLength > flames.length* ++i){
        //     flamesLength = flamesLength * i;
        //     console.log(flamesLength);  
        // }
        // else{
        //     console.log("End");
        //     target = tempLength - flamesLength;
        //     // flames = flames.replace(flames.charAt(tempLength - flamesLength -1), "")
        //     console.log(flames+ " flameslength" +flamesLength+"  jhf  "+tempLength);
        //     for (let i=0;i<flames.length;i++){
        //         console.log("pervious  "+i);
        //         // flames= flames.replace(flames.charAt(flames.indexOf(i)),"");
        //         if( current === target){
        //             flames = flames.replace(flames.charAt(flames.indexOf(i)),"");
        //             current = 0;
        //         }
        //         else if(current++ >target){
        //             i=0;
        //         }
        //         else{
        //             current++;
        //             console.log(current+ "  jn")
        //         }
        //         go = false;
        //         i = 0;
                // if(flames.length ===1){
                //     go = false;
                //     break;
                // }
                // if( current === flamesLength ){
                //     flames = flames.replace(flames.charAt(i),"");
                //     console.log("Fff "+ flames);
                // }
            
                // else if(current++ >flames.length){
                //     i=0;
                // }
                // else{
                //     current++;
                // }
            
        // if(tempLength < flamesLength){
        //     console.log(flamesLength+"  NEw");
        //     flames = flames.replace(flames.charAt(flamesLength - tempLength),"");
        //     flamesLength = flames.length;;
        
        //     if(flamesLength === 1){
        //         go = false;
        //     }
        // }
        // else {
        // console.log(flamesLength * ++i)
        // flamesLength = flamesLength * ++i;
        // console.log(i+" ewwrewrw")
        // }
        
        
    
//Testing
// let obj = {1: ["removeMatchingLetters_1", "flamesCalculation_1"], 2:["removeMatchingLetters_1", "flamesCalculation_2"] ,3:["removeMatchingLetters_1",     "flamesCalculation_3"], 4:["removeMatchingLetters_2","flamesCalculation_1"], 5:["removeMatchingLetters_2","flamesCalculation_2"], 6:["removeMatchingLetters_2","flamesCalculation_3"], 7:["removeMatchingLetters_3","flamesCalculation_1"], 8:["removeMatchingLetters_3","flamesCalculation_2"], 9:["removeMatchingLetters_3","flamesCalculation_3"]};
// let remove_functions = ["removeMatchingLetters_1" , "removeMatchingLetters_2", "removeMatchingLetters_3"];
// let flames_functions = ["flamesCalculation_1", "flamesCalculation_2", "flamesCalculation_3"];
// for(let remove_fn in remove_functions){
//     for(let calculate_fn in flames_functions){
//         let cnt = 0;
// let persons1 = ['yamini', 'padmavathi', 'uma mageshwari', 'monisha', 'mageshwari', 'sachin', 'rajarajan', 'dhani', 'dharun', 'ashwini', 'samundeshwari', 'soundarrajan', 'venkat', 'buna', 'subramani', 'hari priyan', 'hari', 'samu' , 'karthick', 'sakthi' , 'meena', 'baala', 'fire','cold', 'heat', 'hotter','yaaro', 'oosaisound', 'building', 'nail','windred', 'blue', 'purple', 'laptoplolipop', 'dresses', 'firewall','sunmoon', 'light', 'stars', 'planet', 'flight', 'spring', 'hive',' autumn', 'summer', 'galaxy', 'white', 'dark', 'chineese', 'fireword', 'fireeyes', 'mother', 'world', 'hello', 'program', 'finger', 'chips', 'theeran' , 'temple' , 'soul' ,'free', 'feel', 'ink', 'donkey', 'scale', 'filefool', 'wire', 'kitewallwhitehouse', 'gateway', 'fort', 'redfort', 'coolingfiling', 'dealingmeals', 'dinner', 'funtimemillets' ,'babiescutiest', 'bioloyg', 'magicalsemicolon', 'friends meetup farewell', 'bestofluckdontworry', 'watercanwatermelon','oragne', 'pomogranate', 'lovelyonelyl', 'sorryhundered' , 'tow hundered' , 'fourteenasorry', 'shobana', 'kayalpeacock','dust', 'mysterylightwhite', 'yellowfellow' , 'millo', 'campher', 'yuvasriuvarani', 'sindhubindhu', 'menna', 'malliga', 'human', 'silenceplease', 'alkLipa', 'zmnnzo', 'qpoiap', 'iqhweiu', 'lkmzlkjuh', 'asduygq', 'iuguefw', 'sauidguy', 'sakdhiu', 'dihqu', 'idguygqw', 'sagduy', 'wkeegu', 'dfhugw', 'wkjdbuy', 'ljriojo', 'tjriuhb', 'roihgiuhb', 'rougi', 'jgiugevd', 'sahiuhsuy', 'dlfgjiue', 'egjiuhiu', 'erfiuheiu', 'aoudhd', 'sdlkvhgtya', 'efuwytbckj', 'sdkbcgf', 'dbwugd', 'asudhuygd', 'wjksbduygw', 'sabhdagvj', 'sahsytdfg', 'assdigay', 'eoifgrkpot', 'sdfhuhegy' , 'fdijguie', 'dslhuyg' , 'fdhfiygv' , 'dfvbjydvguj', 'djsnfbsyud', 'lasjfiuhu', 'sdsdhcbus',' hdskfjd', 'sdofhgy', 'sddifgsuyt', 'sdoquweda', 'thanks', 'forbeing', 'partofout', 'dsuyguys', 'siudgyt', 'saldbytw', 'kjadgytf', 'jiudfgytg', 'kjaheduyg', 'dsjbdhsfc', 'sdfgwety', 'sadhv', 'rkthupo', 'asjbdufyt', 'dmvbytfdu', 'tyoijyuioj', 'asjxausyg', 'rkjghriut', 'juduyfyu', 'dfuvduy', 'gkbjig', 'hugtsy', 'fdoighiyf', 'boihiuh', 'sdfbshuyg', 'dfoivjfdiu', 'oidhfuys', 'dfuydfuy', 'sdidhstfyt', 'sduuysg' ,'sduihsuygfi', 'sdfhuyfdu', 'sdjhsuyg', 'sdfucbsduyg' , 'dsfgsyf', 'sdoifhuyd', 'sduifbuysd', 'dfhgsytdv', 'dsouguysg','dsjhfdss' , 'dsofhuysgd' ,'dsbhfis', 'sdkjhsy', 'dsiufdsguy', 'sdjfhuyd', 'sdkhius', 'dsofiwsu', 'sfidbsudyg', 'sdofhuyg', 'sifhuyge', 'ohuyegw', 'asjdbuyds', 'wejhguwe', 'esfguw', 'diofiwuh', 'sdhyj', 'sdfbduygw', 'sdbcdsyv', 'boomboom', 'sdjkhyhdsb', 'sdkjhiyd', 'sjcduyv', 'sdkjcbdsh', 'sdhgsdg','ahcuya', 'aoijaih', 'sdoifiud', 'sjfuwh', 'asmkjdsva', 'jshdy', 'saiugyg', 'soiju', 'huygduys', 'ajuhdabd', 'lighrstars', 'planeflight', 'springhive',' autumnsummer', 'galaxywhite', 'darkchineese', 'fireworfireeyes', 'motheorld', 'helloprogram', 'fingerchips', 'theerantemple' , 'soulfree', 'feelink', 'donkeyscale', 'filefoolwire', 'kitewallwhitehofddfdsuse', 'gatewasdsay', 'fgfgfbort', 'redsdcdfort', 'coolidscngfiling', 'dealifdgvngmeals', 'didsdnner', 'funsdcfhtimemillets' ,'bbthabiescutiest', 'biologbyg', 'magicalsemicolon', 'friends meetup farewell', 'bestofluckdontworry', 'watercanwatermelon','oraewdwgne', 'pomogradcsdnate', 'lovelyortbnelyl', 'sorryhundebtbtred' , 'towtb hunderehtbd' , 'fourteasdenasorry', 'shasdobana', 'kayalpsdcdeacock','dwdxust', 'mysterylidssdghtwhiteds', 'yellowfedcdllow', 'yawefwsmini', 'padsfdmavathi', 'umaght mageshwari', 'moniergsha', 'mageserfhwari', 'sacefchin', 'raeerfejarajan', 'dhanihynuj', 'dharunhn', 'ashwitrggni', 'sargttmundeshwari', 'sounefdedarrajan', 'vujjuenkat', 'bhtytuna', 'subramanyhyi', 'hariytng priyan', 'hhjnyari', 'samurergrt' , 'kartrbthick', 'safddfkthi' , 'mtbtreena', 'baalgfbfga', 'firtrgre','coltrtgd', 'hetrgbat', 'hotttrter','vyvaaro', 'oosnbaisound', 'vbrgvgfuilding', 'ngbafgfgil','windreerd', 'blgfue', 'purgfgfple', 'lfvfgaptoplolipop', 'drvfevesses', 'motherwfdde', 'wordfdsld', 'heewdesllo', 'progrewam', 'finewdcger', 'chidfdps', 'thsadeeran' , 'temasdple' , 'sosadsacdugl' ,'frvtrnhee', 'fetrvfel', 'inththnk', 'dorgvrtnkey', 'sctrbale', 'filweferdefool', 'wifdgtre', 'kitewallwhdfitehouse', 'gefrtgtateway', 'forbgyhjt', 'redfdscsort', 'coolingtrhyufvfiling', 'dealingmeadsfrtjls', 'dinnersdxer', 'funtimemilrfergtyeglets' ,'babiesthyjersfdcutiest', 'biolthytoyg', 'magicalgbfdcsemicolon', 'friendergts', ' meeturefrep' ,'refarewertgll', 'besertofluckdontworry', 'wredatercanwatermelon','orfgbfagne', 'pomogdfvdfranate', 'lovelyvrfeonelyl', 'sorryerhundered' , 'towfg hundered' , 'fourtgffgeenasorry', 'shoeewbana', 'kayagfbghlpeacock','dgfgfust', 'mysterylifdfghtwhite', 'yellowfeijillow' , 'moijpopillo', 'ednckjssd', 'sdhsiugus', 'ahuycfffff', 'oajohfiuw', 'pojqsds', 'dfvbuyg', 'duihiuh', 'soijdih', 'qhdiuywg', 'pooiuio', 'indiewfeeanflag' ,'counewesxtrydelight', 'passdfvgtyjucode', 'lovemjygfrarriage', 'happyfrgtliving', 'thinkingbeyondrtgdfnormal', 'gogfhbnjodluck',    'helpmeteefroosurvive', 'mornindsswqgevening', 'isalwayscfrhhard', 'kitkatchocojygfvclate', 'raewfferbbitrat', 'stargalgfbgfdsaxy', 'hiddeen', 'plewwuto', 'ring' , 'ewwesaturn', 'miraewdwsclevenus', 'biguwqsaranus', 'livingdfcesearth', 'hoewwtmercury', 'coferldpluto', 'firefoewx','broewwewser', 'chrewdwedomebrowser', 'battdsdserylow', 'charger', 'ewewusb', 'dwdsappleiphone', 'samsungcdsz','ewsdgalaxy', 'pubgvs','freefire', 'numberddefcsecimal', 'hoveryeds','ewfdspovery', 'michealjsdds','dsdsdsackson', 'visualcodeewds','ewedsdeditior', 'blackanddsx','ddsdswhite', 'jackandjill', 'mountdsdsain','dsdsdshill', 'sqauredssdxc' ,'eedbracket', 'msdidsdsvya', 'printewsds','ewsddewewcreen', 'insertewds', 'ewddelete', 'nottoreacteveews','decdrything', 'latestupdate','updatenow', 'releasenotdfe','ewefwes', 'myphoneew','ewdstillend', 'spaceforweew','eewweclose', 'saraswathima','ewwtriculation', 'iewewamsorry', 'dateewweandtime', 'filterewwe','ewweandgilter', 'killadiewew','weefullboys', 'myimag','ewweetotal', 'barbiegweew','eweewirl', 'careewtoo','ewewewnhungama', 'unifiedewew','eewmodulo', 'structewew','ewewuredquery', 'hypertweew','ewfewextmarkup', 'basewewe','ewewicjavacore', 'mattrbrt','uredlanguage', 'pipelinereer','rerwholes', 'entertenreer','vrreder', 'goalligree','rerhtweight', 'curlybrarvv', 'rercesover', 'ricewheerer','rereatagri', 'chaiterer','rereacoffee', 'charervr','vreritemss', 'paneermushrorere','rvrerom', 'gravymaer','rvrenchurian', 'maidabadreer','rverhealth', 'lexicogreer','rverraphy', 'jillerver','reerfillpill', 'joyarvre','reerlfirework', 'meenaksrere', 'reerhitemple', 'tanjurtrer','reemple', 'killrre', 'rreerpain', 'duwqqd','wqwwqstallergy', 'gillfishgwqdwq', 'wdqwqdold', 'underwater','ammazing', 'understandpwqdwqd','astunderstood', 'chennawq','isuperkings', 'webdevelowqwq','wdwqdpment', 'zohom' ,'wqultinational', 'prodqwwq', 'wducthealth', 'tataviwqnurutugal', 'internsrfhipkit', 'enterpleasedffdexit', 'makewweminkfree', 'icebirreeriyani', 'tamiltrewwfadional', 'noontrtrecanmakesnese', 'firefaweewllbill','boonwedwwhale', 'whatertosay', 'humanserfarealswaysblessing', 'buttheycanerftrealize', 'sosadabdscdoutthat', 'withouweeeeeeertrealizing', 'everythinggeererts'];
      
        
// let persons2 = ['indianflag' ,'countrydelight', 'passcode', 'lovemarriage', 'happyliving', 'thinkingbeyondnormal', 'goodluck',    'helpmetoosurvive', 'morningevening', 'isalwayshard', 'kitkatchocolate', 'rabbitrat', 'stargalaxy', 'hiddenpluto', 'ringsaturn', 'miraclevenus', 'biguranus', 'livingearth', 'hotmercury', 'coldpluto', 'firefoxbrowser', 'chromebrowser', 'batterylow', 'chargerusb', 'appleiphone', 'samsunggalaxy', 'pubgvsfreefire', 'numberdecimal', 'hoverypovery', 'michealjackson', 'visualcodeeditior', 'blackandwhite', 'jackandjill', 'mountainhill', 'sqaurebracket', 'msdivya', 'printscreen', 'insertdelete', 'nottoreacteverything', 'latestupdate','updatenow', 'releasenotes', 'myphonetillend', 'spaceforclose', 'saraswathimatriculation', 'iamsorry', 'dateandtime', 'filterandgilter', 'killadifullboys', 'myimagetotal', 'barbiegirl', 'cartoonhungama', 'unifiedmodulo', 'structuredquery', 'hypertextmarkup', 'basicjavacore', 'maturedlanguage', 'pipelinewholes', 'entertender', 'goallightweight', 'curlybracesover', 'ricewheatagri', 'chaiteacoffee', 'charitemss', 'paneermushroom', 'gravymanchurian', 'maidabadhealth', 'lexicography', 'jillfillpill', 'joyalfirework', 'meenakshitemple', 'tanjurtemple', 'killerpain', 'dustallergy', 'gillfishgold', 'underwaterammazing', 'understandpastunderstood', 'chennaisuperkings', 'webdevelopment', 'zohomultinational', 'producthealth', 'tatavinurutugal', 'internshipkit', 'enterpleaseexit', 'makeminkfree', 'icebiriyani', 'tamiltradional', 'noonecanmakesnese', 'firefallbill','boonwhale', 'whattosay', 'humansarealswaysblessing', 'buttheycantrealize', 'sosadaboutthat', 'withoutrealizing', 'everythinggets', 'cursedisadvantage', 'lionking', 'tigerfast', 'elephantweigth', 'hhffdfd', 'eddsd','dsfds', 'edsadhg', 'etgdfe', 'rethytj', 'reerere', 'ewiguy', 'oiugtri', 'ioeytrt', 'oihyfjh', 'ewioulkj', 'oiyywew', 'ewiugewyf', 'oiyuytu', 'ewoiuiq', 'pwqoiwq', 'iehycn', 'jxbnbz', 'piouwq', 'oijujgv', 'iqwhisa', 'pjiuwq', 'uuhywytf', 'kjwqgbdjy', 'kjgdyt', 'kwoiuedg', 'ekhdy', 'jgtd', 'oiwdhyt', 'djuigt', 'oihiuy', 'iejhuy', 'hwduqy', 'wlkqdhiu', 'apodhuq', 'dldhqwu', 'wduq', 'dyqwisd', 'skcig', 'sadkjha', 'asdju', 'sdoiwyqi', 'yjot', 'aoihyuy', 'uguysa', 'kugyrr', 'oiqyuwq', 'oiuiu', 'aoajiyq', 'oiqwuiuqw', 'iugufd' , 'hugf', 'ikuguy', 'pooiu', 'iqiti', 'kjgyju', 'iuwqi', 'oplijl', 'ojqoiq', 'oyhuyffh', 'kjbjg', 'kjhbujhh', 'kjashk', 'ihiugy', 'kjhu', 'liiyill', 'qowqiokjn', 'soijisa', 'kjbysa', 'aslkjiuuhj', 'aauomzka', 'skichiuy' ,'kdhsjds', 'dfkjh', 'ewiuguq', 'wkgedduq', 'wqjudq', 'wkuduyqyt', 'weegikqwu', 'wdgqu', 'wqwjqi', 'ejgfwy', 'wqkdwjqg', 'erouriy', 'asksad',' dsfsdan' ,'dfcbjk', 'kdhsjdsi', 'ekihiuu', 'lqwieiyq', 'qljeit', 'wkqheu', 'kjwhyiyehk', 'slkfnjhxvch', 'ekhugweb', 'skdhauy', 'ewhdiuwhekj', 'asjdgu' , 'asudguyagu'];

//         let start = Date.now();
//         console.log(start);
//         for (let name1 of persons1){
//             for (let name2 of persons2){
//                 cnt++;

//                 let length = window[remove_functions[remove_fn]](name1,name2);
//                 let result = window[flames_functions[calculate_fn]](length);
//             }
//         }
//         let end = Date.now();
//         console.log("TD of "+ remove_functions[remove_fn] +" & "+ flames_functions[calculate_fn] + " : " + (end - start));
//     }
// }
//function to cancel common letters among 2 names.