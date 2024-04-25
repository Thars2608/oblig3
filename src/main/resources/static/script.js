function kjopBillett() {
    const billett = {
        film: $("#velgFilm").val(),
        antall: $("#antall").val(),
        fornavn: $("#navn").val(),
        etternavn: $("#etterNavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    };

    // Perform the necessary actions with the billett object, such as sending it to the server or processing it further.
    // For example, you can send it using Ajax:
    $.post("/kjopBillett", billett, function() {
        hentAlleBilletter();
    });

    // Clear the form fields after submission
    $("#velgFilm").val("");
    $("#antall").val("");
    $("#navn").val("");
    $("#etterNavn").val("");
    $("#telefon").val("");
    $("#epost").val("");
}

function hentAlleBilletter() {
    $.get("/hentAlleBilletter", function(billetter) {
        formaterBillettData(billetter);
    });
}

function formaterBillettData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefon</th><th>E-post</th></tr>";
    for (const billett of billetter) {
        ut += "<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#billeter").html(ut);
}

function slettAlleBilletter() {
    $.get("/slettAlleBilletter", function() {
        hentAlleBilletter();
    });
}
