//import module chai dengan fungsi "expect"
const { expect } = require('chai');

//import fungsi page_objects
const { getUsers, getSingleUser } = require('../page_objects/users.js');

/*
buat kerangka describe untuk penjelasan
seperti nama service, nama endpoint,
method, dan path endpoint
berikan tagging @get @getPingTest untuk running spesifik test
*/
describe('@get @getUsersList EDITH - Get User List GET /api/users', () => {
    //buat kerangka kategori (optional)
    //jika ada kategori describe untuk Positive dan Negative
	//describe('Positive Testing', () => {
        //buat it untuk test
		it('As a User, I should be able to successfully request GET user list', async () => {
            //buat konstanta "response" dan memanggil fungsi "getPing"
            const response = await getUsers();
            //konstanta "response" dilakukan validasi
            //actual results == expected results, jika tidak sesuai maka ditampilkan response actualnya
			expect(response.status).to.equal(200, response.body.message);
        });
    
        it('@getListDoang As a User, I should be able to successfully request GET single user', async () => {
            //buat konstanta "response" dan memanggil fungsi "getPing"
            const response = await getSingleUser();
            //konstanta "response" dilakukan validasi
            //actual results == expected results, jika tidak sesuai maka ditampilkan response actualnya
            expect(response.status).to.equal(200, response.body.message);
        });
	//});
});