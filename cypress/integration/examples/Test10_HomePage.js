///<reference types="cypress"/>                           //when i add this here, cy. ile inteligently reach methods
///<reference types="Cypress-iframe" />                   //first we write in terminalto install    npm install -D cypress-iframe     then import this plug in into our test file
import 'cypress-iframe'                                   //then import this plug in into our test file
import HomePage from '../pageObjects/homePage'    //  ../  parent folder i temsil ediyor , yani integration folder
import ProductsPage from '../pageObjects/ProductsPage'
describe('My test suit',function(){
   
//Mocka , its methods are similar to test ng

before(function(){
//in fixture folder,there is example.json file , we will use the data inside it
cy.fixture('example').then( function (data){
this.dt=data   // dt ve data farkli ,  this in yanindaki global , butun class ta etkin , this class i temsil eder
})      //this.data da diyebilirdim, ogretmen o sekilde kullandi
   
 })
   
  //example.json icerisine koydugun verilere dikkat et, case sensitive. Ex: Female yerine female yazsan test basarisiz olur 
   
it('my first test to visit a website',function(){
 // Cypress.config('defaultCommandTimeout',8000)    //explicit wait   --> buraya koyarsam sadece bu test icinde , bu line dan itibaren butun line larda etkili
 //yavaslaamnin oldugu line in altindada yazabiliriz , bu durumda ustteki line larda etkili olmaz
const homePage=new HomePage()//create an object from HomePage , and store it in a variable
const productsPage=new ProductsPage()

cy.visit(Cypress.env('url'))
  //cy.visit('https://rahulshettyacademy.com/angularpractice/')
// cy.get("input[name='name']:nth-child(2)").type("Bob")
             // cy.get('select').select('Female')

             homePage.getNameBox().type(this.dt.name)  //this i kullandik, boylece cypress global data oldugunu anlayabildi
             homePage.getTwoWayDataBinding().should('have.value',this.dt.name)
             homePage.getGender().select(this.dt.gender) 
     
      //if you write anything in boxes , in the box element below ,it appears , lets check it cy.get('.ng-valid').should('have.value',this.dt.name)  //jquery deki have.value like text() methodu gibi calisir, text() methodu kullanilinca promise should be resolved with then , then can be used

      //box larin icinde en az 2 karakter yazilmali ,  html dom da minlength attribute vardi  
      // ve degeri 2 , jquery de herhangi bir attribute u ve degerini secmek
      //icin should('have.attr' , 'atributName','atributeValue')  
      

    // HomePage.getNameBox.should('have.attr','minlength','2')   //prop da kullanilabilir dedi ogretmen ,ama bu daha kolay  , test7 de

      //Entrepreneur (disabled) radio button check 
      homePage.EntrepreneaurRadioButton.should('be.disabled')   //devre disi

      //click shop button and see phones to buy    //bu line da  cy.pause   deseydim debugging yapmis olurdum , execution burda dururdi
      homePage.getShopTab().click()        //yada clickten sonra  .debug() deseydim yine debugging yapmis olurdum, execution burda dururdu

//fixtures da example.json file ina bazi kulanacagim datalari koydum , we bu class ta baglanti kurdum, simdi kullanalim
this.dt.productName                       //bring productName array in the -- example.json-- in -- fixture-- folder of cypress
this.dt.productName.forEach(element=>  
    cy.selectProduct(element)              //ProductName arrayindeki elmentler sirayla gelir , ve commands.js file ina koydugumuz  selectProduct method u ile run olur
             
)
//click the checkoutButton
productsPage.checkOutButton1().click()
//second checkout after clicking first checkout


var sum=0
cy.get('tr td:nth-child(4) strong').each( ($el,index,$list)=>{
                          //cy.log($el.text())   //examine test runner to see 2 elements     //  ₹. 65000	sadece rakami elde etmek icin next line lari incele 
const amount=$el.text()
var rest=amount.split(" ")    //array olustu -2 element
var StringValueWeGet=rest[1].trim()            //2.elementin onundeki ve arkasindaki bosluklar silinir , boylece sadece rakam kalir
sum=Number(sum) + Number(StringValueWeGet)          //to change string to number  --wrap it

  
}).then(()=>{
  
  cy.log(sum)        
} )  //resolve edince  ,  siralamaya giriyor cypress te 

cy.get('h3 strong').then(function(element){
  const amount=element.text()
  var rest=amount.split(" ")    //array olustu -2 element
  var total=rest[1].trim()  
  expect(Number(total)).to.equal(sum)


})

               
//resolve edilmezse cypress asyncrnous yapisindan dolayi   line 58 i yazdirir
//cy.log(sum)   //ilkonce sonuc 0 cikti cunku iki degeride String olarak algiladi , sonra line 65 i number a donusturdu


cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('#checkbox2').click({force:true}) 
cy.contains('Purchase').click()
  //text was copied but still problem in assertion , in this  case use include instead  --maybe there are extra characters in text
//cy.get('.alert').should(' Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then((element=> {
  const actualText=element.text()
  expect(actualText.includes('Success')).to.be.true    //one of jscript chai  assertion -- expect(true).to.be.true          expect(false).to.be.false


}
  ))











//notes

//We will change this test page to page object design pattern to test


//java script syntax foreach method usage
const array1 = ['a', 'b', 'c'];

array1.forEach(function(element){console.log(element)} );

//or

const array2 = ['d', 'e', 'f'];

array2.forEach(element => console.log(element));
    



   })
})