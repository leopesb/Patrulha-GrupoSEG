$(document).ready(function () {
    $(".row-1").click(function () {
        var qra = $("#border-1 .qra").val();
        var placa = $("#border-1 .placa").val();
        var entrada = $("#border-1 .entrada").val();
        var qrr = $("#border-1 .qrr").val();
        var saida = $("#border-1 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox'></td></tr>";
        $("#acesso-1 table tbody").append(markup);
    });
    $(".remove-1").click(function () {
        $("#acesso-1 table tbody tr:last-child").remove();
    });

    $(".row-2").click(function () {
        var qra = $("#border-2 .qra").val();
        var placa = $("#border-2 .placa").val();
        var entrada = $("#border-2 .entrada").val();
        var qrr = $("#border-2 .qrr").val();
        var saida = $("#border-2 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox'></td></tr>";
        $("#acesso-2 table tbody").append(markup);
    });
    $(".remove-2").click(function () {
        $("#acesso-2 table tbody tr:last-child").remove();
    });

    $(".row-3").click(function () {
        var qra = $("#border-3 .qra").val();
        var placa = $("#border-3 .placa").val();
        var entrada = $("#border-3 .entrada").val();
        var qrr = $("#border-3 .qrr").val();
        var saida = $("#border-3 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-3 table tbody").append(markup);
    });
    $(".remove-3").click(function () {
        $("#acesso-3 table tbody tr:last-child").remove();
    });

    $(".row-4").click(function () {
        var qra = $("#border-4 .qra").val();
        var placa = $("#border-4 .placa").val();
        var entrada = $("#border-4 .entrada").val();
        var qrr = $("#border-4 .qrr").val();
        var saida = $("#border-4 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-4 table tbody").append(markup);
    });
    $(".remove-4").click(function () {
        $("#acesso-4 table tbody tr:last-child").remove();
    });

    $(".row-5").click(function () {
        var qra = $("#border-5 .qra").val();
        var placa = $("#border-5 .placa").val();
        var entrada = $("#border-5 .entrada").val();
        var qrr = $("#border-5 .qrr").val();
        var saida = $("#border-5 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-5 table tbody").append(markup);
    });
    $(".remove-5").click(function () {
        $("#acesso-5 table tbody tr:last-child").remove();
    });

    $(".row-6").click(function () {
        var qra = $("#border-6 .qra").val();
        var placa = $("#border-6 .placa").val();
        var entrada = $("#border-6 .entrada").val();
        var qrr = $("#border-6 .qrr").val();
        var saida = $("#border-6 .aida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-6 table tbody").append(markup);
    });
    $(".remove-6").click(function () {
        $("#acesso-6 table tbody tr:last-child").remove();
    });

    $(".row-7").click(function () {
        var qra = $("#border-7 .qra").val();
        var placa = $("#border-7 .placa").val();
        var entrada = $("#border-7 .entrada").val();
        var qrr = $("#border-7 .qrr").val();
        var saida = $("#border-7 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-7 table tbody").append(markup);
    });
    $(".remove-7").click(function () {
        $("#acesso-7 table tbody tr:last-child").remove();
    });

    $(".row-8").click(function () {
        var qra = $("#border-8 .qra").val();
        var placa = $("#border-8 .placa").val();
        var entrada = $("#border-8 .entrada").val();
        var qrr = $("#border-8 .qrr").val();
        var saida = $("#border-8 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-8 table tbody").append(markup);
    });
    $(".remove-8").click(function () {
        $("#acesso-8 table tbody tr:last-child").remove();
    });

    $(".row-9").click(function () {
        var qra = $("#border-9 .qra").val();
        var placa = $("#border-9 .placa").val();
        var entrada = $("#border-9 .entrada").val();
        var qrr = $("#border-9 .qrr").val();
        var saida = $("#border-9 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-9 table tbody").append(markup);
    });
    $(".remove-9").click(function () {
        $("#acesso-9 table tbody tr:last-child").remove();
    });

    $(".row-10").click(function () {
        var qra = $("#border-10 .qra").val();
        var placa = $("#border-10 .placa").val();
        var entrada = $("#border-10 .entrada").val();
        var qrr = $("#border-10 .qrr").val();
        var saida = $("#border-10 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-10 table tbody").append(markup);
    });
    $(".remove-10").click(function () {
        $("#acesso-10 table tbody tr:last-child").remove();
    });

    $(".row-11").click(function () {
        var qra = $("#border-11 .qra").val();
        var placa = $("#border-11 .placa").val();
        var entrada = $("#border-11 .entrada").val();
        var qrr = $("#border-11 .qrr").val();
        var saida = $("#border-11 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-11 table tbody").append(markup);
    });
    $(".remove-11").click(function () {
        $("#acesso-11 table tbody tr:last-child").remove();
    });

    $(".row-12").click(function () {
        var qra = $("#border-12 .qra").val();
        var placa = $("#border-12 .placa").val();
        var entrada = $("#border-12 .entrada").val();
        var qrr = $("#border-12 .qrr").val();
        var saida = $("#border-12 .saida").val();
        var markup = "<tr><td>" + qra + "</td><td>" + placa + "</td><td>" + entrada + "</td><td>" + qrr + "</td><td>" + saida + "</td><td><input type='checkbox' name='record'></td></tr>";
        $("#acesso-12 table tbody").append(markup);
    });
    $(".remove-12").click(function () {
        $("#acesso-12 table tbody tr:last-child").remove();
    });
});

$(document).ready(function () {
    $("#1sul").click(function () {
        $("#acesso-1").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#2sul").click(function () {
        $("#acesso-2").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#rondasul").click(function () {
        $("#acesso-3").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#4sul").click(function () {
        $("#acesso-4").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#5sul").click(function () {
        $("#acesso-5").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#6sul").click(function () {
        $("#acesso-6").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#7sul").click(function () {
        $("#acesso-7").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-8, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#8sul").click(function () {
        $("#acesso-8").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-43, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-9, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#1suljab").click(function () {
        $("#acesso-9").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-10, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#2suljab").click(function () {
        $("#acesso-10").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-11, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#3suljab").click(function () {
        $("#acesso-11").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-12").hide();
    });
});

$(document).ready(function () {
    $("#4suljab").click(function () {
        $("#acesso-12").fadeToggle(500);
        $("form").fadeIn(500);
        $("#acesso-1, #acesso-2, #acesso-3, #acesso-4, #acesso-5, #acesso-6, #acesso-7, #acesso-8, #acesso-9, #acesso-10, #acesso-11").hide();
    });
});

$(document).ready(function () {
    $("#sim-1").click(function () {
        $("#sim-1").hide();
        $("#nao-1").fadeIn(1000);
    });
    $("#nao-1").click(function () {
        $("#nao-1").hide();
        $("#sim-1").fadeIn(1000);
    });
});


$(document).ready(function () {
    $("#sim-2").click(function () {
        $("#sim-2").hide();
        $("#nao-2").fadeIn(1000);
    });
    $("#nao-2").click(function () {
        $("#nao-2").hide();
        $("#sim-2").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-3").click(function () {
        $("#sim-3").hide();
        $("#nao-3").fadeIn(1000);
    });
    $("#nao-3").click(function () {
        $("#nao-3").hide();
        $("#sim-3").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-4").click(function () {
        $("#sim-4").hide();
        $("#nao-4").fadeIn(1000);
    });
    $("#nao-4").click(function () {
        $("#nao-4").hide();
        $("#sim-4").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-5").click(function () {
        $("#sim-5").hide();
        $("#nao-5").fadeIn(1000);
    });
    $("#nao-5").click(function () {
        $("#nao-5").hide();
        $("#sim-5").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-6").click(function () {
        $("#sim-6").hide();
        $("#nao-6").fadeIn(1000);
    });
    $("#nao-6").click(function () {
        $("#nao-6").hide();
        $("#sim-6").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-7").click(function () {
        $("#sim-7").hide();
        $("#nao-7").fadeIn(1000);
    });
    $("#nao-7").click(function () {
        $("#nao-7").hide();
        $("#sim-7").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-8").click(function () {
        $("#sim-8").hide();
        $("#nao-8").fadeIn(1000);
    });
    $("#nao-8").click(function () {
        $("#nao-8").hide();
        $("#sim-8").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-9").click(function () {
        $("#sim-9").hide();
        $("#nao-9").fadeIn(1000);
    });
    $("#nao-9").click(function () {
        $("#nao-9").hide();
        $("#sim-9").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-10").click(function () {
        $("#sim-10").hide();
        $("#nao-10").fadeIn(1000);
    });
    $("#nao-10").click(function () {
        $("#nao-10").hide();
        $("#sim-10").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-11").click(function () {
        $("#sim-11").hide();
        $("#nao-11").fadeIn(1000);
    });
    $("#nao-11").click(function () {
        $("#nao-11").hide();
        $("#sim-11").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-12").click(function () {
        $("#sim-12").hide();
        $("#nao-12").fadeIn(1000);
    });
    $("#nao-12").click(function () {
        $("#nao-12").hide();
        $("#sim-12").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-13").click(function () {
        $("#sim-13").hide();
        $("#nao-13").fadeIn(1000);
    });
    $("#nao-13").click(function () {
        $("#nao-13").hide();
        $("#sim-13").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-14").click(function () {
        $("#sim-14").hide();
        $("#nao-14").fadeIn(1000);
    });
    $("#nao-14").click(function () {
        $("#nao-14").hide();
        $("#sim-14").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-15").click(function () {
        $("#sim-15").hide();
        $("#nao-15").fadeIn(1000);
    });
    $("#nao-15").click(function () {
        $("#nao-15").hide();
        $("#sim-15").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-16").click(function () {
        $("#sim-16").hide();
        $("#nao-16").fadeIn(1000);
    });
    $("#nao-16").click(function () {
        $("#nao-16").hide();
        $("#sim-16").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-17").click(function () {
        $("#sim-17").hide();
        $("#nao-17").fadeIn(1000);
    });
    $("#nao-17").click(function () {
        $("#nao-17").hide();
        $("#sim-17").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-18").click(function () {
        $("#sim-18").hide();
        $("#nao-18").fadeIn(1000);
    });
    $("#nao-18").click(function () {
        $("#nao-18").hide();
        $("#sim-18").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-19").click(function () {
        $("#sim-19").hide();
        $("#nao-19").fadeIn(1000);
    });
    $("#nao-19").click(function () {
        $("#nao-19").hide();
        $("#sim-19").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-20").click(function () {
        $("#sim-20").hide();
        $("#nao-20").fadeIn(1000);
    });
    $("#nao-20").click(function () {
        $("#nao-20").hide();
        $("#sim-20").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-21").click(function () {
        $("#sim-21").hide();
        $("#nao-21").fadeIn(1000);
    });
    $("#nao-21").click(function () {
        $("#nao-21").hide();
        $("#sim-21").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-22").click(function () {
        $("#sim-22").hide();
        $("#nao-22").fadeIn(1000);
    });
    $("#nao-22").click(function () {
        $("#nao-22").hide();
        $("#sim-22").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-23").click(function () {
        $("#sim-23").hide();
        $("#nao-23").fadeIn(1000);
    });
    $("#nao-23").click(function () {
        $("#nao-23").hide();
        $("#sim-23").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-24").click(function () {
        $("#sim-24").hide();
        $("#nao-24").fadeIn(1000);
    });
    $("#nao-24").click(function () {
        $("#nao-24").hide();
        $("#sim-24").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-25").click(function () {
        $("#sim-25").hide();
        $("#nao-25").fadeIn(1000);
    });
    $("#nao-25").click(function () {
        $("#nao-25").hide();
        $("#sim-25").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-26").click(function () {
        $("#sim-26").hide();
        $("#nao-26").fadeIn(1000);
    });
    $("#nao-26").click(function () {
        $("#nao-26").hide();
        $("#sim-26").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-27").click(function () {
        $("#sim-27").hide();
        $("#nao-27").fadeIn(1000);
    });
    $("#nao-27").click(function () {
        $("#nao-27").hide();
        $("#sim-27").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-28").click(function () {
        $("#sim-28").hide();
        $("#nao-28").fadeIn(1000);
    });
    $("#nao-28").click(function () {
        $("#nao-28").hide();
        $("#sim-28").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-29").click(function () {
        $("#sim-29").hide();
        $("#nao-29").fadeIn(1000);
    });
    $("#nao-29").click(function () {
        $("#nao-29").hide();
        $("#sim-29").fadeIn(1000);
    });
});


$(document).ready(function () {
    $("#sim-30").click(function () {
        $("#sim-30").hide();
        $("#nao-30").fadeIn(1000);
    });
    $("#nao-30").click(function () {
        $("#nao-30").hide();
        $("#sim-30").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-31").click(function () {
        $("#sim-31").hide();
        $("#nao-31").fadeIn(1000);
    });
    $("#nao-31").click(function () {
        $("#nao-31").hide();
        $("#sim-31").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-32").click(function () {
        $("#sim-32").hide();
        $("#nao-32").fadeIn(1000);
    });
    $("#nao-32").click(function () {
        $("#nao-32").hide();
        $("#sim-32").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-33").click(function () {
        $("#sim-33").hide();
        $("#nao-33").fadeIn(1000);
    });
    $("#nao-33").click(function () {
        $("#nao-33").hide();
        $("#sim-33").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-34").click(function () {
        $("#sim-34").hide();
        $("#nao-34").fadeIn(1000);
    });
    $("#nao-34").click(function () {
        $("#nao-34").hide();
        $("#sim-34").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-35").click(function () {
        $("#sim-35").hide();
        $("#nao-35").fadeIn(1000);
    });
    $("#nao-35").click(function () {
        $("#nao-35").hide();
        $("#sim-35").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#sim-36").click(function () {
        $("#sim-36").hide();
        $("#nao-36").fadeIn(1000);
    });
    $("#nao-36").click(function () {
        $("#nao-36").hide();
        $("#sim-36").fadeIn(1000);
    });
});
