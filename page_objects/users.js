//import module "supertest" yang digunakan untuk melakukan request http
const supertest = require('supertest');

//buat konstanta "api" dengan module supertest sebagai host
const api = supertest('https://reqres.in');

/*
buat fungsi request-nya berisi method, path, attribute yang dibutuhkan
seperti headers, body payload, params, dsb..
*/
const getUsers = () => api.get('/api/users?page=') //ini juga ditanyain yg path endpointnya
	.set('Accept', 'application/json'); //tanya ini besok accept itu apa2 aja yg perlu diperhatikan?

const getSingleUser = () => api.get('/api/users')
	.set('Accept', 'application/json');

const postCreateUser = (payload) => api.post('/api/users')
	.set('Accept', 'application/json')
	.send(payload);

const putUsers = (payloadUpdate, id) => api.put('/api/users/' + id)
	.set('Accept', 'application/json')
	.send(payloadUpdate);

//buat exports fungsi diatas, untuk bisa di konsum file test
module.exports = {
	getUsers,
	getSingleUser,
	postCreateUser,
	putUsers,
};