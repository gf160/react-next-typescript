import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import { remark} from "remark";
import remarkHtml from "remark-html";

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

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDir);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(_id: string){
    const fullPath = path.join(postsDir, `${_id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    //use gray-matter
    const matterResult = matter(fileContents);

    const processedContents = await remark()
        .use(remarkHtml)
        .process(matterResult.content)
    const contentHtml = processedContents.toString();

    return {
        id: _id,
        contentHtml,
        ...(matterResult.data as {date: string, title: string})
    }
}
