 const { test, expect } = require('@playwright/test');

test.beforeEach(async  ({ page }) => {

     page.goto('http://127.0.0.1:3000/codigo%20form/index.html');

});

test.describe('Test form', () => {

    test('debería mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Nombre').fill('Ana');
    });

    test('debería mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Apellidos').fill('Garcia');
    });

    test('debería mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Email').fill('jose@gmail.com');
    });
    test('debería mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Contraseña').fill('123456');
    });
    test('debería mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Contraseña').fill('123456');
    });

})