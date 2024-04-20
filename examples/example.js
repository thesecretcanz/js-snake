document.write('\
\
<h1 id="header"></h1>\
\
<script>\
    class Car {\
        constructor(carName, carYear) {\
            this.name = carName;\
            this.year = carYear;\
        }\
    }\
    myCar = Car("Fiat", "2003")\
    document.getElementById("header").innerHTML = "SOS";\
</script>\
\
');