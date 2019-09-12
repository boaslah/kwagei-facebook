var teamMembers = [
        {
        firstName: "Kpetermeni",
        lastName: "Siakor",
        contact: "0776931461"
        },
        {
        firstName: "Emanuel",
        lastName: "Jaygbay",
        contact: "0775715771"
        },
        {
        firstName: "Nathan",
        lastName: "Siafa",
        contact: "0778415037"
        },
        {
        firstName: "Rudeen",
        lastName: " Zarwolo",
        contact: "0777967844"
        },
        {
        firstName: "Carlos",
        lastName: "Nah",
        contact: "0776728619"
        },
        {
        firstName: "Blessing",
        lastName: "Boaslah",
        contact: "0778128252"
        }
];

// declare variables
var tableBody = document.getElementById("tbody");
var addFirstNameInput = document.getElementById("addFirstNameInput");
var addLastNameInput = document.getElementById("addLastNameInput");
var addContactInput = document.getElementById("addContactInput");
var editFirstNameInput = document.getElementById("editFirstNameInput");
var editLastNameInput = document.getElementById("editLastNameInput");
var editContactInput = document.getElementById("editContactInput");
var noInput = document.getElementById("noInput");
var addStaffInputs = document.getElementById("addStaffInputElements");
var editStaffInputs = document.getElementById("editStaffInputElements");
var deleteStaffInput = document.getElementById("deleteStaffInputElement");
var table = document.getElementById("tablediv");
var deleteInput = document.getElementById("deleteInput");

// function to show the  add staff input elements
function showAddStaffInputElements() {
        deleteStaffInput.style.display = "none";
        addStaffInputs.style.display = "block";
        addStaffInputs.style.display = "flex";
        editStaffInputs.style.display = "none";
}

// function to show the  edit staff input elements
function showEditStaffInputElements() {
        addStaffInputs.style.display = "none";
        deleteStaffInput.style.display = "none";
        editStaffInputs.style.display = "block";
        editStaffInputs.style.display = "flex";
}

// function to show the  delect staff input element
function showDeleteStaffInputElement() {
        deleteStaffInput.style.display = "block";
        addStaffInputs.style.display = "none";
        editStaffInputs.style.display = "none";
        deleteStaffInput.style.display = "flex";
}

displayStaff();

// function to display staf
function displayStaff() {
        table.style.display = " block";

        for (i = 0; i < teamMembers.length; i++) {

                // creat table data elements
                var rowElement = document.createElement("tr");
                var numberElement = document.createElement("td");
                var firstNameElement = document.createElement("td");
                var lastNameElement = document.createElement("td");
                var contactElement = document.createElement("td");
        
                // creat text content for table data elements
                numberElement.textContent = i + 1;
                firstNameElement.textContent = teamMembers[i].firstName;
                lastNameElement.textContent = teamMembers[i].lastName;
                contactElement.textContent = teamMembers[i].contact;
        
                // append table data to table row
                rowElement.append(numberElement);
                rowElement.append(firstNameElement);
                rowElement.append(lastNameElement);
                rowElement.append(contactElement);
        
                // appemd table row to table body
                tableBody.append(rowElement);
        }
};



// function to add staff
function addStaff() {
        var newTeamMembers = {
                firstName: addFirstNameInput.value,
                lastName: addLastNameInput.value,
                contact: addContactInput.value
        };

        //creat table data elements
        var rowElement = document.createElement("tr");
        var numberElement = document.createElement("td");
        var firstNameElement = document.createElement("td");
        var lastNameElement = document.createElement("td");
        var contactElement = document.createElement("td");

        // creat text content for table data elements
        firstNameElement.textContent = newTeamMembers.firstName;
        lastNameElement.textContent = newTeamMembers.lastName;
        contactElement.textContent = newTeamMembers.contact;

        // append table data to table row
        rowElement.append(numberElement);
        rowElement.append(firstNameElement);
        rowElement.append(lastNameElement);
        rowElement.append(contactElement);

        // appemd table row to table body
        tableBody.append(rowElement);

        addFirstNameInput.value = " ";
        addLastNameInput.value = " ";
        addContactInput.value = " ";
}



// function to edit staff
function editStaff() {

        for (i = 0; i < teamMembers.length; i++) {
                if (noInput.value - 1 == i) {
                        teamMembers[i].firstName = editFirstNameInput.value;
                        teamMembers[i].lastName = editLastNameInput.value;
                        teamMembers[i].contact = editContactInput.value;
                }
        }
        tableBody.innerHTML = " ";

        displayStaff();

        editFirstsNameInput.value = " ";
        editLastNameInput.value = " ";
        editContactInput.value = " ";
        noInput.value = " ";
};

// function to delect satff
function deleteStaff() {
        for (i = 0; i < teamMembers.length; i++) {
                if (deleteInput.value - 1 == i) {
                        teamMembers.splice(i, i+1);
                }
        }
        tableBody.innerHTML = " ";

        displayStaff();

        deleteInput.value  = " ";
}