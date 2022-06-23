const liItame = document.querySelectorAll('.filter-menu li');
const imgItame = document.querySelectorAll('.product .itemBox');
liItame.forEach(li =>{
    li.onclick = () =>{
        liItame.forEach(other =>{
            other.className = "";
        });
        li.className = "active";
        const value = li.textContent;
        imgItame.forEach(img =>{
            img.classList.add("delete");
            img.classList.remove("active");
       
       if(img.getAttribute('data-item') == value.toLowerCase() || value =="All"){
           img.classList.remove("delete");
           img.classList.add("active");
       }
    });
    }
})