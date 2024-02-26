let speech = new SpeechSynthesisUtterance()
let txtarea = document.querySelector("textarea")
let btn = document.querySelector("button")

let voice = []

let  voiceselect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () =>{
    all_voice=window.speechSynthesis.getVoices()
    //getting all voice 
    speech.voice=all_voice[0]
    //store all voice in speech

    all_voice.forEach((voice,i) => 
    (
        voiceselect.options[i]=new Option(voice.name,i)
    )
        
    );

}

voiceselect.addEventListener('change',()=>{
    speech.voice=all_voice[voiceselect.value]
})

btn.addEventListener('click',()=>{
    speech.text=txtarea.value
    window.speechSynthesis.speak(speech)
})