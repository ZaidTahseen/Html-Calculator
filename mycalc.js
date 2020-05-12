
   function add() {

        org_value = 0;
        last_value = 0
        org_value = f.dis_screen.value;
        last_value = org_value.charAt(org_value.length - 1) 

        if (last_value == '+' || last_value == '-' || last_value == '/' || last_value == '*') {
            f.dis_screen.value = org_value.substring(0, org_value.length - 1)
            f.dis_screen.value += '+';
        } 
        else {
            f.dis_screen.value += '+';
        }
    }

   function subtract() {
        var org_value = 0, last_value = 0
        org_value = f.dis_screen.value;
        last_value = org_value.charAt(org_value.length - 1)

        if (last_value == '+' || last_value == '-' || last_value == '/' || last_value == '*') {
            f.dis_screen.value = org_value.substring(0, org_value.length - 1)
            f.dis_screen.value += '-';
        } 

        else {
            f.dis_screen.value += '-';
        }
    }

    function multiply() {
        var org_value = 0, last_value = 0
        org_value = f.dis_screen.value;
        last_value = org_value.charAt(org_value.length - 1)


        if (last_value == '+' || last_value == '-' || last_value == '/' || last_value == '*') {
            f.dis_screen.value = org_value.substring(0, org_value.length - 1)
            f.dis_screen.value += '*';
        }
        else {

            if (org_value.length == 0) {
            }

            else {
                f.dis_screen.value += '*';
            }
        }
    }

    function div() {
        var org_value = 0, last_value = 0
        org_value = f.dis_screen.value;
        last_value = org_value.charAt(org_value.length - 1)

        if (last_value == '+' || last_value == '-' || last_value == '/' || last_value == '*') {
            f.dis_screen.value = org_value.substring(0, org_value.length - 1)
            f.dis_screen.value += '/';
        }
        else {
            if (org_value.length == 0) {
            }
            else {
                f.dis_screen.value += '/';
            }
        }
    }
    
   function solution() {
         x = f.dis_screen.value 
         y = eval(x)

        if (x.length > 0) {

            return y;
        }
        else {
            return 'please enter values'
        }
    }







