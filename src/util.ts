export function getArguments(argString:string){

    argString= argString.trim()
    // const args = argString.split(",");
    let parsedArgs = [];
    const parts = argString.trim().split(/\s+/)

    console.log(parts);
    parts.forEach(part=>{
        console.log(typeof part);
    })
    return "hii"

}

export function getParsedValues(input:string){
    const parsed =JSON.parse(input);
    if(Array.isArray(parsed) && parsed.every(item =>typeof item ==="string"))
        return parsed;
    return [];
}