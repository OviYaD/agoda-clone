export const Validate = (val,type) => {
    if(type === "email"){
        if (!val) {
            return 'Email address is required';
        }

        else if (!/\S+@\S+\.\S+/.test(val)){
            return  'Email address is invalid';
        }
    }

    if (type === "password"){
        if (!val){
            return "Password address is required"
        }
        else if (val.length < 8) {
            return "Password length should greater than 8 character"
        }
    }

    if (type === "tel"){
        if(!val){
            return "Phone Number is required"
        }

        else if (val.length !== 10){
            return  'Phone Number is invalid';
        }

        else if (isNaN(val)) {
            return  'Phone Number is invalid';
        }
    }

    return null
}