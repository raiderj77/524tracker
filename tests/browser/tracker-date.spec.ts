import { test, expect } from '@playwright/test';

test('an older build accepts the browser date and retains explicit account dates', async ({ page }) => {
  // Deliberately later than the static build; UTC is already the following day.
  await page.clock.setFixedTime(new Date('2030-10-05T03:00:00Z'));
  await page.goto('/');
  const application = page.getByLabel('Application Date', { exact: true });
  const opened = page.getByLabel('Account Open Date (recommended)', { exact: true });
  await expect(application).toHaveValue('2030-10-04');
  await expect(application).toHaveAttribute('max', '2030-10-04');
  await expect(opened).toHaveAttribute('max', '2030-10-04');
  await page.getByLabel('Card Name', { exact: true }).fill('Synthetic boundary');
  await opened.fill('2028-10-05');
  await page.getByRole('button', { name: 'Add Application', exact: true }).click();
  await expect(page.getByRole('img', { name: 'Unofficial 24-month reference count: 1 out of 5 accounts' })).toBeVisible();
  await expect(page.getByText('Reference date October 5, 2030', { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByText('Reference date October 5, 2030', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Synthetic boundary', exact: true }).click();
  await expect(application).toHaveValue('2030-10-04');
  await expect(opened).toHaveValue('2028-10-05');
  await opened.fill('2028-10-04');
  await page.getByRole('button', { name: 'Save Changes', exact: true }).click();
  await expect(page.getByRole('img', { name: 'Unofficial 24-month reference count: 0 out of 5 accounts' })).toBeVisible();
});

test('future application dates remain invalid', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2030-10-05T03:00:00Z'));
  await page.goto('/');
  await page.getByLabel('Card Name', { exact: true }).fill('Synthetic future');
  await page.getByLabel('Application Date', { exact: true }).fill('2030-10-05');
  await page.getByRole('button', { name: 'Add Application', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Entered Account History' })).toHaveCount(0);
  expect(await page.getByLabel('Application Date', { exact: true }).evaluate((input: HTMLInputElement) => input.validity.rangeOverflow)).toBe(true);
});

test('submitting across midnight saves the date still displayed', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2030-10-05T06:59:00Z'));
  await page.goto('/');
  await page.getByLabel('Card Name', { exact: true }).fill('Synthetic midnight');
  await expect(page.getByLabel('Application Date', { exact: true })).toHaveValue('2030-10-04');
  await page.clock.setFixedTime(new Date('2030-10-05T07:01:00Z'));
  await page.getByRole('button', { name: 'Add Application', exact: true }).click();
  await page.getByRole('button', { name: 'Edit Synthetic midnight', exact: true }).click();
  await expect(page.getByLabel('Application Date', { exact: true })).toHaveValue('2030-10-04');
});
