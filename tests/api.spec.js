const { test, expect } = require('@playwright/test');

test('Mocking the GET/POST Response', async ({ page }) => {

    await page.route('https://jsonplaceholder.typicode.com/posts', async route => {

        await route.fulfill({
            status : 401,
            contentType : 'application/json',
            body : JSON.stringify([{title : 'Mocking API' , id : 1}]),
        });
    });

    // call the api

    await page.goto('https://jsonplaceholder.typicode.com/posts');

    // validation the fake data
    const text = await page.locator('body').innerText();
    await expect(text).toContain('Mocking API');
});


// 1) GET   -> Fetch all Posts..

test('GET: Fetch all Posts', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Post fetched: ", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST   -> Create a new Post with the data..

test('POST - Creating the new post', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "QA Automation with Playwright",
            body: "This post is created for API",
            userId: 20
        }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log("Created Post ID: ", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('QA Automation with Playwright')
});

// 3) PUT  -> Updating an existing Post

test('PUT: Update a post', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Using Playwright APIRequestContext',
            body: "This Post is updated to the latest version",
            userId: 20
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("updated Post Title: ", body.title);
    expect(body.title).toBe('Using Playwright APIRequestContext');
});

// 4) DELETE    -> Delete a post

test('DELETE : Delete a Post', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("Post deleted successfully");

});