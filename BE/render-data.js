const faker = require('faker');

const randomClassList = (n)=>{
    const classList = [];
    if(n <= 0) return [];
    Array.from(new Array(n)).forEach(()=>{
        const _class = {
            id:faker.random.uuid(),
            totalStudent:faker.random.number(40),
            supervising_Teacher:`${faker.name.lastName()} ${faker.name.firstName()}`,
            avatar_Teacher:faker.image.avatar(400,400)
        }
        classList.push(_class)
    })
    return classList;
}


(()=>{
    console.log('run render')
    const classList = randomClassList(2)
    const db = {
        class: classList,
    };
    fs.writeFile('./db.json',JSON.stringify(db),()=>{
        console.log('Write successfully')
    });
})()
