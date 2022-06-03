


function toast(
{
    title = "",
    message = "",
    type = "info",
    duration = 3000
})
{
    const toastElement = document.querySelector(".toast-container");
    // console.log(toastElement);
    if(toastElement){
        const toast = document.createElement('div');

        //  Auto remove after Duration
        const autoRemoveId = setTimeout(function(){
            toastElement.removeChild(toast)
        },duration + 1.5*1000);

        // Remove when click close
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                toastElement.removeChild(toast); 
                clearTimeout(autoRemoveId);   
            }
        };

        const icons = {
            success:'fa-solid fa-circle-check',
            info:'fa-solid fa-circle-info',
            warning:'fa-solid fa-triangle-exclamation',
            error:'fa-solid fa-triangle-exclamation',
        }
        const icon = icons[type];

        const timeDelay = (duration/1000).toFixed(1);

        toast.classList.add('toast',`toast__${type}`);
        toast.style.animation = `fadeInLeft 1.5s  ease, fadeOut 1s ${timeDelay}s ease forwards`; 
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">
                    ${title}
                </div>
                <div class="toast__message">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        toastElement.appendChild(toast);
   
    }

    
 

}


// toast({
//     title:'Success',
//     message:'ng in every where Nothing in every where',
//     type:'info',
//     duration:3000
// })


