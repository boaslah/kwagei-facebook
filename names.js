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

//kwagei facefook objeect
var kwageiFacebook =  {
       teamMembers:[
                {
                firstName: "Kpetermeni",
                lastName: "Siakor",
                contact: "0776931461"
                },
                {
                firstName: "Emmanuel",
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
        ],
   
        // function to show the  add staff input elements
        showAddStaffInputElements: function () {
                addStaffInputs.style.display = "block";
                addStaffInputs.style.display = "flex";
        },

        
        // function to display staff
        displayStaff: function () {

                for (i = 0; i < this.teamMembers.length; i++) {

                        // creat table data elements
                        var rowElement = document.createElement("tr");
                        var numberElement = document.createElement("td");
                        var firstNameElement = document.createElement("td");
                        var lastNameElement = document.createElement("td");
                        var contactElement = document.createElement("td");
                        var editAction = document.createElement("td");
                        var deleteAction = document.createElement("td");
                        deleteAction = document.createElement("button");
                        editAction = document.createElement("button");
        
                        // creat text content for table data elements
                        deleteAction.textContent = "Delete";
                        editAction.textContent = "Edit"
                        numberElement.textContent = i + 1;
                        firstNameElement.textContent = this.teamMembers[i].firstName;
                        lastNameElement.textContent = this.teamMembers[i].lastName;
                        contactElement.textContent = this.teamMembers[i].contact;
        
                        // append table data to table row
                        rowElement.append(numberElement);
                        rowElement.append(firstNameElement);
                        rowElement.append(lastNameElement);
                        rowElement.append(contactElement);
                        rowElement.append(deleteAction);
                        rowElement.append(editAction);
                
                        // appemd table row to table body
                        tableBody.append(rowElement);
                }
        },

      
        
        // function to add staff
        addStaff: function () {

                if(addFirstNameInput.value !== "" && addLastNameInput.value !== "" && addContactInput.value !== "" ){

                        var newTeamMembers = {
                                firstName: addFirstNameInput.value,
                                lastName: addLastNameInput.value,
                                contact: addContactInput.value
                        };
                        this.teamMembers.push(newTeamMembers);
                        tableBody.innerHTML = " ";
                        this.displayStaff();

                        addFirstNameInput.value = "";
                        addLastNameInput.value = "";
                        addContactInput.value = "";
                }else{
                        alert("please enter a user")
                }
        },
        
        // function to edit staff
        editStaff:  function () {
        
                for (i = 0; i < this.teamMembers.length; i++) {
                        if (noInput.value - 1 == i) {
                                this.teamMembers[i].firstName = editFirstNameInput.value;
                                this.teamMembers[i].lastName = editLastNameInput.value;
                                this.teamMembers[i].contact = editContactInput.value;
                        }
                }
                tableBody.innerHTML = " ";
                //creat table data elements
                this.displayStaff();
        
                editFirstNameInput.value = "";
                editLastNameInput.value = "";
                editContactInput.value = "";
                noInput.value = "";
        },
        
        // function to delete satff
        deleteStaff: function () {
                for (i = 0; i < this.teamMembers.length; i++) {
                        if (deleteInput.value - 1 == i) {
                                this.teamMembers.splice(i, 1);
                        }
                }
                tableBody.innerHTML = " ";
                
                this.displayStaff();
        
                deleteInput.value  = "";
        }
}

kwageiFacebook.displayStaff();