export const savedDataToLocalStorage = (books) => {
    const savedData = JSON.parse(localStorage.getItem("books")) || [];
    const dataAseKina = savedData.find(item => item.id == books.id);
    if(dataAseKina){
      alert("Bhai data ace ac thekei...");
    } else{
      savedData.push(books);
      
      localStorage.setItem('books', JSON.stringify(savedData));
    }
}