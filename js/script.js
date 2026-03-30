function joinNow() {
    alert("Welcome to Forge Fitness! Contact us to join.");
}
function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! We will contact you soon.");
    document.querySelector("form").reset();
}