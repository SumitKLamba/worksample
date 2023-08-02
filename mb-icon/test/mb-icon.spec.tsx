import { newSpecPage } from '@stencil/core/testing';
import { MbIcon } from '../mb-icon';

describe('mb-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MbIcon],
      html: `<mb-icon icon="https://cdn-icons-png.flaticon.com/512/1828/1828615.png"></mb-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <mb-icon icon="https://cdn-icons-png.flaticon.com/512/1828/1828615.png">
        <button>
          <img class="w-[25px] h-[25px] m-auto" src="https://cdn-icons-png.flaticon.com/512/1828/1828615.png" />
        </button>
      </mb-icon>
    `);
  });
});
