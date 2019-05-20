const app = new Vue({
	//el objeto sera administrado por view
	el: '#app',

	data: {	
		titulo:'Hola M',
		//array
		frutas:['manzana', 'pera','platano'],
		//array de objetos

		frutas2:[
		{nombre: 'Pera', estado: 'verde'},
		{nombre: 'manzana', estado: 'rojo'},
		{nombre: 'mango', estado: 'amarillo'}
		]


	}
})