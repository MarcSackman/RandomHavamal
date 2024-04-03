function generate(){
    var quotes = {
        "- Stanza 1" : '"All door-ways, before going forward, should be looked to; for difficult it is to know where foes may sit within a dwelling."',
        "- Stanza 2" : '"Givers, hail! A guest is come in: where shall he sit? In much haste is he, who on the ways has to try his luck."',
        "- Stanza 3" : '"Fire is needful to him who is come in, and whose knees are frozen; food and raiment a man requires, wheoer the fell has traveled."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

  


}