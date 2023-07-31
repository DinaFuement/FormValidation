toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 5000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
   
   // ========= element =======

    var from        =  document.getElementById("form");
    var funeralHomeName    =  document.getElementById("funeral-home-name");
    var firstName  =  document.getElementById("first-name");
    var lastName  = document.getElementById("last-name");
    var initialCallTaken  = document.getElementById("initial-call-taken");
    var orgDate = document.getElementById("org-date")
    var socialSecurityNo = document.getElementById("social-security-no");
    var dateOfBirth = document.getElementById("date-of-birth");
    var dateOfDeath = document.getElementById("date-of-death");

    // var causeOf = document.getElementById("cause-of");

    var placeOfDeath = document.getElementById("place-of-death");
    var shipOutFh = document.getElementById("ship-out-fh")
    var fhContact = document.getElementById("fh-contact")
   
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    from.addEventListener('submit' , e =>{
        e.preventDefault();
        checkInput();
        var  funeralHomeNameValue    =  funeralHomeName.value.trim();
        var  firstNameValue    =  firstName.value.trim();
        var lastNameValue   = lastName.value.trim();
        var initialCallTakenValue = initialCallTaken.value.trim();
        var orgDateValue  = orgDate.value.trim();
        var socialSecurityNoValue = socialSecurityNo.value.trim();

        // var dateOfBirthValue = dateOfBirth.value.trim();
        // var dateOfDeathValue = dateOfDeath.value.trim();

        var placeOfDeathValue = placeOfDeath.value.trim();
        var shipOutFhValue = shipOutFh.value.trim();
        var fhContactValue = fhContact.value.trim();


        
        if ( funeralHomeNameValue != '' && isName(firstNameValue) && isLastName(lastNameValue) && isInitialCallTaken(initialCallTakenValue) && isorgDate(orgDateValue) && issocialSecurityNo(socialSecurityNoValue) &&  isplaceOfDeath(placeOfDeathValue) && isshipOutFh(shipOutFhValue) && isfhContact(fhContactValue)){
            toastr.success("sucessfully submitted");
        }else{
            toastr.error("Fill the all input fields");
        }
    });

    

    //  function ===================>
    
    function checkInput(){

        var  funeralHomeNameValue    =  funeralHomeName.value.trim();
        var  firstNameValue    =  firstName.value.trim();
        var lastNameValue   = lastName.value.trim();
        var initialCallTakenValue = initialCallTaken.value.trim();
        var orgDateValue = orgDate.value.trim();
        var socialSecurityNoValue = socialSecurityNo.value.trim();

        // var dateOfBirthValue = dateOfBirth.value.trim();
        // var dateOfDeathValue = dateOfDeath.value.trim();

        // var causeOfValue = causeOf.value.trim();

        var placeOfDeathValue = placeOfDeath.value.trim();
        var shipOutFhValue = shipOutFh.value.trim();
        var fhContactValue = fhContact.value.trim();

        // ======= username ========>  

        // funeral home name
        
        if(funeralHomeNameValue === ''){
            setError(funeralHomeName , '* Funeral Name is Invalid.');
        } else if(funeralHomeNameValue != '') {
            setError(funeralHomeName, "");
        }
        else{}

        // first name   =======>

        if(firstNameValue === ''){
            setError(firstName , '* first Name cannot be Blank.');
        } else if(!isName(firstNameValue)) {
            setError(firstName, " * Name must be 3 to 15 characters");
        } else if(isName(firstNameValue)){
            setError(firstName, "");
        }

        else{
            setError(firstName, "");
        }
        
        // last name ========>

        if(lastNameValue === ''){
            setError(lastName , '* last Name cannot be Blank.');
        } else if(!isLastName(lastNameValue)) {
            setError(lastName, " * Name must be 3 to 15 characters");
        } else if(isLastName(lastNameValue)){
            setError(lastName, "");
        }
        else{
            setError(lastName, "");
        }

        // inital call taken

        if(initialCallTakenValue === ''){
            setError(initialCallTaken , '* intial call cannot be Blank.');
        } else if(!isInitialCallTaken(initialCallTakenValue)) {
            setError(initialCallTaken, " * Name must be 3 to 15 characters");
        } else if(isInitialCallTaken(initialCallTakenValue)){
            setError(initialCallTaken, "");
        }
        else{
            setError(initialCallTaken, "");
        }

        // org Date

        if(orgDateValue === ''){
            setError(orgDate , '* org date cannot be Blank.');
        } else if(!isorgDate(orgDateValue)) {
            setError(orgDate, " * Numbers And Characters must be 3 to 15");
        } else if(isorgDate(orgDateValue)){
            setError(orgDate, "");
        }
        else{
            setError(orgDate, "");
        }

        // social security no

        if(socialSecurityNoValue === ''){
            setError(socialSecurityNo , '* social security cannot be Blank.');
        } else if(!issocialSecurityNo(socialSecurityNoValue)) {
            setError(socialSecurityNo, " * Name must be 3 to 15 characters");
        } else if(issocialSecurityNo(socialSecurityNoValue)){
            setError(socialSecurityNo, "");
        }
        else{
            setError(socialSecurityNo, "");
        }

        // date of birth 

        // if(dateOfBirthValue === ''){
        //     setError(dateOfBirth , '* Birth date cannot be Blank.');
        // } else if(!isdateOfBirth(dateOfBirthValue)) {
        //     setError(dateOfBirth, " * Numbers And Characters must be 3 to 25");
        // } else if(isdateOfBirth(dateOfBirthValue)){
        //     setError(dateOfBirth, "");
        // }
        // else{
        //     setError(dateOfBirth, "");
        // }


        // date of death 

        // if(dateOfDeathValue === ''){
        //     setError(dateOfDeath , '* Date of birth cannot be Blank.');
        // }else if(dateOfDeathValue != '') {
        //     setError(dateOfDeath, "");
        // }
        // else{
        // }

        // place of death 

        if(placeOfDeathValue === ''){
            setError(placeOfDeath , '* place of death cannot be Blank.');
        } else if(!isplaceOfDeath(placeOfDeathValue)) {
            setError(placeOfDeath, " * Name must be 3 to 15 characters");
        } else if(isplaceOfDeath(placeOfDeathValue)){
            setError(placeOfDeath, "");
        }
        else{
            setError(placeOfDeath, "");
        }

        // ship out fh

        if(shipOutFhValue === ''){
            setError(shipOutFh , '* place of death cannot be Blank.');
        } else if(!isshipOutFh(shipOutFhValue)) {
            setError(shipOutFh, " * Name must be 3 to 15 characters");
        } else if(isshipOutFh(shipOutFhValue)){
            setError(shipOutFh, "");
        }
        else{
            setError(shipOutFh, "");
        }

        // fh contact 

        if(fhContactValue === ''){
            setError(fhContact, '* Fh Phone Contact cannot be Blank.');
        } else if(!isfhContact(fhContactValue)) {
            setError(fhContact, " * Numbers And Characters must be 3 to 15 ");
        } else if(isfhContact(fhContactValue)){
            setError(fhContact, "");
        }
        else{
            setError(fhContact, "");
        }
    }

    // set error function ==================>

    function setError(input , message ){
        const formControl     = input.parentElement;
        const small           = formControl.querySelector('small');
        small.innerText       = message;
    }

    // Name validation ========>

    // first name ======>

    function isName(firstname) {
        return /^[A-Za-z\s].{3,25}$/.test(firstname);
    }
    
    // last name ======>

    function isLastName(lastname) {
        return /^[A-Za-z\s].{3,25}$/.test(lastname);
    }

    // inital call taken =======>

    function isInitialCallTaken(initialCallTaken) {
        return /^[A-Za-z\s].{3,25}$/.test(initialCallTaken);
    }

    // org date =====>

    function isorgDate(orgDate) {
        return /^[A-Za-z\s].{3,25}$/.test(orgDate);
    }

    // social security no ======>

    function issocialSecurityNo(socialSecurityNo) {
        return /^[A-Za-z\s].{3,25}$/.test(socialSecurityNo);
    }

    // place of death value  ======>

    function isplaceOfDeath(placeOfDeath) {
        return /^[A-Za-z\s].{3,25}$/.test(placeOfDeath);
    }

    // ship out of fh =====>

    function isshipOutFh(shipOutFh) {
        return /^[A-Za-z\s].{3,25}$/.test(shipOutFh);
    }

    // fh contact  ======>

    function isfhContact(fhContact) {
        return /^[A-Za-z\s].{3,25}$/.test(fhContact);
    }




    // function isdateOfBirth(dateOfBirth) {
    //     return /^[A-Za-z\s].{3,25}$/.test(dateOfBirth);
    // }



    // function isfhContact(fhContact) {
    //     var fhContact = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //     return fhContact.test(fhContact)
    //   }

