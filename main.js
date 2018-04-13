$(document).ready(function() {
    function poundToGram(pound) {
        return pound * 453.59237;
    };

    function poundToKg(pound) {
        return pound * 0.45359237;
    };

    function poundToOunces(pound) {
        return pound * 16;
    };

    function grToPound(g) {
        return g / 453.59237;
    }

    function grToKg(g) {
        return g / 1000;
    }

    function grToOu(g) {
        return g * 28.349523195;
    }

    function kgToPound(kg) {
        return kg / 0.45359237;
    }

    function kgToGram(kg) {
        return kg * 1000;
    }

    function kgToOu(kg) {
        return kg * 28349.523195;
    }

    function ouToPound(ou) {
        return ou / 16;
    }

    function ouToGr(ou) {
        return ou / 28.349523195;
    }

    function ouToKg(ou) {
        return ou / 28349.523195;
    }

    document.getElementById("pound").addEventListener("input", function(ev) {
        var p = ev.target.value;
        if (p >= 0) {
        document.getElementById("gr").value = poundToGram(p).toFixed(3);
        document.getElementById("kg").value = poundToKg(p).toFixed(3);
        document.getElementById("ou").value = poundToOunces(p).toFixed(3);
        } else {
            alert("Nu ati introdus un numar pozitiv");
            document.getElementById("pound").value = 0;
        }
    });
    document.getElementById("gr").addEventListener("input", function(ev) {
        var p = ev.target.value;
        if (p >= 0) {
            document.getElementById("pound").value = grToPound(p).toFixed(3);
            document.getElementById("kg").value = grToKg(p).toFixed(3);
            document.getElementById("ou").value = grToOu(p).toFixed(3);
        } else {
            alert("Nu ati introdus un numar pozitiv.");
            document.getElementById("gr").value = 0;
        }
    });

    document.getElementById("kg").addEventListener("input", function(ev) {
        var p = ev.target.value;
        if (p >= 0) {
            document.getElementById("pound").value = kgToPound(p).toFixed(3);
            document.getElementById("gr").value = kgToGram(p).toFixed(3);
            document.getElementById("ou").value = kgToOu(p).toFixed(3);
        } else {
            alert("Nu ati introdus un numar pozitiv.");
            document.getElementById("kg").value = 0;
        }
    });

    document.getElementById("ou").addEventListener("input", function(ev) {
        var p = ev.target.value;
        if (p >= 0) {
            document.getElementById("pound").value = ouToPound(p).toFixed(3);
            document.getElementById("gr").value = ouToGr(p).toFixed(3);
            document.getElementById("kg").value = ouToKg(p).toFixed(3);
        } else {
            alert("nu ati introdus un numar pozitiv.");
            document.getElementById("ou").value = 0;
        }
    });
});