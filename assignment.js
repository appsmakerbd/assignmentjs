// https://github.com/appsmakerbd/assignmentjs

//############## Number One #############
//Kilometer To Meter Declaration
function kilometerToMeter(kilometer){
    //validation
    if(numberValidation(kilometer)==true){
        var meter=kilometer*1000;
        return meter;
    }else{
        return numberValidation(kilometer);
    }
}


var kilometer=7;
//Kilometer To Meter Call
var meter=kilometerToMeter(kilometer);
console.log(meter);
//############## Number One Ends#############




//############## Number Two Start #############
//Budget Calculator Declaration
function budgetCalculator(watchQnty,phoneQnty,laptopQnty){
    //validation
    if(numberValidation(watchQnty)==true && numberValidation(phoneQnty)==true && numberValidation(laptopQnty)==true){
        var watchPrice=50;
        var phonePrice=100;
        var laptopPrice=500;
        var totalBudget=(watchPrice*watchQnty)+(phonePrice*phoneQnty)+(laptopPrice*laptopQnty);
        return totalBudget;
    }else{
        return "Please Provide Valid Numaric or Number data!!";
    }
}


var watchQnty=1;
var phoneQnty=1;
var laptopQnty=1;
//Budget Calculator Call
var budgetCalculator= budgetCalculator(watchQnty,phoneQnty,laptopQnty);
console.log(budgetCalculator);
//############## Number Two Ends #############




//############## Number Three #############
//Hotel Cost Declaration
function hotelCost(howManyDays){
    var starterCharge=100;
    //validation
    if(numberValidation(howManyDays)==true){
        //Charge for 1to 10 Days
        if(howManyDays>0 && howManyDays<=10 ){
            dailyCharge=100;
            totalHotelCost=howManyDays*dailyCharge;
        }


        //Charge for 1to 20 Days
        else if(howManyDays>10 && howManyDays<=20 ){
            var firstCharge=10*starterCharge;//10 Days Charge
            var extraDays=howManyDays-10;
            var extraCharge=extraDays*(starterCharge-20);//Extra Days Charge
            totalHotelCost=firstCharge+extraCharge;
        }

        //Charge for 1to 20+ Days
        else if(howManyDays>20){
            var firstCharge=10*starterCharge;//10 Days Charge
            var secondCharge=10*(starterCharge-20);//Second 10 Days Charge
            var extraDays=howManyDays-20;
            var extraCharge=extraDays*(starterCharge-50);//Extra Days Charge
            totalHotelCost=firstCharge+secondCharge+extraCharge;
        }
        return totalHotelCost;
    }
    else{
        return numberValidation(howManyDays);
    }
}


var howManyDays=21;
//Hotel Cost Call
var totalHotelCost=hotelCost(howManyDays);
console.log(totalHotelCost);
//############## Number Three Ends#############





//############## Number Four #############
//Mega Friend  Declaration
function megaFriend(friendArray){
    if(Array.isArray(friendArray)==true){
        if(friendArray.length>0){
            var maxLength=friendArray[0].length;
            var friendsName=friendArray[0];
            //Loop Start
            for(var i=0;i<friendArray.length;i++){
                var elementLength=friendArray[i].length;
                var maxLength=friendArray[0].length;
                if(elementLength>maxLength){
                    maxLength=elementLength;
                    friendsName=friendArray[i];
                }
            }
            //Loop End
            return friendsName;
        }
        else{
            return "You haave no friends! You should have minimum One friend!";
        }
    }
    else{
        return "You provided wrong data. Please provide an array"
    }
}


var allFriends = ["Sohel", "Hannan", "Al-amin", "Robin"];
//Mega Friend  Call
var largeFriends=megaFriend(allFriends);

//############## Number Four Ends#############






//############## Number Validation Function #############
//This function used for validation
function numberValidation(theValue){
    var dataType=typeof(theValue);
    if(theValue){
        if(dataType=='number'){
            if(theValue<=0){
                return "Number should be morethan ZERO!";
            }
            else{
               return true;
            }
        }
        else{
            return "Invalid Data, You should provide number, Please avoid Text!!"; 
        }
        
    }
    else{
        return "Please Put Some Data!";
    }
}
//############## Number Validation Function Ends  #############


