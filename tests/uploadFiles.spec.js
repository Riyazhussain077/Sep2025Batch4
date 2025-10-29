const { test, expect } = require('@playwright/test')

test('Upload Files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').click();

    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/Test3.pdf');

    await page.waitForTimeout(2000);
});

test.only('Multiple Files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Test3.pdf', 'tests/uploadFiles/Test4.pdf']);

    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Test3.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Test4.pdf');
    await page.waitForTimeout(3000);

    await page.locator('#filesToUpload').setInputFiles([]); // Removing Files
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    await page.waitForTimeout(3000);
});

