//for loading page 
let load = document.querySelector(".load");


        let main = document.querySelector(".main");


        window.addEventListener("load", () =>{


            main.classList.remove("hidden");

            load.classList.add("hidden");

        })

        //login
        let log  = document.querySelector(".icons");

        let logcont = document.querySelector(".container")

        log.addEventListener("click", () =>{

            logcont.classList.remove("hidden");

        })

        let close = document.querySelector(".close");

        close.addEventListener("click", () =>{

            logcont.classList.add("hidden");

        })

        //pop up for login 

        //submit btn
        let login = document.querySelector(".form-login");

        login.addEventListener("click", () =>{

          alert("You have been successfully logged in!")  

        })

        // link
        let clink = document.querySelector(".clink").src;
        function get()
        {


            var link=get().htrf

            
        }
        function redirectToHome() {
            window.location.href = "index.html";
          }
        