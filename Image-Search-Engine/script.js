const inputfield=document.getElementById("input-field")
const inputtext=document.getElementById("inputtext")
const searchbtn=document.getElementById("searchButton")
const imagecontent=document.getElementById("image-content")
const showmore=document.getElementById("showmore")

const key= "7hanbivOyZGCGjm2WuGZlNQBwwVnMBhwjW_ZjV_ym9E"
const urll="https://api.unsplash.com/search/photos?page=1&query=office"


let keyword=""
let page=1

async function searchImage(){
    keyword=inputtext.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`
    console.log(keyword)
    const respose =await fetch(url)
    const data= await respose.json()
    console.log(data)

    if(page===1){
        imagecontent.innerHTML=""
    }

    const  results= data.results
    console.log(results)

    results.map((result)=>{
        const image=document.createElement("img")
        image.src=result.urls.small
        console.log(result.urls.small)
        const imagelink=document.createElement("a")
        imagelink.href=result.links.html
        console.log(result.links.html)
        imagelink.target="_blank"

        imagelink.appendChild(image)

        imagecontent.appendChild(imagelink)
    })
    showmore.style.display="block"
}
inputfield.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    searchImage()
})
showmore.addEventListener("click",()=>{
    page++
    searchImage()
})