var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Assignment to constant variable.';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'other value'; 
}

changeLeastFavoriteCustomer();