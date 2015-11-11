var itunes = $("a.button-secondary:contains('iTunes')").attr("href");
$("a.button-secondary:contains('iTunes')").attr("href", itunes + '&hd=true').html('iTunes HD Feed');
