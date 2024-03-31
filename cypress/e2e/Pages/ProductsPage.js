export class ProductPage{

    static addItemToCart(itemName){
        cy.contains(itemName).then(item => {
            cy.wrap(item).parent('[class="inventory_item_label"]').parent("[class='inventory_item_description']")
            .find("button").click()
        })
    }

    static cartItemQuantityEquals(cartItemsQuantity){
        cy.get("[class='shopping_cart_link']").children().then(cart => {
            expect(cart.text()).to.equal(cartItemsQuantity)
        })
    }

    static clearShoppingCart(){
        cy.get("[class='shopping_cart_link']").click()
        cy.get("[class='btn btn_secondary btn_small cart_button']").each(el => {
            cy.wrap(el.click())
        })
    }

}