import { test, expect } from '@playwright/test';
import { DragDropSliderPage } from '../Pages/DragDropSliderPage';

test('Drag & Drop Slider Test', async ({ page }) => {
  const sliderPage = new DragDropSliderPage(page);
  await sliderPage.navigate();

  await expect(sliderPage.slider).toBeVisible();
  await sliderPage.setSliderTo();
  const value = await sliderPage.getSliderValue();
  expect(value).toBe('95');
});
