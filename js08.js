// Q2
let r = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  
  console.log(r);  // 會印出什麼？為什麼？
  
  // Q3
  function getInfo(member, year) {
  //   let member = person
  //   let year = birthYear 
    // console.log(person,year)
    member.name = 'Lydia';
    year = '1998';
    // console.log(person,year)
  }
  // console.log(year)
  const person = { name: 'Sarah' };
  const birthYear = '1997';
  
  getInfo(person, birthYear);
  
  console.log(person, birthYear); // 會印出什麼？為什麼？
  
  // Q4
  function sayHi(name) {
    return `Hi there, ${name}`;
  }
  
  console.log(sayHi());  // 會印出什麼？為什麼？