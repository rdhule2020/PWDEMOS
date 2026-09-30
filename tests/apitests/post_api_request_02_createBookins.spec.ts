/**
 * Test : create booking
 * Request : Post
 * Request body : JSON File
 */

import {test, expect} from "@playwright/test";
import * as fs from "fs";

test("Create Post request using JSON file",async ({request})=>{

    //request body : read data from json
    const jsonFile = "testData/post_request_body.json";
    const requestBody:any =JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
    
    //send post request
    const response=await request.post("/booking",{data:requestBody});
    
    const responseBody = await response.json();
    console.log(await response.json());
    

    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");

    // validate details
    const booking = responseBody.booking;


    expect(booking).toMatchObject(  {
        firstname : requestBody.firstname,
        lastname : requestBody.lastname,
        totalprice : requestBody.totalprice,
        depositpaid : requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds
    });

        //validate booking dates
        expect(booking.bookingdates).toMatchObject(
            {
            checkin :requestBody.bookingdates.checkin,
            checkout :requestBody.bookingdates.checkout,
        });

});