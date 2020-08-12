const APIkey = 'AIzaSyAmZzuOA-XiWAcbCecHcs4Vju_FJ-SiF-E';
const url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=';


let leftSideRef = document.querySelector('.leftside');
let rightSideRef = document.querySelector('.rightside');

leftSideRef.addEventListener('click',displayTrump);
rightSideRef.addEventListener('click', displayBiden);

function displayTrump(){
    console.log('test');
    let mainContentRef = document.getElementById('mainContentHolder');
    mainContentRef.style['display']='none';

    fetch(url+APIkey+'&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        var name = myJson.officials[0].name;
        console.log(name);
        //name
        var displayName = document.createElement('h2');
        var newDiv = document.createElement('div');
        displayName.innerText = name;
        displayName.className='header';
        displayName.id='candidateName';
        newDiv.appendChild(displayName);
        document.body.appendChild(newDiv);
        //add image
        var newDiv1 = document.createElement('div');
        var trumpImg = document.createElement('img');
        trumpImg.src='../assets/trump-pic.jpg';
        trumpImg.style['height','width']='250px';
        trumpImg.id='candidateImg';
        newDiv1.appendChild(trumpImg);
        document.body.appendChild(newDiv1);
        //address
        var city = myJson.officials[0].address[0].city;
        var line = myJson.officials[0].address[0].line1;
        var state = myJson.officials[0].address[0].state;
        var zip = myJson.officials[0].address[0].zip;
        var address = (city+' '+line+' '+state+' '+zip);
        console.log(address);
        var displayAddress = document.createElement('p');
        displayAddress.innerText = 'Address: ' + address;
        displayAddress.id='candidateAddress';
        document.body.appendChild(displayAddress);
        //append party to top div
        var party = myJson.officials[0].party;
        var displayParty= document.createElement('h2');
        displayParty.innerText= party;
        displayParty.className='header';
        displayParty.id='candidateParty';
        newDiv.appendChild(displayParty);
        //style newDiv
        newDiv.style['display']='inline';
        //socials
        //social media 1 query
        var socialMedia1 = myJson.officials[0].channels[0].type;
        var nameMedia1 = myJson.officials[0].channels[0].id;
        console.log(socialMedia1, nameMedia1);
        //creating div content
        var mediaHeader = document.createElement('h2');
        mediaHeader.innerText = 'Social Medias:';
        //social media 1 creation
        var mediaHandle1 = document.createElement('p');
        mediaHandle1.innerText = socialMedia1 + ' @'+ nameMedia1;
        var socialMediaDiv = document.createElement('div');
        //social media 2 query+creation
        var socialMedia2 = myJson.officials[0].channels[1].type;
        var nameMedia2 = myJson.officials[0].channels[1].id;
        var mediaHandle2 = document.createElement('p');
        mediaHandle2.innerText = socialMedia2 + ' @'+ nameMedia2;
        //social media 3 query+creation
        var socialMedia3 = myJson.officials[0].channels[2].type;
        var nameMedia3 = myJson.officials[0].channels[2].id;
        var mediaHandle3 = document.createElement('p');
        mediaHandle3.innerText = socialMedia3 + ' @'+ nameMedia3;
        //appending new info
        socialMediaDiv.appendChild(mediaHeader);
        socialMediaDiv.appendChild(mediaHandle1);
        socialMediaDiv.appendChild(mediaHandle2);
        socialMediaDiv.appendChild(mediaHandle3);
        document.body.appendChild(socialMediaDiv);
        
    })

    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Donald%20Trump&format=json&origin=*')
    .then(res => {
    console.log(res);
    return res.json()
  })
    .then(data => {  
      console.log(data);  
    return data;
  })
    .then(function(result){
      let id = result.query.search[0].pageid;
      fetch('https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids='+id)
    .then(function(page){
        console.log(page);
        return page.json();
    })
    .then(function(printPage){
        console.log(printPage);
        //relevant urls
        var candidateUrl = printPage.query.pages[4848272].fullurl;
        var urlText = document.createElement('a');
        urlText.innerText = candidateUrl;
        urlText.href = candidateUrl;
        //url div
        var urlDiv = document.createElement('div');
        var relevantUrls = document.createElement('h2');
        relevantUrls.innerText = 'Relevant Urls:';
        //append info
        urlDiv.appendChild(relevantUrls);
        urlDiv.appendChild(urlText);
        document.body.appendChild(urlDiv);
    })
     
  })

}

function displayBiden(){
    console.log('test');
    let mainContentRef = document.getElementById('mainContentHolder');
    mainContentRef.style['display']='none';

    fetch(url+APIkey+'&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        var name = myJson.officials[0].name;
        console.log(name);
    })


    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Joe%Biden&format=json&origin=*')
    .then(res => {
    console.log(res);
    return res.json()
  })
    .then(data => {  
      console.log(data);  
    return data;
  })
}


