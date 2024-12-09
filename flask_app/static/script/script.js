// Wait for the DOM content to be fully loaded before running the script.
document.addEventListener('DOMContentLoaded', function() {
    // Select all radio buttons by their shared name attribute.
    const radios = document.querySelectorAll('input[name="listGroupCheckableRadios"]');
    
    // Get the element where the description will be updated.
    const descriptionText = document.getElementById('descriptionText');

    // Iterate over each radio button.
    radios.forEach(radio => {
        // Add an event listener for the 'change' event on each radio button.
        radio.addEventListener('change', function() {
            let text = ''; // Initialize the text variable that will hold the description.
            // A switch statement to handle different values of the radio buttons.
            switch (this.value) {
                case 'dataScientist':
                    // Set the text variable to the description for the 'Data Scientist' role.
                    text = 'Data Scientist: Responsible for analyzing complex datasets, machine learning, and developing applications.';
                    break;
                case 'managerBI':
                    // Set the text variable to the description for the 'Manager of BI' role.
                    text = 'Manager of BI: Oversees business intelligence strategy, data analytics, and report generation.';
                    break;
                case 'productOwnerBi':
                    // Set the text variable to the description for the 'Manager of BI' role.
                    text = 'Product Owner of BI: Oversees business intelligence strategy, data analytics, and report generation.';
                    break;
                case 'consultantBi':
                    // Set the text variable to the description for the 'Manager of BI' role.
                    text = 'Consultant of BI: Oversees business intelligence strategy, data analytics, and report generation.';
                    break;
                // Add more cases for additional roles
            }
            // Update the innerHTML of the descriptionText element with the new description.
            descriptionText.innerHTML = `<p>${text}</p>`;
        });
    });
});
