import { ProductPage } from "./Pages/ProductsPage"

describe('Add items to cart', () => {

 beforeEach("Login as a standart user", () => {cy.loginAsStandartUser()})

  it("Add one item to cart", () => {
    ProductPage.addItemToCart("Sauce Labs Backpack")
    ProductPage.cartItemQuantityEquals("1");
  })

  afterEach("Clear cart", () => {
    ProductPage.clearShoppingCart()
  })
})