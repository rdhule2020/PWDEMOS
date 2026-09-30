/* 
1) create new booking
2) get boooking
3) updte booking
4) delete booking

*/

import { test, expect } from "@playwright/test";
import * as fs from 'fs';

//utility function returns json file data
function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

test("Delete booking end-to-end", async ({ request }) => {


    //1) create new booking
    const postrequsetBody = readJson('testData/post_request_body.json');
    const postResponse = await request.post("/booking", { data: postrequsetBody });

    const postresponseBody = await postResponse.json();
    console.log(postresponseBody);
    const bookingid = postresponseBody.bookingid;
    console.log("Booking is created...")
    console.log("Booking Id ===> ", bookingid)

    //2)get booking
    const getResponse = await request.get(`/booking/${bookingid}`);
    const getResponseBody = await getResponse.json();
    console.log("Booking details are ....")
    console.log(getResponseBody);

    // 3) update booking (token) 
    // creating token
    const tokenrequestBody = readJson('testdata/token_request_body.json');
    const tokenresponse = await request.post('/auth', { data: tokenrequestBody });
    const tokenresponsebody = await tokenresponse.json();
    const token = tokenresponsebody.token;
    console.log("Token ======>", token);

    //4) sending update(Put)
    const updateRequestbody = readJson('testdata/put_request_body.json');
    const updateresponse = await request.put(`/booking/${bookingid}`,
        {
            headers: { "Cookie": `token=${token}` },
            data: updateRequestbody
        }
    );

    const updateresponsebody = await updateresponse.json();
    console.log("Booking details updated succesfully...")
    console.log(updateresponsebody)
    
    //5) Delete requset
    const deleteResponse = await request.delete(`/booking/${bookingid}`,
         {
            headers: { "Cookie": `token=${token}` },
        })

    expect(deleteResponse.statusText()).toBe("Created");
    expect(deleteResponse.status()).toBe(201);

    console.log("Booking details are deleted successfully...");
    
});