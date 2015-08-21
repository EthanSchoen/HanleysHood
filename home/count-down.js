var before = "Valentines day!"
var current = "Today is Valentines day. Don\'t forget the flowers!"
var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countdown(yr, m, d) {
    var today = new Date()
    var todayy = today.getYear()
    if (todayy < 1000)
        todayy += 1900
    var todaym = today.getMonth()
    var todayd = today.getDate()
    var todaystring = montharray[todaym] + " " + todayd + ", " + todayy
    var futurestring = montharray[m - 1] + " " + d + ", " + yr
    var difference = (Math.round((Date.parse(futurestring) - Date.parse(todaystring)) / (24*60*60*1000))*1)
    if (difference == 0)
        document.getElementById("days-left").innerHTML = current
    else if (difference > 0)
        document.getElementById("days-left").innerHTML = "Only "+difference+" days until "+before
    }

countdown(2016, 5, 3)