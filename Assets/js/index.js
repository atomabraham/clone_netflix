//quetsion 1
let answer1=document.getElementById('question')
answer1.addEventListener('click',function(){
    if(divAnswer1.style.display=='none'){
        divAnswer1.style.display='block'
        divAnswer2.style.display='none'
        divAnswer3.style.display='none'
        divAnswer5.style.display='none'
        divAnswer4.style.display='none'
        divAnswer6.style.display='none'
        divAnswer1.style.transitionDuration = "1s|2s|8s"
        divButtonPlus1.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        //document.getElementById('divAnswer1').style.transitionDuration="1s|2s|8s"
    }else{
        divAnswer1.style.display='none'
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        
        
    }
})
//quetsion 2
let answer2=document.getElementById('question2')
answer2.addEventListener('click',function(){
    if(divAnswer2.style.display=='none'){
        divAnswer2.style.display='block'
        divAnswer1.style.display='none'
        divAnswer3.style.display='none'
        divAnswer4.style.display='none'
        divAnswer5.style.display='none'
        divAnswer6.style.display='none'
        divAnswer2.style.transitionDuration = "5s"
        divButtonPlus2.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }else{
        divAnswer2.style.display='none'
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }
})
//quetsion 3
let answer3=document.getElementById('question3')
answer3.addEventListener('click',function(){
    if(divAnswer3.style.display=='none'){
        divAnswer3.style.display='block'
        divAnswer1.style.display='none'
        divAnswer2.style.display='none'
        divAnswer4.style.display='none'
        divAnswer5.style.display='none'
        divAnswer6.style.display='none'
        divAnswer3.style.transitionDuration = "5s"
        divButtonPlus3.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }else{
        divAnswer3.style.display='none'
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }
})
//quetsion 4
let answer4=document.getElementById('question4')
answer4.addEventListener('click',function(){
    if(divAnswer4.style.display=='none'){
        divAnswer4.style.display='block'
        divAnswer1.style.display='none'
        divAnswer2.style.display='none'
        divAnswer3.style.display='none'
        divAnswer5.style.display='none'
        divAnswer6.style.display='none'
        divAnswer4.style.transitionDuration = "5s"
        divButtonPlus4.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }else{
        divAnswer4.style.display='none'
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }
})
//quetsion 5
let answer5=document.getElementById('question5')
answer5.addEventListener('click',function(){
    if(divAnswer5.style.display=='none'){
        divAnswer5.style.display='block'
        divAnswer1.style.display='none'
        divAnswer2.style.display='none'
        divAnswer3.style.display='none'
        divAnswer4.style.display='none'
        divAnswer6.style.display='none'
        divAnswer5.style.transitionDuration = "5s"
        divButtonPlus5.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }else{
        divAnswer5.style.display='none'
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }
})
//quetsion 6
let answer6=document.getElementById('question6')
answer6.addEventListener('click',function(){
    if(divAnswer6.style.display=='none'){
        divAnswer6.style.display='block'
        divAnswer1.style.display='none'
        divAnswer2.style.display='none'
        divAnswer4.style.display='none'
        divAnswer5.style.display='none'
        divAnswer3.style.display='none'
        divAnswer6.style.transitionDuration = "5s"
        divButtonPlus6.innerHTML=`
            <svg  class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `
        divButtonPlus2.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus3.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus4.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus5.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
        divButtonPlus1.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }else{
        divAnswer6.style.display='none'
        divButtonPlus6.innerHTML=`
            <svg class="buttonPlus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="color: white;margin-left: 1%;margin-top: 20%;">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        `
    }
})