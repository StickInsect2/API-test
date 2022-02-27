const newman = require('newman');
 
newman.run({
    collection: require('./storm.postman_collection.json'), // can also provide a URL or path to a local JSON file.
    reporters: 'html',
	environment: 'storm.postman_environment.json',
    reporter: {
        html: {
            export: './htmlResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
            template: 'htmlreqres.hbs' // optional, this will be picked up relative to the directory that Newman runs in.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});