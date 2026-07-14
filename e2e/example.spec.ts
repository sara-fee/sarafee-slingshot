import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Your Name/)
  })

  test('should have navigation links', async ({ page }) => {
    await page.goto('/')
    
    // Check for navigation links
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /projects/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /about/i }).click()
    await expect(page).toHaveURL(/\/about/)
    await expect(page.getByRole('heading', { name: /about me/i })).toBeVisible()
  })

  test('should be accessible', async ({ page }) => {
    await page.goto('/')
    
    // Check for skip to main content link
    const skipLink = page.getByText(/skip to main content/i)
    await expect(skipLink).toBeInViewport({ ratio: 0 })
  })

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /your name/i })).toBeVisible()
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.getByRole('heading', { name: /your name/i })).toBeVisible()
  })
})

test.describe('Contact Form', () => {
  test('should submit form successfully', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill out the form
    await page.getByLabel(/name/i).fill('John Doe')
    await page.getByLabel(/email/i).fill('john@example.com')
    await page.getByLabel(/message/i).fill('This is a test message')
    
    // Submit the form
    await page.getByRole('button', { name: /send message/i }).click()
    
    // Check for success message
    await expect(page.getByText(/thank you/i)).toBeVisible()
  })

  test('should show validation errors', async ({ page }) => {
    await page.goto('/contact')
    
    // Try to submit empty form
    await page.getByRole('button', { name: /send message/i }).click()
    
    // Check for validation errors
    await expect(page.getByText(/required/i).first()).toBeVisible()
  })
})
