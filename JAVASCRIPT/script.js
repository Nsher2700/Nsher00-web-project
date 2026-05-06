document.getElementById("favoritesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const hobby = document.getElementById("hobby").value;
    const song = document.getElementById("song").value;
    const movie = document.getElementById("movie").value;

    const messageBox = document.getElementById("messageBox");

    messageBox.innerHTML = `
        <p>Hello, ${name}! It is cool that your favorite hobby is ${hobby}.</p>
        <p>Your favorite song is "${song}" and your favorite movie is "${movie}".</p>
        <p>Thanks for sharing your favorites!</p>
    `;
});