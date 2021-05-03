var o2n1;
var o2n2;
var o1n1;

var urlbase = 'http://localhost:8085/';

function suma() {
    o2n1= Number(document.getElementById("o2n1").value);
    o2n2= Number(document.getElementById("o2n2").value);
    var url = urlbase+ 'suma?x='+o2n1+'&y='+o2n2;
    $.getJSON(url,
        function(json) {
            $('#op2').html("Result: "+json.resultado);
        }
    );

}

function resta() {
    o2n1= Number(document.getElementById("o2n1").value);
    o2n2= Number(document.getElementById("o2n2").value);
    var url = urlbase+ 'resta?x='+o2n1+'&y='+o2n2;
    $.getJSON(url,
        function(json) {
            $('#op2').html("Result: "+json.resultado);
        }
    );

}

function multiplicacion() {
    o2n1= Number(document.getElementById("o2n1").value);
    o2n2= Number(document.getElementById("o2n2").value);
    var url = urlbase+ 'multiplicacion?x='+o2n1+'&y='+o2n2;
    $.getJSON(url,
        function(json) {
            $('#op2').html("Result: "+json.resultado);
        }
    );

}

function division() {
    o2n1= Number(document.getElementById("o2n1").value);
    o2n2= Number(document.getElementById("o2n2").value);
    var url = urlbase+ 'division?x='+o2n1+'&y='+o2n2;
    $.getJSON(url,
        function(json) {
            $('#op2').html("Result: "+json.resultado);
        }
    );

}

function raiz() {
    o1n1= Number(document.getElementById("o1n1").value);
    var url = urlbase+ 'raiz?x='+o1n1;
    $.getJSON(url,
        function(json) {
            $('#op1').html("Result: "+json.resultado);
        }
    );

}

function cuadrado() {
    o1n1= Number(document.getElementById("o1n1").value);
    var url = urlbase+ 'cuadrado?x='+o1n1;
    $.getJSON(url,
        function(json) {
            $('#op1').html("Result: "+json.resultado);
        }
    );

}