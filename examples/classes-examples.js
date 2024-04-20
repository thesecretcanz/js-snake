document.write('\
<h1 id="header"></h1>\
<script>\
    class Car {\
        constructor(name, year) {\
            this.name = name;\
            this.year = year;\
        }\
        myCar = new Car("Fiat", "2003");\
    }\
    document.getElementById("header").innerHTML = myCar.name;\
</script>\
');