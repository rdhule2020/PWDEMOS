
import {test, expect} from "@playwright/test";
test.beforeAll('Before All',async()=>{
    console.log('This ia before All......')
})

test.afterAll('After All',async()=>{
    console.log('This ia After All......')
})

test.beforeEach('Before Each', async()=>{
console.log("This is BeforeEach...");
})

test.afterEach('After Each ', async()=>{
console.log("This is AfterEach...");
})

test("Test1", async()=>{
   
    console.log("This is Test1...");
});

test("Test2", async()=>{
    console.log("This is Test2...");
});


test("Test3", async()=>{
    console.log("This is Test3...");
});


test("Test4", async()=>{
    console.log("This is Test4...");
});

