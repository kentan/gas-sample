function readPlainFileByName(){
  var files = DocsList.getFiles();
  for(var i = 0; i < files.length; i++){
    var fileName = files[i].getName();
    if(fileName == "sampleFile"){
      var contents = files[i].getContentAsString();
      Logger.log(contents);
    }
  }
}


function readPlainFileBySeach(){
  var files = DocsList.find('Hello World!');
  for(var i = 0; i < files.length; i++){

    /* to avoid error at getContentAsString() on FileType != Other */
    if(files[i].getFileType() == DocsList.FileType.OTHER){
      var contents = files[i].getContentAsString();
      Logger.log(contents);
    }
  }
}

function writePlainFile(){
    outputFile = DocsList.createFile('sampleFile', ''); 
    outputFile.append('Hello World!');
}


function readRichFile(){
  var doc = DocumentApp.openById('Google Docのid');
  var text = doc.getText();  
  Logger.log(text);

}

function writeRichFile(){
  var doc = DocumentApp.create('sampleRichFile');
  doc.appendParagraph('Hello World!');
  doc.saveAndClose(); 
}
