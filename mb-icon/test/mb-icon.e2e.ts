import { newE2EPage } from '@stencil/core/testing';

describe('mb-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mb-icon></mb-icon>');

    const element = await page.find('mb-icon');
    expect(element).toHaveClass('hydrated');
  });
});
