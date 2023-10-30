const { writeFileSync, existsSync } = require("fs")
console.log(process.argv)
const count = process.argv[2]
const dirPath = process.argv[3]
const path = __dirname
const dir = `${path}/${dirPath}/`
/**
 * @name createIndexs
 * @desc 生成INDEX文件，如果存在则跳过
 */
function createIndexs(){
    let indexArr = []
    for (let index = 0; index < count; index++) {
        indexArr.push(`INDEX${index}`)
    }
    console.log(dir)
    indexArr.forEach((fileName)=>{
        if(existsSync(`${dir}/${fileName}`)){
            return
        }else{
            writeFileSync(`${dir}/${fileName}.md`, `# 脚本生成的${fileName}`)
        }
    })
}

createIndexs()