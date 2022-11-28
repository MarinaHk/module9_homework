let xmlString = '<list>
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
</list>';

let parser = new DOMParser();
let result = [];

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const students = xmlDOM.querySelectorAll("student");
    
students.forEach(Node => {
  let student = {
    name: '$ 
    {Node.querySelector("first").textContent} $
    {Node.querySelector("second").textContent}',
  age: 
Node.querySelector("age").textContent,
  prof: 
 Node.querySelector("prof").textContent,
    lang:
 Node.querySelector("name").getAttribute("lang")
}
result.push(student);
});