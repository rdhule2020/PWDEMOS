import {test, expect} from "@playwright/test";

test('Get booking details by Id- path param', async ({request})=>{

    const bookingId= 4681;

    const response = await request.get(`/booking/${bookingId}`)

    const responseBody= await response.json();
    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


})




test('Get booking details by Name- path param', async ({request})=>{

    const firstname= "Jim";
    const lastname ="Brown";



    const response = await request.get("/booking",{
                        params:
                        {
                            firstname,
                            lastname
                        }
                    });

    const responseBody= await response.json();
    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //response should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody){
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
    }
    
})