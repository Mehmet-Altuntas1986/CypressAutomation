///<reference types="cypress"/>            //when i add this here, cy. ile inteligently reach methods
///<reference types="Cypress-iframe" />    //first we write in terminalto install    npm install -D cypress-iframe     then import this plug in into our test file
import 'cypress-iframe'                    //then import this plug in into our test file
import homePage from '../pageObjects/HomePage'     //  ../  parent folder i temsil ediyor , yani integration folder
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
//create an object from HomePage , and store it in a variable
const HomePage=new homePage()


    cy.visit('https://rahulshettyacademy.com/angularpractice/');
             // cy.get("input[name='name']:nth-child(2)").type("Bob")
             // cy.get('select').select('Female')

cy.get("input[name='name']:nth-child(2)").type(this.dt.name)  //this i kullandik, boylece cypress global data oldugunu anlayabildi
 cy.get('select').select(this.dt.gender) 
     
      //if you write anything in boxes , in the box elelment below ,it appears , lets check it cy.get('.ng-valid').should('have.value',this.dt.name)  //jquery deki have.value like text() methodu gibi calisir, text() methodu kullanilinca promise should be resolved with then , then can be used

      //box larin icinde en az 2 karakter yazilmali ,  html dom da minlength attribute vardi  
      // ve degeri 2 , jquery de herhangi bir attribute u ve degerini secmek
      //icin should('have.attr' , 'atributName','atributeValue')  
      

      .should('have.attr','minlength','2')   //prop da kullanilabilir dedi ogretmen ,ama bu daha kolay  , test7 de

      //Entrepreneur (disabled) radio button check 
cy.get('#inlineRadio3').should('be.disabled')   //devre disi

      //click shop button and see phones to buy    //bu line da  cy.pause   deseydim debugging yapmis olurdum , execution burda dururdi
cy.get(':nth-child(2) > .nav-link').click()        //yada clickten sonra  .debug() deseydim yine debugging yapmis olurdum, execution burda dururdu

//fixtures da example.json file ina bazi kulanacagim datalari koydum , we bu class ta baglanti kurdum, simdi kullanalim
this.dt.productName      //bring array in -- example.json-- in -- fixture-- folder of cypress
this.dt.productName.forEach(element=>  
    //ProductName arryindeki elmentler sirayla gelir , ve commands.js file ina koydugumuz  selectProduct method u ile run olur
    cy.selectProduct(element)                     
)

//simdi shop kismindaki telefon isimlerinin hepsini icine alacak bir locate ve onlari iteration ile bulma
cy.get('h4.card-title').each(    ($el,index,$list)=>  { 
if( $el.text().includes("Blackbery") ){
 cy.get('button.btn.btn-info').eq(index).click()  //index de dongude artiyor , bulunan elementin index i ile ayni oluyor  //index 0 1. element ,  index 1 2.element
 cy.log(index) //3   4. element
     
         } 
}) 
     

     //Simdi bu methodu  cypress-->support folder-->command config de olsuturalim ve cagiralim
     cy.selectProduct('Blackbery')
     cy.selectProduct('Nokia Edge')

    



//notes

//java script syntax foreach method usage
const array1 = ['a', 'b', 'c'];

array1.forEach(function(element){console.log(element)} );

//or

const array2 = ['d', 'e', 'f'];

array2.forEach(element => console.log(element));
    



   })
})