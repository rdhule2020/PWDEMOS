    import {Page, Locator} from '@playwright/test';

    export class HomePage
    {
        private readonly page:Page;
        private readonly productList:Promise<Array<Locator>>;
        private readonly addToCartButton:Locator;
        private readonly cartLink:Locator;


        constructor(page:Page)
        {
            this.page =page;
            this.productList= this.page.locator('div#tbodyid div.card h4.card-title a').all();
            this.addToCartButton = this.page.locator('a:has-text("Add to cart")');
            this.cartLink = this.page.locator('#cartur');

        }


        // Method to add a specific product to cart
        async addProductToCart(productName: string):Promise<void>
        {
                const productElements = this.productList;
                for(const product of await productElements)
                {
                    const name = await product.textContent();

                        if(name?.trim()===productName)
                        {
                            await product.click();
                            break;
                        }
                }

                    // Handle alert/ dialog after clicking "Add to cart"

                this.page.once('dialog', async (dialog) =>
                {
                    if(dialog.message().includes('added'))
                    {
                        await dialog.accept();
                    }
                });
                
            await this.addToCartButton.click();
        }

            async gotoCart()
                {
                    await this.cartLink.click();
                }
    }
