var urls = [
    "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/oceans/",
    "https://www.google.com/maps/place//@-84.999999,-44.656316,3a,75y,235.6h,90t/data=!3m4!1e1!3m2!1suZ7YCXJGSbyDxIbY-wPWow!2e0!4m2!3m1!1s0x0:0x3756ec1241149cda?hl=en-US&dg=dbrw&newdg=1",
    "https://www.google.com/maps/place//@-84.999999,-44.656316,3a,75y,235.6h,90t/data=!3m4!1e1!3m2!1suZ7YCXJGSbyDxIbY-wPWow!2e0!4m2!3m1!1s0x0:0x3756ec1241149cda?hl=en-US&dg=dbrw&newdg=1",
    "https://www.google.com/maps/search/Cambridge+Bay,+NU,+Canada/@69.11659,-105.082855,10z/data=!3m1!1e3?source=embed&hl=en&dg=dbrw&newdg=1",
    "https://www.google.com/maps/@20.682522,-88.56864,3a,75y,349.3h,90t/data=!3m4!1e1!3m2!1svU_33QQKMWRdPaGvwf9lgw!2e0?hl=en&dg=dbrw&newdg=1",
    "https://www.google.com/maps/@20.682522,-88.56864,3a,75y,349.3h,90t/data=!3m4!1e1!3m2!1svU_33QQKMWRdPaGvwf9lgw!2e0?hl=en&dg=dbrw&newdg=1",
    "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/nasa/",
    "https://www.google.com/maps/@45.516341,25.368461,3a,75y,210.32h,100.01t/data=!3m4!1e1!3m2!1sWbhXCZ2AkzN1qVq7HVS-pQ!2e0?dg=dbrw&newdg=1",
    "https://www.google.com/maps/@-33.955016,18.424882,3a,75y,328.36h,84.89t/data=!3m4!1e1!3m2!1sLfb8Jou_BWfvUINMhk1XbA!2e0?dg=dbrw&newdg=1",
    "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/grand-canyon/",
    "https://artsandculture.google.com/streetview/iQHTUIXluxuoGQ?sv_h=24&sv_p=0&sv_pid=27OFUbOPaxcUxXRJudclJw&sv_lid=18033790091006777634&sv_lng=72.83476251914544&sv_lat=18.97903341215466&sv_z=1",
    "https://artsandculture.google.com/streetview/9QEh91uq-NJ9BA?sv_lng=31.13178068127968&sv_lat=29.97772012076407&sv_h=194.62671176470008&sv_p=15.645009158027733&sv_pid=Uz4T6k1e4PyjSNJRLt9KdQ&sv_z=0.9999999999999997",
    "https://artsandculture.google.com/streetview/colosseum-outdoor-rome/KgEJeSGoJrgR3w",
    "https://www.inc.com/larry-kim/9-places-to-learn-a-new-language-online-for-fre.html",
    "https://www.youtube.com/watch?v=ZWXRxpIiDtM",
    "https://www.youtube.com/watch?v=7RU8I07Sodw",
    "allrecipes.com",
    "https://akispetretzikis.com/",
    "https://www.youtube.com/watch?v=PSTPuzGhhQM",
    "https://www.youtube.com/watch?v=HRkNfdlm5Qs",
    "https://www.youtube.com/watch?v=HRkNfdlm5Qs",
    "https://www.youtube.com/watch?v=kgNXyIezwks",
    "https://www.youtube.com/watch?v=lKOVYw9R7oI",
    "https://www.youtube.com/watch?v=lKOVYw9R7oI",
    "http://rapidfireart.com/2015/12/07/how-to-draw-a-face-in-8-steps/",
    "https://www.youtube.com/watch?v=oytc8TOC4Dg",
    "https://www.fluentu.com/blog/japanese/how-to-learn-japanese/",
    "https://blog.thelinguist.com/2018/10/18/how-to-learn-mandarin/",
    "https://www.jamieoliver.com/features/how-to-cook-the-perfect-steak/",
    "https://www.jamieoliver.com/features/how-to-cook-the-perfect-steak/",
    "https://www.jamieoliver.com/features/how-to-cook-the-perfect-steak/",
    "https://im-a-puzzle.com/",
    "https://www.menshealth.com/uk/building-muscle/a754103/the-9-best-superhero-workouts/",
    "https://www.coachmag.co.uk/abs-challenge",
    "https://www.coachmag.co.uk/abs-challenge",
    "https://www.wikihow.com/Paint-Your-Nails",
    "https://www.instructables.com/",
    "http://thequietplaceproject.com/thequietplace",
    "http://thequietplaceproject.com/thequietplace",
    "https://playtictactoe.org/",
    "https://cardgames.io/backgammon/",
    "https://www.chess.com/play/computer",
    "https://experiments.withgoogle.com/collection/ai",
    "https://www.makeuseof.com/tag/10-cool-amateur-movies-on-youtube/",
    "https://www.lifehack.org/323348/8-easy-magic-tricks-for-you-show-off-parties",
    "https://www.lifehacker.co.uk/",
    "https://www.boredpanda.com/",
    "https://www.boredpanda.com/animals-in-streets-during-coronavirus-quarantine/?utm_source=google&utm_medium=organic&utm_campaign=organic",
    "https://www.guru99.com/computer-programming-tutorial.html",
    "https://www.edx.org/",
    "https://ocw.mit.edu/index.htm",
    "https://openlibrary.org/",
    "http://read.gov/books/",
    "https://manybooks.net/",
    "https://www.goodreads.com/shelf/show/free-online",
    "https://www.engadget.com/",
    "https://dengarden.com/cleaning/How-to-Deep-Clean-Your-House-in-7-Days",
    "https://minecraft.gamepedia.com/Paper",
    "https://digg.com/2017/how-to-fix-stuff",
    "https://www.kasetophono.com/",
    "http://8tracks.com/explore/random",
    "https://www.last.fm/tag/random",
    "https://thehappynewspaper.com/",
    "https://thehappynewspaper.com/",
    "https://en.wikipedia.org/wiki/Shadowgraphy_(performing_art)",
    "https://etc.usf.edu/clipart/galleries/266-hand-shadow-puppetry",
    "https://www.rd.com/home/cleaning-organizing/how-to-clean-shoes/",
    "https://www.thesprucecrafts.com/your-first-painting-4159810",
    "https://makezine.com/2015/11/23/10-diy-lightsabers/",
    "https://linustechtips.com/main/topic/286004-building-your-first-pc/",
    "https://www.todaysparent.com/toddler/20-fun-indoor-games/",
    "https://www.mathpapa.com/practice/training/",
    "https://www.keystagehistory.co.uk/free-samples/",
    "https://www.britannica.com/",
    "https://www.bbcgoodfood.com/recipes/easy-bake-bread",
    

]

var listlength = urls.length

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-primary').onclick = () => {
        var random_url_number = getRandomInt(listlength)
        window.open(urls[random_url_number])
    }
})


