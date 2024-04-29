function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions & creating 3 variables with different values
var album1 = make_album("Ali", "Album title 1");
var album2 = make_album("Aqsa", "Album title 2");
// Calling a make album function with third parameter
var album3 = make_album("Alina", "Album title 3", 10);
// Print values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
