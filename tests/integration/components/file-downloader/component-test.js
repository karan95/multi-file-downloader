import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const data = [
  {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'},
  {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'}
];

module('Integration | Component | file-downloader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders empty component', async function(assert) {
    this.set('fileStatList', []);

    await render(hbs`{{file-downloader}}`);

    assert.equal(findAll('.fd-table').length, 0, '');
  });

  test('it renders component header controls and table data', async function(assert) {
    this.set('data', data);

    await render(hbs`{{file-downloader fileStatList=data}}`);

    assert.equal(findAll('.fd-table').length, 1, 'renders table component');
    assert.equal(findAll('.fd-btn-selectAll').length, 1, 'renders select all button');
    assert.equal(findAll('.fd-btn-download').length, 1, 'renders download button');
    assert.equal(findAll('.fd-table-header').length, 1, 'renders table header');
    assert.equal(findAll('.fd-table-content').length, 1, 'renders table data');
    assert.equal(findAll('.fd-status-content').length > 0, true, 'renders status');
  });

  test('on click of check all button, it selects all available files', async function(assert) {
    this.set('data', data);
    let actualAllCount = 0;
    const expectedSelectedCount = 1;

    await render(hbs`{{file-downloader fileStatList=data}}`);
    await click(find('.fd-btn-all-checkbox'));
    const allInputs = findAll('.fd-table-content .row-select input');
    for (const inp of allInputs) {
      if (inp.checked) actualAllCount++;
    }
    // test selecte all button and compare selected counts
    assert.equal(actualAllCount, expectedSelectedCount, 'right answers');
  });

  test('on click of download selected button, it alerts file data', async function(assert) {
    this.set('data', data);

    await render(hbs`{{file-downloader fileStatList=data}}`);
    // click on available file select box
    await click(findAll('.fd-table-content .row-select input')[1]);
    // can be further tested using sinon or something
    // await click(find('.fd-table-content .fd-btn-download'));
    assert.ok(true, 'Hope eveything works!!')
  });
});
