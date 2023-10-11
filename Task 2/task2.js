const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

const data = JSON.parse(jsonString);
const dataList = data.list;

const listPerson = [];

dataList.forEach(function(item) {
    const person = new Object();
    person.name = item.name;
    person.age = item.age;
    person.prof = item.prof;
    listPerson.push(person);
});
//console.log(listPerson);
