import {test, expect} from '@playwright/test';

test.describe('First RecordPlay', () => {
    test('test', async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', {name: 'Login'}).click();
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
        await page.locator('span.oxd-userdropdown-tab').locator('i.oxd-icon').click();
        await page.getByRole('menuitem', {name: 'Logout'}).click();
        await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
    });
})