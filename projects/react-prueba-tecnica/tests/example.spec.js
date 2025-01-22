// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'localhost:5173/'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/`


test('app shows random fact an image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({textContent , imageSrc})

  await expect(textContent).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('hola')).toBeTruthy()
})

