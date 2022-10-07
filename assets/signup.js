window.onload = () => {
    document.getElementById("signup-button").addEventListener("click", (e) => {
        let signup_name = document.getElementById("signup-name").value;
        let signup_email = document.getElementById("signup-email").value;

        let re_name = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        let re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        e.preventDefault();

        let name_valid = re_name.test(signup_name);
        let email_valid = re_email.test(signup_email);

        if(!name_valid){
            alert("Enter a valid name");
        }
        else{
            if(!email_valid){
                alert("Enter a valid email");
            }
            else{
                
                const url = ""
                const data = {
                    "name": signup_name,
                    "email": signup_email
                };


                fetch(url, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                .then((response) => {
                    if (response.status === 200) {
                        return "OK";
                    } else if (response.status === 400) {
                        throw "Email provided is invalid";
                    } else {
                        throw "Something went wrong";
                    }
                })
                .then((resJson) => {
                    alert("Thank you for signing up");
                })
                .catch((error) => {
                    alert(error);
                })
                
            }
        }           




    });


}