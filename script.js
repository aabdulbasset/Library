let myLibrary = [];
$().ready(initLib)
function Book(title,author,pages,isRead){
    this.title=title
    this.author=author
    this.pages=pages
    this.isRead=isRead
}
function addBooktoLibrary(){
    var title = $(".form-title").val()
    var author = $(".form-author").val()
    var pages = $(".form-pages").val()
    const book = new Book(title,author,pages,"false")
    myLibrary.push(book)
    createBookCard(title,author,pages)
    updateLocalStorage()
    closeAddBook()
}
function updateLocalStorage(){
    localStorage.setItem("library",JSON.stringify(myLibrary))
}
function initLib(){
    myLibrary = JSON.parse(localStorage.getItem("library"))
    console.log(myLibrary)
    myLibrary.forEach(function(e,i){
        $(".cards-container").append(`       <div class="book-card" data-id="${i}">
        <div class="back" data-read="${e["isRead"]}">
            <div class="info">
                <h3>Author: ${e["author"]}</h3>
                <h3>Pages: ${e["pages"]}</h3>
                <h3>Read: ${e["isRead"]}</h3>
            </div>
            <div class="card-footer">
                <button onclick="deleteBook()"><i class="fas fa-trash"></i></button>
                <button onclick="markRead(this)"><i class="fas fa-check"></i></button>
            </div>
        </div>
            <div class="face">
                <h2>${e["title"]}</h2>
            </div>
    </div>`)
    })
    
}
function createBookCard(title,author,pages){
    let n = (myLibrary.length)-1
    $(".cards-container").append(`       <div class="book-card" data-id="${n}">
        <div class="back" data-read="${"false"}">
            <div class="info">
                <h3>Author: ${author}</h3>
                <h3>Pages: ${pages}</h3>
                <h3>Read: ${"false"}</h3>
            </div>
            <div class="card-footer">
                <button onclick="deleteBook()"><i class="fas fa-trash"></i></button>
                <button onclick="markRead(this)"><i class="fas fa-check"></i></button>
            </div>
        </div>
            <div class="face">
                <h2>${title}</h2>
            </div>
    </div>`)
}
function markRead(card){
    id = card.parentElement.parentElement.parentElement.dataset.id
    if(myLibrary[id].isRead=="true"){
        myLibrary[id].isRead="false"
        card.parentElement.parentElement.dataset.read="false"
    }else{
        myLibrary[id].isRead="true"
        card.parentElement.parentElement.dataset.read="true"
    }
    updateLocalStorage()
}
function showAddBook(){
    let moduleSelector = $(".add-book-container")
    moduleSelector[0].classList.remove("hidden")
    console.log(moduleSelector[0].classList)
}
function closeAddBook(){
    let moduleSelector = $(".add-book-container")
    moduleSelector[0].classList.add("hidden")
}