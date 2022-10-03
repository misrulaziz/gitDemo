//import module chai dengan fungsi "expect"
const { expect } = require('chai');

//import fungsi page_objects
const { putUsers } = require('../page_objects/users.js');

const payloadUpdate = {
    "name": "misrulaziz",
    "job": "jobseeker"
}

/*
buat kerangka describe untuk penjelasan
seperti nama service, nama endpoint,
method, dan path endpoint
berikan tagging @get @getPingTest untuk running spesifik test
*/
describe('@put @putUpdateUser EDITH - Put Update User PUT /api/users', () => {
    //buat kerangka kategori (optional)
    //jika ada kategori describe untuk Positive dan Negative
	//describe('Positive Testing', () => {
        //buat it untuk test
		it('As a User, I should be able to successfully request PUT update user', async () => {
            //buat konstanta "response" dan memanggil fungsi "getPing"
            const response = await putUsers(payloadUpdate, 1);
            console.log(response.body);
            //konstanta "response" dilakukan validasi
            //actual results == expected results, jika tidak sesuai maka ditampilkan response actualnya
			expect(response.status).to.equal(200, 'Salah nih om');
        });
    
	//});
});