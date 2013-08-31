$(function(){
    $('.all').on('click', function(){
        $('.table__row_flow_income').css({display: 'table-row'});
        $('.table__row_flow_outgo').css({display: 'table-row'});
    });
    $('.income').on('click', function(){
        $('.table__row_flow_income').css({display: 'table-row'});
        $('.table__row_flow_outgo').css({display: 'none'});
    });
    $('.outcome').on('click', function(){
        $('.table__row_flow_outgo').css({display: 'table-row'});
        $('.table__row_flow_income').css({display: 'none'});
    });
})