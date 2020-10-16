import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['file-downloader'],
    fileStatList: null, // arg to passed in
    selectedFilesCount: 0,
    selectedFileList: null,

    // extract total available file ids
    availableFileIds: computed('fileStatList', {
        get() {
            let fileList = [];
            for (let i in this.fileStatList) {
                if (this.fileStatList[i].status == 'available') {
                    fileList.push(parseInt(i));
                }
            }
            return fileList;
        }
    }),
    
    init() {
        this._super(...arguments);
        this.selectedFileList = [];
    },

    actions: {
      // toggle selected row with available file type
      toggleSelectedFileRow(i, e) {
        if (i > -1) {
          if (e.target.checked) {
            this.selectedFileList.pushObject(i);
            this.set('selectedFilesCount', this.selectedFilesCount + 1);
          } else {
            this.selectedFileList.removeObject(i);
            this.set('selectedFilesCount', this.selectedFilesCount - 1);
          }
        }
      },

      // toggle all rows with available file type
      toggleAllFileRows(e) {
        if (this.availableFileIds.length == 0) return;
        if (e.target.checked || e.srcElement.tagName == 'BUTTON') {
          this.selectedFileList.setObjects(this.availableFileIds);
          this.set('selectedFilesCount', this.availableFileIds.length);  
        } else {
          this.selectedFileList.setObjects([]);            
          this.set('selectedFilesCount', 0);
        }
      },

      downloadSelectedFiles() {
        // additional check for indeterminate state icon
        if (this.selectedFileList && this.selectedFileList.length > 0) {
          const downloadedData = [];
          this.selectedFileList.forEach(id => downloadedData.push(this.fileStatList[id]));
          alert(JSON.stringify(downloadedData));
        }
      }
    }
});
