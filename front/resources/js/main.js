$(document).ready(() => {
    $(".button-collapse").sideNav({
        edge: 'right'
    });

    $('select').material_select();

    // si val en cantidad <= 0
    $('input[type="number"]').bind('keyup mouseup', function(){
        let val = $(this).val();
        if(val <= 0){
            $(this).val(null);
        }
    });

    $('tr td:first-child').css('width', '40%');
    $('tr td:nth-child(2)').css('width', '5%');
    $('tr td:nth-child(3)').css('width', '15%');
    $('tr td:nth-child(3)').css('text-align', 'center');
    $('tr td:nth-child(4)').css('width', '25%');

    $('tr th:first-child').css('width', '40%');
    $('tr th:nth-child(2)').css('width', '5%');
    $('tr th:nth-child(3)').css('width', '15%');
    $('tr th:nth-child(3)').css('text-align', 'center');
    $('tr th:nth-child(4)').css('width', '25%');
});