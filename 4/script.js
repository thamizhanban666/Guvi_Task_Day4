//Task 1: Simple Programs todo for variables :

//1.Declare four variables without assigning values and print them in console
let a;
let b;
let c;
let d;
console.log(a,b,c,d);


//2.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "Thamizhanban";
let lastName = "Sivagnanam";
let mStatus = "Unmarried";
let country = "India";
let age = "23";
console.log(firstName,lastName,mStatus,country,age);

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
console.log(firstName);
console.log(lastName);
console.log(mStatus);
console.log(country);
console.log(age);

//5. Declare variables and assign string, boolean, undefined and null data types
let str="guvi"
let bool=true;
let undef;
let nl=null;
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(undef));
console.log(typeof(nl));

//6.Convert the string to integer
let str1 = "100";
console.log(parseInt(str1));
console.log(Number(str1));
console.log(+str1);


//7.Write 6 statement which provide truthy & falsey values.
console.log(1 == "1")
console.log("1" === 1)
console.log(2 < 3)
console.log(2 > 3)
console.log(20%2 == 0)
console.log(20%2 == 1)


//Task 2: Simple Programs todo for Operators
//1.Square of a number
console.log(5**2)


//2.Swapping 2 numbers
let x = 1;
let y = 2;
let z;
z=x;
x=y;
y=z;
console.log("x after swapping is "+x);
console.log("y after swapping is "+y);


//3.Addition of 3 numbers
console.log(5+10+15);


//4.Celsius to Fahrenheit conversion
let celsius= 25;
let fahrenheit = celsius * (9/5) + 32
console.log(fahrenheit)


//5.Meter to miles
let meter=1000;
let miles=meter*0.00062137
console.log(miles)


//6.Pounds to kg
let pound=50;
let kilo = pound * 0.45
console.log(kilo)


//7.Calculate Batting Average
let runs = 10000;
let matches = 250;
let notout = 50;
let avg = runs/ (matches - notout);
 console.log(avg)


 //8.Calculate five test scores and print their average
let average=(10+20+30+40+50) / 5 ;
console.log(average);


//9.Power of any number x ^ y
console.log(x**y);

//10.Calculate Simple Interest
let SI = (principal*noOfYears*rateOfInterst) / 100
console.log(SI)


//11.Calculate area of an equilateral triangle
let side=5
let areaOfEquilateralTriangle = ( 1.73 * side *side) / 4
console.log(areaOfEquilateralTriangle);

//12.Area Of Isosceles Triangle
let a4=2
let b4=3
let height = Math.sqrt(Math.pow(a4, 2) - (Math.pow(b4, 2) / 4));
let AreaOfIsoscelesTriangle=((1 * b4 * h) / 2)
console.log(AreaOfIsoscelesTriangle)

//13.Volume Of Sphere
let volumePOfSphere = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)

//14.Volume Of Prism
let volumeOfPrism= breadth * height;
console.log(volumeOfPrism)

//15.Find area of a triangle.
let areaOfTriangle=(1/2)* width * height;
console.log(areaOfTriangle)

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=100
let soldCost=90
let discountOfProduct= (actualCost-soldCost) / actualCost ;
console.log(discountOfProduct)


//17.Given their radius of a circle and find its diameter, circumference and area.
let radius=10
let diameterOfCircle = 2 * radius
let circumferenceOfCircle= 2 * Math.PI * radius;
let areaOfCircle = Math.PI * radius**2 ;
console.log(diameterOfCircle);
console.log(circumferenceOfCircle);
console.log(areaOfCircle);


//18.Given two numbers and perform all arithmetic operations.
let num1=5
let num2=2
   let sum = num1 + num2;
   let sub = num1 - num2;
   let mul = num1 * num2;
   let div = num1 / num2;
   let mod = num1 % num2;
   let sqr = num1 ** num2;
console.log(sum0)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(sqr)


//19.Display the asterisk pattern as shown below(No loop needed)
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.Calculate electricity bill? //per hour 100watt,per unit10rs
let unitPerHourInWatt=100
let hour=1
let unitRate=10
let kWh=(unitPerHourInWatt * hour)/1000
let monthUsage=30*kWh
let costOfBill=unitRate*monthUsage
console.log(costOfBill)


//Task 3: Simple Programs todo for Condition , Looping and Arrays
//1.Write a loop that makes seven calls to console.log to output the following triangle:
let star = "";
for (let i = 1; i <= 7; i++) {
  star += "*"
console.log(star); 
}

//2.Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
strArray.map((e)=>{
  console.log(e);
})

//3.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55];
let count =0;
myarray.map((e) => {
    dummy += 1;
})
console.log(count);

//4.Foods variable holds the names of your top 20 favorite foods, 
//starting with the best food. How can you find your fifth favorite food?
let foods=["Biriyani","Shawarma","rice","dal","chapathi","burger","gheerice","tandoori",
"naan","pulao","Barbequechicken","poori","pizza","dosa","idly",
"pongal","lemonrice","panipoori","muttoncurry","fish",]

//5.Find the length of your foods array
console.log(foods.length)

