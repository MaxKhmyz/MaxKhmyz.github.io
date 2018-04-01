$(document).ready(function() {
        // Ñîçäàåì äâå ïåðåìåííûå ñ íàçâàíèÿìè ìåñÿöåâ è íàçâàíèÿìè äíåé.
        var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; 
        var dayNames= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 
        // Ñîçäàåì îáúåêò newDate()
        var newDate = new Date();
        // "Äîñòàåì" òåêóùóþ äàòó èç îáúåêòà Date
        newDate.setDate(newDate.getDate());
        // Ïîëó÷àåì äåíü íåäåëè, äåíü, ìåñÿö è ãîä
        $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
 
        setInterval( function() {
            // Ñîçäàåì îáúåêò newDate() è ïîêàçûâàåò ñåêóíäû
            var seconds = new Date().getSeconds();
            // Äîáàâëÿåì íîëü â íà÷àëî öèôðû, êîòîðûå äî 10
            $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
 
        setInterval( function() {
            // Ñîçäàåì îáúåêò newDate() è ïîêàçûâàåò ìèíóòû
            var minutes = new Date().getMinutes();
            // Äîáàâëÿåì íîëü â íà÷àëî öèôðû, êîòîðûå äî 10
            $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
 
        setInterval( function() {
            // Ñîçäàåì îáúåêò newDate() è ïîêàçûâàåò ÷àñû
            var hours = new Date().getHours();
            // Äîáàâëÿåì íîëü â íà÷àëî öèôðû, êîòîðûå äî 10
            $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);				
    });