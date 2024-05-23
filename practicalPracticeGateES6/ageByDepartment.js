//loop through the opbect 
//the object should be iterable 
// while throught the object  for a specific department 
//initial sum the iteration department

const employees = [
    { name: 'Alice', age: 30, department: 'Engineering' },
    { name: 'Bob', age: 25, department: 'Marketing' },
    { name: 'Charlie', age: 35, department: 'Engineering' },
    { name: 'David', age: 40, department: 'HR' },
    { name: 'Eve', age: 28, department: 'Marketing' },
    ];


function sumOfAges(obj){
    let departments = obj.map( a => a.department)
    let sumOfAges = 0;
    
    for(let i =0 ; i< departments.length ; i++){
          sumOfAges =0 ;
        for( let employee of employees ){
            console.log(departments[i]);
            if(employee.department === departments[i]){
                
                sumOfAges += employee.age;
            }
        }
        console.log(sumOfAges);
        
    }

  

}

sumOfAges(employees);

