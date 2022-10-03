//import module chai dengan fungsi "expect"
const { expect } = require('chai');

//import fungsi page_objects
const { postCreateUser } = require('../page_objects/users.js');

const payload = {
    "name": "morpheus",
    "job": "leader"
}

/*
buat kerangka describe untuk penjelasan
seperti nama service, nama endpoint,
method, dan path endpoint
berikan tagging @get @getPingTest untuk running spesifik test
*/
describe('@post @postCreateUser EDITH - Post Create User POST /api/users', () => {
    //buat kerangka kategori (optional)
    //jika ada kategori describe untuk Positive dan Negative
	//describe('Positive Testing', () => {
        //buat it untuk test
		it('@post As a User, I should be able to successfully request POST create user', async () => {
            //buat konstanta "response" dan memanggil fungsi "getPing"
            const response = await postCreateUser(payload);
            console.log(response.body);
            //konstanta "response" dilakukan validasi
            //actual results == expected results, jika tidak sesuai maka ditampilkan response actualnya
			expect(response.status).to.equal(201, 'Salah nih om');
        });
    
	//});
});