const accesskey = "60inGuvDLzKQkfQ6UkPCoBl17Hyazj08zaXWPhau9VE";

const searchform = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("Search-result");
const showMore = document.getElementById("more");

let keyword = "";
let page = 1;

async function searchimage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const responce = await fetch(url);
  const data = await responce.json();

  if(page === 1){
    searchResult.innerHTML="";
  }

 const results =data.results;
 results.map((results)=>{
    const image=document.createElement("img");
    image.src=results.urls.small;
    const imagelink =document.createElement('a')
    imagelink.href = results.links.html;
    imagelink.target ="_blank"

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
    

 })
 showMore.style.display="block"
}

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchimage();
});

showMore.addEventListener("click",()=>{
  page++;
  searchimage();
})
