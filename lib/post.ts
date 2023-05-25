import fs from "fs"
import path from "path"
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){
    //posts 파일명 
    const fileNames = fs.readdirSync(postsDir);
    //['test1.md',.... ]

    const allPostsData = fileNames.map(fileName => {
        const _id = fileName.replace(/\.md$/gi, '');
        const _fullPath = path.join(postsDir, fileName);
        const _fileContents = fs.readFileSync(_fullPath, 'utf-8');
        const matterResult = matter(_fileContents);
        return {
            id:_id, ...matterResult.data as {date: string; title: string}
        }
    });

    //sort
    return allPostsData.sort((a, b) =>{
        if(a.date < b.date){
            return 1;
        } else {
            return -1
        }
    });
}