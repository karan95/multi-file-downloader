import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-downloader-demo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders FileDownloaderDemo component', async function(assert) {

    await render(hbs`<FileDownloaderDemo />`);

    assert.ok(true, 'demo component');
  });
});
