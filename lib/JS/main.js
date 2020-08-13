const APIkey = 'AIzaSyAmZzuOA-XiWAcbCecHcs4Vju_FJ-SiF-E';
const url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=';
const mainContentRef = document.getElementById('mainContentHolder');
const trumpContentDiv = document.createElement('div');
const bidenContentDiv = document.createElement('div');

var pageIdArray = [];

let leftSideRef = document.querySelector('.leftside');
let rightSideRef = document.querySelector('.rightside');
let homeRef = document.querySelector('#logo');

leftSideRef.addEventListener('click',displayTrump);
rightSideRef.addEventListener('click', displayBiden);
homeRef.addEventListener('click', goHome);

function goHome(){
    trumpContentDiv.innerHTML='';
    bidenContentDiv.innerHTML='';
    mainContentRef.style['display']='block';
    document.body.style['background-color']='#db8ef5'
}


function displayTrump(){
    console.log('test');
    mainContentRef.style['display']='none';
    document.body.style['background-color']='#f58e8e'
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
        displayName.className='candidateName';
        newDiv.appendChild(displayName);
    
        trumpContentDiv.appendChild(newDiv);
        //add image
        var newDiv1 = document.createElement('div');
        var trumpImg = document.createElement('img');
        trumpImg.src='../assets/trump-pic.jpg';
        trumpImg.style['height','width']='250px';
        trumpImg.className='candidateImg';
        newDiv1.appendChild(trumpImg);
        trumpContentDiv.appendChild(newDiv1);
        //address
        var city = myJson.officials[0].address[0].city;
        var line = myJson.officials[0].address[0].line1;
        var state = myJson.officials[0].address[0].state;
        var zip = myJson.officials[0].address[0].zip;
        var address = (city+' '+line+' '+state+' '+zip);
        console.log(address);
        var displayAddress = document.createElement('p');
        displayAddress.innerText = 'Address: ' + address;
        displayAddress.className='candidateAddress';
        trumpContentDiv.appendChild(displayAddress);
        //append party to top div
        var party = myJson.officials[0].party;
        var displayParty= document.createElement('h2');
        displayParty.innerText= party;
        displayParty.className='header';
        displayParty.className='candidateParty';
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
        socialMediaDiv.className ='medias';
        trumpContentDiv.appendChild(socialMediaDiv);
        
    })
    var urlDiv = document.createElement('div');
    var relevantUrls = document.createElement('h2');
    relevantUrls.innerText = 'Relevant Urls:';
    urlDiv.className = 'urlDiv';
    //append info
    urlDiv.appendChild(relevantUrls);
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
      for(let i=0; i<result.query.search.length; i++){
      let id = result.query.search[i].pageid;
      fetch('https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids='+id)
    .then(function(page){
        console.log(page);
        return page.json();
    })
    .then(function(printPage){
        console.log(printPage);
        //relevant urls
        var candidateUrl = printPage.query.pages[id].fullurl;
        var urlText = document.createElement('a');
        urlText.innerText = printPage.query.pages[id].title;
        urlText.href = candidateUrl;
        urlText.target='_blank';
        urlText.className = 'urls';
        urlText.style['display']='block';
        //url div
        //append info
        urlDiv.appendChild(urlText);
        trumpContentDiv.appendChild(urlDiv);

        document.body.appendChild(trumpContentDiv);
    })
  } 
  })

}

function displayBiden(){
    let mainContentRef = document.getElementById('mainContentHolder');
    mainContentRef.style['display']='none';
    document.body.style['background-color']='#8eb2f5'
            //name
            var displayName = document.createElement('h2');
            var newDiv = document.createElement('div');
            displayName.innerText = 'Joe Biden';
            displayName.className='header';
            displayName.className='candidateName';
            newDiv.appendChild(displayName);
            bidenContentDiv.appendChild(newDiv);
            //add image
            var newDiv1 = document.createElement('div');
            var trumpImg = document.createElement('img');
            trumpImg.src='../assets/Joe Biden.jpg';
            trumpImg.style['height','width']='250px';
            trumpImg.className='candidateImg';
            newDiv1.appendChild(trumpImg);
            bidenContentDiv.appendChild(newDiv1);
            //append party to top div
            var displayParty= document.createElement('h2');
            displayParty.innerText= 'Democratic';
            displayParty.className='header';
            displayParty.className='candidateParty';
            newDiv.appendChild(displayParty);
    
          //url div
          var urlDiv = document.createElement('div');
          var relevantUrls = document.createElement('h2');
          relevantUrls.innerText = 'Relevant Urls:';
          urlDiv.appendChild(relevantUrls);
          bidenContentDiv.appendChild(urlDiv);

          urlDiv.className = 'urlDiv';


    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Joe%Biden&format=json&origin=*')
    .then(res => {
    console.log(res);
    return res.json()
  })
    .then(data => {  
      console.log(data);  
    return data;
  })
    .then(function(result){
      for(let i=0; i<result.query.search.length; i++){
        let id = result.query.search[i].pageid;
        fetch('https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids='+id)
        .then(function(page){
            console.log(page);
            return page.json();
        })
        .then(function(printPage){
            console.log(printPage);

          //relevant urls
          var candidateUrl = printPage.query.pages[id].fullurl;
          var urlText = document.createElement('a');
          urlText.innerText = printPage.query.pages[id].title;
          urlText.href = candidateUrl;
          urlText.target='_blank';
          urlText.className = 'urls';
          urlText.style['display']='block';
          //append info
          
          urlDiv.appendChild(urlText);

          document.body.appendChild(bidenContentDiv);
        })
      }
    })
}


