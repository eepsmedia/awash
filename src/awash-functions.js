const awash = {
    
    theURL : "https://codap.xyz",   //  a stand-in

    spit: function (iText) {
        document.write(iText);
    },

    liveDemoAt: function (theURL) {
        const out = `
        <iframe src=${theURL}
            width='888px' height='666px' 
            frameborder='no' scrolling='no' allowfullscreen='true'
            webkitallowfullscreen='true' mozallowfullscreen='true'>
        </iframe>
        `
        document.write(out);
    },

    codapInNewTab: function (theURL, theText) {

        const out = `
        <a href='${theURL}' target='_blank'>
        <img src = "art/codap-logo-48.png" width='24'>&emsp;${theText}</a>
        `
        document.write(out);
    },

    insertDownloadNHANESCSV: function(dataCode, description) {

        const fname = `_csv-for-download/nhanes/${description}-${dataCode}.csv`
        const docURL = `https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2021/DataFiles/${dataCode}.htm`
        console.log(`downloading ${fname}`);

        const out = `
        <a href="${fname}" download="${description}-${dataCode}.csv" target='_blank'>
            <img class="downloadIcon" src="art/csv.png"> 
        </a>
        <a href="${docURL}">
            <img class="downloadIcon" src="art/information-icon.png"> 
        </a>
        ${description}
        `
        

        document.write(out)
    },

    downloadFile: function(path, filename) {
        // Create a new link
        const anchor = document.createElement('a');
        anchor.href = path;
        anchor.download = filename;
    
        // Append to the DOM
        document.body.appendChild(anchor);
    
        // Trigger `click` event
        anchor.click();
    
        // Remove element from DOM
        document.body.removeChild(anchor);
    }
    
}