var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML = "" ;
    Recognition.start();
}

Recognition.onresult = function (event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "tire minha selfie"){
      console.log("tirando sua selfie em 5 segundos");
      speak();

    }
 }

 function speak(){
    var synth = window.speechSynthesis;
    var speakdata = "tirando sua selfie em 5 segundos";
    var utterthis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function ()
    {
      takeselfie();
      save();
       },5000);
   }
camera = document.getElementById("camera");
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function takeselfie(){ 

   Webcam.snap(
      function (data_uri){
         document.getElementById("result").innerHTML = '<img id="SelfieImg" src="'+data_uri+'"/>';
         
       } );
   
       }   

  function save(){
   link = document.getElementById("link");
   img = document.getElementById("SelfieImg").src;
   link.href = img;
   link.click();

   }

 

