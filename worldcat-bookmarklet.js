
javascript: (function() {
    javascript: (function() {
        var searchterms = [];
        var re = RegExp("ISBN-13: [0-9]+-[0-9]+");
        if (document.body.textContent.match(re) != null) searchterms.push(document.body.textContent.match(re)[0].substring(9));
        var re2 = RegExp("ISBN-10: [0-9]+");
        if (document.body.textContent.match(re2) != null) searchterms.push(document.body.textContent.match(re2)[0].substring(9));
        var re3 = RegExp("ISBN: [0-9]+");
        if (document.body.textContent.match(re3) != null) searchterms.push(document.body.textContent.match(re3)[0].substring(6));
        var re4 = RegExp("BookSources/[0-9-]+");
        if (document.body.innerHTML.match(re4) != null) searchterms.push(document.body.innerHTML.match(re4)[0].substring(12));
        if (searchterms.length == 0) {
            alert('No ISBN Numbers found on Page');
        } else {
            var i;
            var searchfield = searchterms[0];
            var uborrowfield = '"' + searchterms[0] + '"';
            for (i = 1; i < searchterms.length; i++) {
                searchfield += " | " + searchterms[i];
                uborrowfield += ' or "' + searchterms[i] + '"';
            }
            window.open('http://www.worldcat.org/search?qt=worldcat_org_all&q=' + searchfield, 'WorldCat Lookup', 'scrollbars=1,resizable=1,location=1,width=575,height=500');
            window.open('https://www.goodreads.com/search?q=' + searchfield, 'GoodReads Lookup', 'scrollbars=1,resizable=1,location=1,width=575,height=500');
        }
    })()
})()


