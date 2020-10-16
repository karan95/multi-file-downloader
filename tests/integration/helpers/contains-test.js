import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | contains', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('arr', [1, 2, 3]);

    await render(hbs`{{contains arr 1}}`);

    assert.equal(this.element.textContent.trim(), "true");
  });
});
