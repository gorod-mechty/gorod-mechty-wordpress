$(function(){
    $('.all').on('click', function(){
        if($(this).hasClass('cashflow-curent'){
            return;
        })
        $('.table__row_flow_income, .table__row_flow_outgo').css({display: 'table-row'});
        $('.link-block a').removeClass('cashflow-curent');
        $('.link-block a').addClass('b-link_type_dashed');
        $(this).addClass('cashflow-curent');
        $(this).removeClass('b-link_type_dashed');
    });
    $('.income').on('click', function(){
        if($(this).hasClass('cashflow-curent'){
            return;
        })
        $('.table__row_flow_income').css({display: 'table-row'});
        $('.table__row_flow_outgo').css({display: 'none'});
        $('.link-block a').removeClass('cashflow-curent');
        $('.link-block a').addClass('b-link_type_dashed');
        $(this).addClass('cashflow-curent');
        $(this).removeClass('b-link_type_dashed');
    });
    $('.outcome').on('click', function(){
        if($(this).hasClass('cashflow-curent'){
            return;
        })
        $('.table__row_flow_outgo').css({display: 'table-row'});
        $('.table__row_flow_income').css({display: 'none'});
        $('.link-block a').removeClass('cashflow-curent');
        $('.link-block a').addClass('b-link_type_dashed');
        $(this).addClass('cashflow-curent');
        $(this).removeClass('b-link_type_dashed');
    });
})