const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apiKey = "Po6UYdj2d55+MaWTKSV+yg==Sx4TIHhhCwfhTuBr"

const options = {
    method : "GET",
    headers : {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){
    
    try {   //it is used when ERROR_INTERNET_DISCONECTED -- Offline
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "LOADING.."
        const response = await fetch(apiURL,options)
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke"

       jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke"
        console.log(error);
    }

    
}


btnEl.addEventListener("click",getJoke);