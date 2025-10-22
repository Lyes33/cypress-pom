import { LoginPage } from "../pages/login.page"
import{email, password } from '../fixtures/example.json'

describe('template spec', () => {
  const loginPage = new LoginPage
  it('passes', () => {
    loginPage.visit('/IN******/web/WFS/****-FR-Site/fr_FR/-/EUR/ViewUserLogin-Login')
    loginPage.login(email, password)
    loginPage.isUserConnected()
  })
})
