import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-downloader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders empty component', async function(assert) {
    this.set('fileStatList', []);

    await render(hbs`{{file-downloader}}`);

    assert.equal(findAll('.fd-table').length, 0, '');
  });

  test('it renders component header controls and table data', async function(assert) {
    this.set('data', [
      {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'},
      {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'}
    ]);

    await render(hbs`{{file-downloader fileStatList=data}}`);

    assert.equal(findAll('.fd-table').length, 1, '');
  });

  test('on click of check all button, it selects all available files', async function(assert) {
    this.set('fileStatList', []);

    await render(hbs`{{file-downloader}}`);

    assert.equal(findAll('.fd-table').length, 0, '');
  });
});
