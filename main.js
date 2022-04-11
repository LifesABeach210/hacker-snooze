
const Div = document.querySelector('#Body');

const parent = document.createElement('div');


const child = document.createElement('div');

 let body = document.querySelector('#Body1');
// body.style.backgroundColor = 'red';
const BaseUrl = "https://hacker-news.firebaseio.com/v0/";

const MaxItem =
	"https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty";

const TopStories =
	"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

const Updates =
	"https://hacker-news.firebaseio.com/v0/updates.json?print=pretty";

    let Btn = document.querySelector('#btn');
//get API


async function MakeRequest(url){
const httpResponse = await fetch(url);
const data = await httpResponse.json();

return data ;

}


async function getTopStories(){
    const data = await MakeRequest(TopStories);

    for (let i = 0; i < 100; i++) {
        const Item = data[i];

        const Base = `${BaseUrl}/item/${data[i]}.json?print=pretty`;
       
        const DataId = await MakeRequest(Base);
       
        console.log(DataId);
       
        const newDiv = $(`<div id = "${Item}" class = "topStories"><a href = "${DataId.url}">
       
        ${DataId.title}</a> <div id="Info"> <div><p style = "color:green"> Score:${DataId.score}</p></div>
       
        <div> Comments:<p style = "color:red"> ${DataId.descendants}</p> </div> <div><p> Author:${DataId.by}</div>
       
        </div>`);
     
        console.log('1');
    
       $("#Body").append(newDiv);
       
       console.log(newDiv);
       
       console.log('2');




    }



}

Btn.addEventListener('click',function(){getTopStories();});