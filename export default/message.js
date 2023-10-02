// arrow function
const message = () => {
    const header = "<div style='text-align:center;'><h1>Personal Information</h1></div>";
    const name = "Ray Mcdylan Wongkaren";
    const age = 20;
    const status = "Single";
    const major = 'Informatika';
    const faculty = 'Computer Science';
    const address = 'Malalayang 1 timur';
    const interest = 'Programmer, Game';
    return header + ' <hr> <strong>Name: </strong>' + name + '<br> <strong>Age: </strong>' + age + '<br> <strong> Status: </strong>' + status + '<br> <strong> Major: </strong>' + major + '<br> <strong> Faculty: </strong>' + faculty + '<br> <strong> Address: </strong>' + address + '<br> <strong> Interest: </strong>' + interest;
};

export default message;