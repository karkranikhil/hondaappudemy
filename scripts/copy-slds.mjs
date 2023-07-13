import fs from 'fs';

fs.cp('./node_modules/@salesforce-ux/design-system/assets', './src/assets', {recursive:true}, (err)=>{
    if(err){
        console.error(err);
    } else {
        console.log('SLDS Copied');
    }
})
