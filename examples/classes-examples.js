document.write('\
\
\
<h1 id="header"></h1>\
\
<script>\
class Car: {\
    constructor(name, year) {\
        this.name = name;\
        this.year = year;\
    }\
}\
const car = new Car("Fiat", "2003");\
document.getElementById("header").innerHTML = car.name + " Panda " + car.year;\
</script>\
\
\
');