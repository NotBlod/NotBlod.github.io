window.onload = () => {
    const baseURL = "";

    function getJSON(){
        fetch(baseURL)
        .then(response => response.json())
        .then(data => console.log(data));   
    }

    getJSON();
    
    document.getElementById("hof-button").addEventListener("click", (e) => {
        let hof_year = document.getElementById("hof-year").value;
        alert("Requested "+hof_year);

    });
}