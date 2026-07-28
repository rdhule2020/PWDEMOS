import { Page, Locator } from '@playwright/test';

export class CartPage {

    private readonly page: Page;
    private readonly ProductNamesInCart: Promise<Array<Locator>>;
    

    constructor(page: Page) {
        this.page = page;

        this.ProductNamesInCart = this.page.locator('#tbodyid tr td:nth-child(2)').all();

    }

    async checkProductInCart(productName: string): Promise<boolean> {
        const products = await this.ProductNamesInCart;
        for (const product of products) {
            const name = (await product.textContent())?.trim();
            console.log(name);
            if (name === productName) {
                return true;
            }
        }
        return false;
    }

}