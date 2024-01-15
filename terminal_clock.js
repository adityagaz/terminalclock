setInterval(( ) => {
    let current_time = new Date();

    let hours  =  current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();

    if (current_time.getHours() <10){
        hours  =  "0"+current_time.getHours();
    }
    if (current_time.getMinutes() <10){
        minutes  =  "0"+current_time.getMinutes();
    }
    if (current_time.getSeconds() <10){
        seconds  =  "0"+current_time.getSeconds();
    }
    if(hours>12) {
        hours-=12; 
        console.log(hours,":",minutes,":",seconds,"pm");
    }
    else{
        console.log(hours,":",minutes,":",seconds,"am");
    }

},1000);