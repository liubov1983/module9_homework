const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNodes = listNode.querySelectorAll('student');

const listStudent = [];

studentNodes.forEach(function(item) {
    let student = new Object();
    let name = item.querySelector('name');
    let firstName = item.querySelector('first');
    let secondName = item.querySelector('second');
    let age = item.querySelector('age');
    let prof = item.querySelector('prof');
    let lang = name.getAttribute('lang');
    student.name = `${firstName.textContent} ${secondName.textContent}`;
    student.age = age.textContent;
    student.prof = prof.textContent;
    student.lang = lang;
    listStudent.push(student);
})
//console.log(list);
