import { newSpecPage } from '@stencil/core/testing';
import { MbButton } from '../mb-button';

describe('mb-button', () => {
  it('renders a primary large button with the text', async () => {
    const page = await newSpecPage({
      components: [MbButton],
      html: `<mb-button text="Button" type="primary" size="large"></mb-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mb-button text="Button" type="primary" size="large">
        <button class="flex px-[75px] h-12 items-center justify-center bg-purple text-white font-primary text-base font-bold rounded">
          Button
        </button>
      </mb-button>
    `);
  });
});
