export class AppConstants {
    static SIDEBAR_SECTION_CONTENT = ["View Details","Add Details","Filter","Search "]

    static FORM_LABEL = {
        "name" : "Name",
        "companyName" : "Company Name",
        "emailId" : "Email ID",
        "contactNo" : "Contact No",
        "designation" : "Designation",
        "avatar":"Select your avatar",
        "button":"Submit"
    }

    static FORM_ERROR = {
        "name":"Name is required.",
        "companyName":"Company name is required.",
        "emailId_error_1":"Email is required.",
        "emailId_error_2":"Enter a valid email.",
        "contactNumber_error_1":"Contact number is required.",
        "contactNumber_error_2":"Enter a valid contact number.",
        "designation":"Designation is required.",
        "avatar":"Please select an avatar."


    }

    static DESIGNATION = [
        {"key":1,"value":"Software Developer"},
        {"key":2,"value":"Senior Software Developer"},
        {"key":3,"value":"Quality Assurance"},
        {"key":4,"value":"Technical Lead"},
        {"key":4,"value":"Manager"}
    ]
    
    static AVATAR = [
        {"key":"Avatar_1","value":"assets/images/avatar-1.avif"},
        {"key":"Avatar_2","value":"assets/images/avatar-2.avif"},
        {"key":"Avatar_3","value":"assets/images/avatar-3.avif"},
        {"key":"Avatar_4","value":"assets/images/avatar-4.avif"}
    ]

    static EMPLOYEE_CARD_MESSAGES = {
        "emptyRecord":" No Employee Record Found!",
        "deleteAlert":" Are you sure you want to delete",
        "closeBtn":"Close",
        "deleteBtn":"Delete"
    }

    static HEADER_TEXT = "Developed By : Sangeetha G Yadav"
}