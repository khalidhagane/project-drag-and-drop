const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};

// when browse
input.addEventListener('change',function(){
    file = this.files[0];
    dragArea.classList.add('active');
    displayFile();
})

// when file is inside the drag area
dragArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dragText.textContent = 'Releave to Upload';
    dragArea.classList.add('active');
    // console.log('file is inside the drag area');
});

// when file leaves the drag area
dragArea.addEventListener('dragleave',()=>{
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
    // console.log('file left the drag area');
});

// when the file is the drag area
dragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    // console.log(file);

    // let fileType = file.type;
    // // console.log(fileType);
    // let validExtensions = ['image/jpeg', 'image/jpg', 'image/png' ];

    // if(validExtensions.includes(fileType)){
    //     let fileReader = new FileReader();

    //     fileReader.onload = () => {
    //         let fileURL = fileReader.result;
    //         // console.log(fileURL);
    //         let imgtag = `<img src="${fileURL}" alt="">`;
    //         dragArea.innerHTML = imgtag;
    //     };
    //     fileReader.readAsDataURL(file);
    // }else{
    //     alert('this file is not an image')
    //     dragArea.classList.remove('active');

    // }
    // // console.log('the file is dropped in drag area');
    displayFile();
});

function displayFile(){
    let fileType = file.type;
    // console.log(fileType);
    let validExtensions = ['image/jpeg', 'image/jpg', 'image/png' ];

    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            // console.log(fileURL);
            let imgtag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgtag;
        };
        fileReader.readAsDataURL(file);
    }else{
        alert('this file is not an image')
        dragArea.classList.remove('active');

    }
    // console.log('the file is dropped in drag area');
}
