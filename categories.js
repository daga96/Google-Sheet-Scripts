activeSheet =SpreadsheetApp.getActiveSheet(); // gets spreadsheet


 validation = [
     //for our specific data 
      {sheet:"Categories", range:"A2:A60"},
      {sheet:"Data", range:"B2:B20"},
    
     ];
          

//menu items
function initMenu(){
SpreadsheetApp.getUi().createMenu('Input')
        .addItem('Show Categories', 'showCategories')
        .addItem('Show Languages','showLanguages')
        .addItem('Calculate Average','calculateAverage')
        .addToUi();  
}

function onOpen() {
                 
          initMenu()
}



function calculateAverage(){
  SpreadsheetApp.getUi().showSidebar(HtmlService.createTemplateFromFile('AverageHTML')
            .evaluate()
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setTitle('Calculate average')); 
}

function showCategories(){
        SpreadsheetApp.getUi()
        .showSidebar(HtmlService.createTemplateFromFile('CategoriesHTML')
            .evaluate()
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setTitle('Choose Categories')); 
        
  
}

function showLanguages(){
        SpreadsheetApp.getUi()
        .showSidebar(HtmlService.createTemplateFromFile('LanguagesHTML')
            .evaluate()
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setTitle('Choose Languages'));
            
}



function getOptions(number) {
  
     
      return SpreadsheetApp.getActive().getSheetByName(validation[number].sheet).getRange(validation[number].range).getDisplayValues()
        .filter(String)
        .reduce(function(a, b) {
            return a.concat(b)
  })
     
 
}
function processNum(num) {
       SpreadsheetApp.getActiveRange().clearContent().setValue(Math.round(num));
}

function process(arr) {
    arr.length > 0 ? SpreadsheetApp.getActiveRange().clearContent().setValue(arr.join(", ")) :
        SpreadsheetApp.getUi().alert('No options selected')
}