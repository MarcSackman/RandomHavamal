function generate(){
    var quotes = {
        "- Stanza 1" : '"All door-ways, before going forward, should be looked to; for difficult it is to know where foes may sit within a dwelling."',
        "- Stanza 2" : '"Givers, hail! A guest is come in: where shall he sit? In much haste is he, who on the ways has to try his luck."',
        "- Stanza 3" : '"Fire is needful to him who is come in, and whose knees are frozen; food and raiment a man requires, wheoer the fell has traveled."',
        "- Stanza 4" : '"Water to him is needful who for refection comes, a towel and hospitable invitation, a good reception; if he can get it, discourse and answer."',
        "- Stanza 5" : '"Wit is needful to him who travels far: at home all is easy. A laughing-stock is he who nothing knows, and with the instructed sits."',
        "- Stanza 6" : '"Of his understanding no one should be proud, but rather in conduct cautious. When the prudent and taciturn come to a dwelling, harm seldom befalls the cautious; for a firmer friend no man ever gets than great discernment."',
        "- Stanza 7" : '"A wary guest, who to refection comes, keeps a cautious silence, with his ears listens, and with his eyes observes: so explores every prudent man."',
        "- Stanza 8" : '"He is happy, who for himself obtains fame and kind words: less sure is that which a man mush have in anothers breast."',
        "- Stanza 9" : '"He is happy, who in himself possesses fame and wit while living; for bad counsels have oft been received from anothers heart"',
        "- Stanza 10" : '"A better burden no man beats on the road than riches in a strange place; such is the recourse of the indigent."',
        "- Stanza 11" : '"A worse provision on the way he cannot carry than too much beer-bibbing; so good is not, as it is said, beer for the sons of men."',
        "- Stanza 12" : '"A worse provision no man can take from table than too much beer-bibbing; for the more he drinks the less control he has of his own mind."',
        "- Stanza 13" : '"Oblivions heron tis called that over drinks hovers; he steals the minds of men. With this birds pinions I was fettered in Gunnlods dwelling."',
        "- Stanza 14" : '"Drunk I was, I was over-drunk, at that cunning Fialars. Its the best drunkenness, when everyone after it regains his reason."',
        "- Stanza 15" : '"Taciturn and prudent, and in war daring, should a kings children be; joyous and generous everyone should be until his hour of death."',
        "- Stanza 16" : '"A cowardly man thinks he will ever live, if warfare he avoids; but old age will give him no peace, though spears may spare him."',
        "- Stanza 17" : '"A fool gapes when to a house he comes, to himself mutters or is silent; but all at once, if he gets drink, then is the mans mind displayed."',
        "- Stanza 18" : '"He alone knows who wanders wide, and has much experienced, by what disposition each man is ruled, who common sense possesses."',
        "- Stanza 19" : '"Let a man hold the cup, yet of the mead drink moderately, speak sensibly or be silent. As of a fault no man will admonish thee, if thou goest to bed early."',
        "- Stanza 20" : '"A greedy man, if he be not moderate, eats to his mortal sorrow. Oftentimes his belly draws laughter on a silly man, who among the prudent comes."',
        
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

  


}