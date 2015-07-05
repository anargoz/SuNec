/*jslint browser: true, plusplus: true, sloppy: true*/
/*global $, jQuery, alert*/
/* Para crear mas entradas de Hosts y su boton correspondiente de calcular */
$(function () {
    var cont = 0,
        AltIP1 = 0,
        AltIP2 = 0,
        Diag = 9,
        iPoct1 = 0,
        iPoct2 = 0,
        iPoct3 = 0,
        iPoct4 = 0,
        iPoct5 = 0,
        IPf = 0,
        Nodo = 0,
        IPf2 = 0;
    $("#Mas").click(function () {
        var Host = (parseInt(document.getElementsByName("Hosts")[Nodo].value, 10)),
            DiRed = "",
            i = 0,
            j = 0,
            k = 0,
            Msk = 0,
            IPFin = 0,
            Inicio = "",
            Final = "",
            Broad = "",
            SubMsk = "",
            Clase = "",
            iPoct2f = 0,
            iPoct4f = 0,
            iPoct5f = 0,
            iPoct3f = 0;
        /*-----------Valor de Host--------- */
        if (isNaN(Host) || Host <= 0) {
//            alert("Debes introducir la cantidad de Hosts");
            Materialize.toast('<span>Introduce un número valido de Hosts</span>', 5000);
        } else {
            if (Nodo === 0) {
                iPoct1 = (parseInt(document.getElementsByName("IP")[0].value, 10)) + iPoct1;
                AltIP1 = (parseInt(document.getElementsByName("IP")[0].value, 10));
                iPoct2 = (parseInt(document.getElementsByName("IP")[1].value, 10)) + iPoct2;
                AltIP2 = (parseInt(document.getElementsByName("IP")[1].value, 10));
                iPoct3 = (parseInt(document.getElementsByName("IP")[2].value, 10)) + iPoct3;
                iPoct4 = (parseInt(document.getElementsByName("IP")[3].value, 10)) + iPoct4;
            } else {
//                iPoct1 = iPoct1;
                AltIP1 = iPoct1;
//                iPoct2 = iPoct2;
                AltIP2 = iPoct2;
//                iPoct3 = iPoct3;
//                iPoct4 = iPoct4;
            }

            Nodo = Nodo + 1;

            if (iPoct1 >= 0 && iPoct1 <= 127) {
                Clase = "A";
            }
            if (iPoct1 >= 128 && iPoct1 <= 191) {
                Clase = "B";
            } else {
                Clase = "C";
            }
            DiRed = AltIP1 + "." + iPoct2 + "." + iPoct3 + "." + iPoct4;
            if (Host > 32766 && Host <= 8388606) {
                i = 8388606;
                j = 128;
                k = 0;
                Msk = j;
                Diag = 9;

                while (j > 0) {
                    if (Host <= i && Host > i / 2 - 1) {
                        Msk = Msk + k;
                        iPoct2 = iPoct2 + j;
                        iPoct2f = iPoct2 - j;
                        iPoct4f = iPoct4 + 1;
                        IPFin = iPoct2 - 1;
                        j = 0;

                    } else {
                        Msk = Msk + k;
                        Diag = Diag + 1;
                        j = j / 2;
                        k = j;
                        i = i / 2 - 1;
                    }
                }
                Inicio = AltIP1 + "." + iPoct2f + "." + iPoct3 + "." + iPoct4f;
                Final = AltIP1 + "." + IPFin + ".255.254";
                Broad = AltIP1 + "." + IPFin + ".255.255";
                SubMsk = "255." + Msk + ".0.0";
            }
     /*--------------------------------------------------------------------------------------------------------*/
            if (Host > 126 && Host <= 32766) {
                i = 32766;
                j = 128;
                k = 0;
                Msk = j;
                Diag = 17;

                while (j > 0) {
                    if (Host <= i && Host > i / 2 - 1) {
                        Msk = Msk + k;
                        iPoct3 = iPoct3 + j;
                        iPoct3f = iPoct3 - j;
                        iPoct4f =  iPoct4 + 1;
                        IPFin = iPoct3 - 1;
                        k = j;
                        j = 0;

                    } else {
                        Msk = Msk + k;
                        Diag = Diag + 1;
                        j = j / 2;
                        k = j;
                        i = i / 2 - 1;
                    }
                }
                if (iPoct3f > 255) {
                    iPoct2 = iPoct2 + 1;
                    iPoct3f = 0;
                    iPoct3 = 0;
                    i = 32766;
                    j = 128;
                    k = 0;
                    Msk = j;
                    Diag = 17;

                    while (j > 0) {
                        if (Host <= i && Host > i / 2 - 1) {
                            Msk = Msk + k;
                            iPoct3 = iPoct3 + j;
                            iPoct3f = iPoct3 - j;
                            iPoct4f =  iPoct4 + 1;
                            IPFin = iPoct3 - 1;
                            k = j;
                            j = 0;

                        } else {
                            Msk = Msk + k;
                            Diag = Diag + 1;
                            j = j / 2;
                            k = j;
                            i = i / 2 - 1;
                        }
                    }
                }
                DiRed = AltIP1 + "." + iPoct2 + "." + iPoct3f + "." + iPoct4;
                Inicio = AltIP1 + "." + iPoct2 + "." + iPoct3f + "." + iPoct4f;
                Final = AltIP1 + "." + iPoct2 + "." + IPFin + ".254";
                Broad = AltIP1 + "." + iPoct2 + "." + IPFin + ".255";
                SubMsk = "255." + "255" + "." + Msk + ".0";
            }

    /*-------------------------------------------------------------------------------------------------*/
            if (Host > 1 && Host <= 126) {
                i = 126;
                j = 128;
                k = 0;
                Msk = j;
                Diag = 25;
                while (j > 0) {
                    if (Host <= i && Host > i / 2 - 1) {
                        iPoct5 = iPoct4 + 1;
                        iPoct4 = iPoct4 + j;
                        iPoct5f = iPoct4 - j;
                        iPoct4f = iPoct4 - 2;
                        IPf = iPoct4;
                        IPFin = iPoct4 - 1;
                        Msk = Msk + k;
                        k = j;
                        j = 0;
                    } else {
                        Msk = Msk + k;
                        Diag = Diag + 1;
                        i = i / 2 - 1;
                        j = j / 2;
                        k = j;
                    }
                }
                if (iPoct4f > 255) {
                    iPoct3f = iPoct3f + 1;
                    iPoct3 = iPoct3 + 1;
                    iPoct5f = 0;
                    iPoct4 = 0;
                    iPoct4f = 0;
                    i = 126;
                    j = 128;
                    k = 0;
                    Msk = j;
                    Diag = 25;

                    while (j > 0) {
                        if (Host <= i && Host > i / 2 - 1) {
                            iPoct5 = iPoct4 + 1;
                            iPoct4 = iPoct4 + j;
                            iPoct5f = iPoct4 - j;
                            IPf2 = iPoct4 + 1;
                            iPoct4f = iPoct4 - 2;
                            IPf = iPoct4;
                            IPFin = iPoct4 - 1;
                            Msk = Msk + k;
                            k = j;
                            j = 0;
                        } else {
                            Msk = Msk + k;
                            Diag = Diag + 1;
                            i = i / 2 - 1;
                            j = j / 2;
                            k = j;
                        }
                    }
                }
                DiRed = AltIP1 + "." + iPoct2 + "." + iPoct3 + "." + iPoct5f;
                Inicio = AltIP1 + "." + iPoct2 + "." + iPoct3 + "." + iPoct5;
                Final = AltIP1 + "." + iPoct2 + "." + iPoct3 + "." + iPoct4f;
                Broad = AltIP1 + "." + iPoct2 + "." + iPoct3 + "." + IPFin;
                SubMsk = "255." + "255" + ".255" + "." + Msk;
            }
      /*--------------------------------------------------------------------------------------------------------*/
            var c2 = 0,
                table = document.createElement('table'),
                thead = document.createElement('thead'),
                tbody = document.createElement('tbody'),
                tr = document.createElement('tr'),
                th1 = document.createElement('th'),
                th2 = document.createElement('th'),
                th3 = document.createElement('th'),
                th4 = document.createElement('th'),
                th5 = document.createElement('th'),
                tit1 = document.createTextNode('Dirección de Red'),
                tit2 = document.createTextNode('Inicio'),
                tit3 = document.createTextNode('Final'),
                tit4 = document.createTextNode('BroadCast'),
                tit5 = document.createTextNode('SubMask'),
                trb = document.createElement('tr'),
                td1 = document.createElement('td'),
                td2 = document.createElement('td'),
                td3 = document.createElement('td'),
                td4 = document.createElement('td'),
                td5 = document.createElement('td'),
                col1 = document.createTextNode(DiRed + "/" + Diag),
                col2 = document.createTextNode(Inicio),
                col3 = document.createTextNode(Final),
                col4 = document.createTextNode(Broad),
                col5 = document.createTextNode(SubMsk);

            table.setAttribute("class", "responsive-table");
            table.setAttribute("name", "Result");
            for (c2 = 1; c2 < 4; c2++) {
                th1.appendChild(tit1);
                th2.appendChild(tit2);
                th3.appendChild(tit3);
                th4.appendChild(tit4);
                th5.appendChild(tit5);
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tr.appendChild(th4);
                tr.appendChild(th5);

                td1.appendChild(col1);
                td2.appendChild(col2);
                td3.appendChild(col3);
                td4.appendChild(col4);
                td5.appendChild(col5);
                trb.appendChild(td1);
                trb.appendChild(td2);
                trb.appendChild(td3);
                trb.appendChild(td4);
                trb.appendChild(td5);

                thead.appendChild(tr);
                tbody.appendChild(trb);
            }

            document.getElementById("Contenedor").appendChild(table);
            document.getElementsByName("Result")[cont].appendChild(thead);
            document.getElementsByName("Result")[cont].appendChild(tbody);
            cont = cont + 1;
            if (isNaN(AltIP1)) {
                Materialize.toast('<span>BATMAN!!!!</span>', 2000);
            }
        }
    });
});
/*--------------------------------------------------------------------------------------------------------------------*/
$(function () {
    var i = 0,
        idN = 0;
    $("#Mas").click(function () {
        var Row = document.createElement("div"),
            Input = document.createElement("div"),
            Texto = document.createElement("input"),
            Etiqueta = document.createElement("label"),
            Linea = document.createElement("li"),
            Vinc = document.createElement("a"),
            Host = (parseInt(document.getElementsByName("Hosts")[i].value, 10));
        if (isNaN(Host) || Host <= 0) {
            i = i;
        } else {
            idN = i + 1;
            Etiqueta.innerHTML = "#Hosts";
            Texto.type = "number";
            Texto.className = "validate";
            Texto.setAttribute("name", "Hosts");
            Texto.setAttribute("onkeypress", "return isNumber(event)");
            Input.setAttribute("class", "input-field col s3");
            Input.setAttribute("name", "InputF");
            Row.className = "row";
            Row.setAttribute("name", "Fila");
            Row.setAttribute("id", "Hosts" + idN);

            document.getElementById("Contenedor").appendChild(Row);
            document.getElementsByName("Fila")[i + 1].appendChild(Input);
            document.getElementsByName("InputF")[i].appendChild(Texto);
            document.getElementsByName("InputF")[i].appendChild(Etiqueta);

            Linea.setAttribute("name", "Vinculo");
            Vinc.setAttribute("name", "Texto");
            Vinc.setAttribute("href", "#Hosts" + idN);

            document.getElementById("nav-mobile").appendChild(Linea);
            document.getElementsByName("Vinculo")[i + 1].appendChild(Vinc);
            document.getElementsByName("Texto")[i].innerHTML = Host + " Hosts";


            Materialize.toast('<span>Se agregaron &nbsp</span> ' + Host + ' <span>&nbsp Hosts</span>', 3000);
            i = i + 1;
        }
    });
});
