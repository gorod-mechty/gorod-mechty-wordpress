$(function(){
    $('.all').on('click', function(){
        $('.table__row_flow_income, .table__row_flow_outgo').css({display: 'table-row'});
        $('.link-block a').removeClass('cashflow-curent');
        $(this).addClass('cashflow-curent');
    });
    $('.income').on('click', function(){
        $('.table__row_flow_income').css({display: 'table-row'});
        $('.table__row_flow_outgo').css({display: 'none'});
        $('.link-block a').removeClass('cashflow-curent');
        $(this).addClass('cashflow-curent');
    });
    $('.outcome').on('click', function(){
        $('.table__row_flow_outgo').css({display: 'table-row'});
        $('.table__row_flow_income').css({display: 'none'});
        $('.link-block a').removeClass('cashflow-curent');
        $(this).addClass('cashflow-curent');
    });
})