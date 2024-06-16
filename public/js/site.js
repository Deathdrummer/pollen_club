/*//get_product


ddrPopUp({
	title: 'Новая позиция|4',
	width: 1192,
	buttons: [{id: 'сatalogItemAdd', title: 'Добавить'}],
	closeByButton: true, 
	close: 'Отмена'
}, function(catalogItemAddWin) {
	catalogItemAddWin.setData('/site/get_product', {}, function() {
		
	});
	
	
	
	







});
*/

$.get('/test/get_product', {id: 34}, function(prod) {
	console.log(123);
});