interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Lantana',
    lastName: 'Tijani',
    age: 21,
    location: 'Nigeriaa',
};
const student2: Student = {
    firstName: 'Julien',
    lastName: 'Barba',
    age: 25,
    location: 'USA',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightgray";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);

