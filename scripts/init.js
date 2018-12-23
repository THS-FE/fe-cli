module.exports = function fetchRemoteTemplate(repository, clone) {
    const os = require('os');
    const path = require('path');
    const download = require('download-git-repo');
    const destination = path.join(os.tmpdir(), 'fbi');
    return new Promise((resolve, reject) => {
        download(repository, destination, clone, err => {
            if (err) return reject(err)
            // let template;
            try {
                console.log(destination);
                // template = require(path.join(destination, 'master.zip'))
                // console.log(template);
            } catch (e) {
                return reject(e)
            }
            resolve();
        });
    })
}