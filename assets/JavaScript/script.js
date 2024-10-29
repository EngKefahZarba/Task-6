fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(res=>res.json())
.then(res=>featuredBooks(res))

let Div = document.getElementById('root')
function featuredBooks(res){
    // console.log(res);
    const lastFour = res.slice(-4);
    for (let index = 0; index < lastFour.length ; index++) 
        {
            // console.log(lastFour[index].title);
            // console.log(lastFour[index].author);
        Div.innerHTML +=`
        <div class="book">
                <div class="featuredimg second-bg-color p-2 d-flex justify-content-center align-items-center">
                <img src="${lastFour[index].simple_thumb}" alt="">
                </div>
                <div class="d-flex align-items-center flex-column mt-4">
                <h3 class="text-warning-emphasis">${lastFour[index].title}</h3>
                <h6 class="text-body-secondary">${lastFour[index].author}</h6>
                </div>
              </div>` 
    }
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
.then(oneBook=>oneBook.json())
.then(oneBook=>bestSellingBook(oneBook))
let oneDiv = document.getElementById('one-book')
function bestSellingBook(oneBook) {
    oneDiv.innerHTML = `
    <div class="best-book d-flex justify-content-center align-items-center  p-5 gap-4">
        <div class="sellingimg d-flex justify-content-center align-items-center p-1"> 
        <img src="${oneBook.simple_thumb}" class="border border-5 rounded" alt="">
        </div>
        <div class="d-flex align-items-start flex-column w-50 ">
            <h1 class="border-bottom fw-bold mb-5">Best Selling Book</h1>
            <h6 class="text-body-secondary">${oneBook.authors[0].name}</h6>
            <h2 class="mt-5">${oneBook.title}</h2>
            <div class="text-body-secondary mt-5">${oneBook.fragment_data.html}</div>
        </div>
        </div>
    `
}

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(response=>response.json())
.then(response=>popularBooks(response))

let pBook = document.getElementById('pbook')
function popularBooks(response){
     console.log(response);
    
    for (let index = 0; index <8  && index < response.length ; index++) 
        {
            
        pBook.innerHTML +=`
        <div class="book col-lg-3">
                <div class="featuredimg second-bg-color p-2 d-flex justify-content-center align-items-center  ">
                <img src="${response[index].simple_thumb}" alt="">
                </div>
                <div class="d-flex align-items-center flex-column mt-4">
                <h5 class="text-warning-emphasis">${response[index].title}</h5>
                <h6 class="text-body-secondary">${response[index].author}</h6>
                </div>
              </div>` 
    }
}

