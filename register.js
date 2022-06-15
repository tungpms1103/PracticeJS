
function validator (option) {
    var rulesSelector = {};
    const formElement = document.querySelector(option.form);
    // const registerContainer = formElement.parentElement

    function validate(inputElement, rule){
        var messageElement = inputElement.closest(option.formGroup).querySelector(option.message);
        var messageError;

        for(var i = 0; i < rulesSelector[rule.selector].length; i++){

            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    messageError = rulesSelector[rule.selector][i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                messageError = rulesSelector[rule.selector][i](inputElement.value.trim());
            }
            if(messageError){
                break;
            }
        }

        if(messageError){
            messageElement.innerText = messageError;
            inputElement.closest(option.formGroup).classList.add('invalid');
            inputElement.closest(option.inputForm).classList.remove('active');
        }
        else{
            messageElement.innerText = '';
            inputElement.closest(option.formGroup).classList.remove('invalid');
            inputElement.closest(option.inputForm).classList.add('active');
        }
        // messageError Undefined thì trả về False còn có Content thì return True
        return !!messageError; 
    }



   if(formElement){

    // Xử lý onsubmit
        formElement.onsubmit = function(e){
            e.preventDefault();// Bỏ hành vi mặc định của form
            var isFormError = false;

            // Lặp qua từng Input và check
            option.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isError = validate(inputElement,rule);// Có lỗi return True
                
                if(isError){
                    isFormError = true;
                }
            });
           
            //Khong Co loi
            if(!isFormError){
             //Submit voi Javascript - ham Onsubmit ben Validator
                if(typeof option.onSubmit === 'function'){
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce(function(values, input){
                    values[input.name] = input.value;
                    return  values;
                },{});

                option.onSubmit(formValues);
                // registerContainer.classList.remove('active');

                }
                //Trường hợp SUbmit với hành vi mặc định của thẻ Form // k co call back onSubmit
                else{
                formElement.submit();
                }
            }else{
                console.log('Van co loi');
            }
           


        }

    // LLặp qua mỗi Rules
    option.rules.forEach(function(rule){       
         //Lấy hết tất cả các rule của mỗi input và đưa vào 1 Object
         if(Array.isArray(rulesSelector[rule.selector])){
            rulesSelector[rule.selector].push(rule.check);
        }else{
            rulesSelector[rule.selector] = [rule.check];
        }

        var inputElements = formElement.querySelectorAll(rule.selector);
        
        Array.from(inputElements).forEach(function(inputElement){
            inputElement.onblur = function(){
                validate(inputElement,rule);
             }

             inputElement.oninput = function(){
                var messageElement = inputElement.closest(option.formGroup).querySelector(option.message);
                messageElement.innerText = '';
                inputElement.closest(option.formGroup).classList.remove('invalid');
             }
        });    
    });
   }

}


validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        check: function(value){
            return value ? undefined : message;
        }
    }
}

validator.isEmail = function (selector,message) {
    return {
        selector: selector,
        check: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message;
        }
    }
}

validator.isPhonenumber = function (selector, message) {
    return {
        selector: selector,
        check: function(value){
            var regex =/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
            return regex.test(value) ? undefined : message;
        }
    }
}

validator.isLengthMin = function (selector, min ,message) {
    return {
        selector: selector,
        check: function(value){
            return value.length >= min ? undefined : message ;
        }
    }
}

validator.isConfirmed = function (selector, passwordValue ,message) {
    return {
        selector: selector,
        check: function(value){
            return value != '' && value === passwordValue() ? undefined : message;
        }
    }
}