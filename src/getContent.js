import fs, { readFileSync, readdirSync } from 'fs'
import path from 'path'
const contentDir = './content'

function getContent()
{


    const contentFiles = readdirSync(contentDir);
    console.log(contentFiles)
    let contents = []
    contentFiles.forEach(file =>{
        console.log(file);
        const content =readFileSync(path.join(contentDir,file)).toString();
        console.log(content);
        contents.push(content);

    })
    return contents;


}

export default getContent;