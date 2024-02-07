document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll('.msg-bot');
    const paragraphs1 = document.querySelectorAll('.msg-user');
    const workExperience = document.getElementById('workExperience');
    const personalProject = document.getElementById('personalProject');
    const funFacts = document.getElementById('funFacts');
    const followUpMessage = document.getElementById('followUpMessage');
    const followUpMessage1 = document.getElementById('followUpMessage1');
    const followUpMessage2 = document.getElementById('followUpMessage2');
    workExperience.style.display = 'none';
    followUpMessage.style.display = 'none';
    personalProject.style.display = 'none';
    followUpMessage1.style.display = 'none';
    funFacts.style.display = 'none';
    followUpMessage2.style.display = 'none';

    let delay = 0; 

     for(let i = 0; i < 5; i++){
        if(i == 4){
            for(let j = 0; j < 1; j++){
                paragraphs1[j].style.opacity = '0';
                paragraphs1[j].style.animation = `fadeIn 0.5s ${delay}s forwards`;
                delay += 0.5;
            };
        }
        paragraphs[i].style.opacity = '0';
        paragraphs[i].style.animation = `fadeIn 0.5s ${delay}s forwards`;
        delay += 0.5;
    };

    function scrollToBottom() {
        const box = document.querySelector('.transparent-box');
        box.scrollTop = box.scrollHeight;
    }
    
    const toggleButton = document.getElementById('workBtn'); 
    const toggleButton1 = document.getElementById('personal-project');
    const toggleButton2 = document.getElementById('fun-facts');
    
    do {
        if(toggleButton) {
            toggleButton.addEventListener('click', () => {
                if (workExperience.style.display === 'none') {
                    workExperience.style.display = 'inline-block';
                } else {
                    workExperience.style.display = 'none';
                }

                if (followUpMessage.style.display === 'none') {
                    followUpMessage.style.display = 'inline-block';
                } else {
                    followUpMessage.style.display = 'none';
                }
            });
        }

        if(toggleButton1){
            toggleButton1.addEventListener('click', () => {
                if(personalProject.style.display === 'none') {
                    personalProject.style.display = 'inline-block';
                } else {
                    personalProject.style.display = 'none';
                }

                if (followUpMessage1.style.display === 'none') {
                    followUpMessage1.style.display = 'inline-block';
                } else {
                    followUpMessage1.style.display = 'none';
                }
            });
        }

        if(toggleButton2){
            toggleButton2.addEventListener('click', () => {
                if(funFacts.style.display === 'none') {
                    funFacts.style.display = 'inline-block';
                } else {
                    funFacts.style.display = 'none';
                }

                if (followUpMessage2.style.display === 'none') {
                    followUpMessage2.style.display = 'inline-block';
                } else {
                    followUpMessage2.style.display = 'none';
                }
            });
        }
    }while(!toggleButton.onclick || !toggleButton1.onclick || !toggleButton2.onclick) 


    const form = document.getElementById('move-input-box');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const userInput = document.getElementById('chat-logo').value.toLowerCase();

        const inputToButtonIdMap = {
            'work experience': 'workBtn',
            'personal projects': 'personal-project',
            'personal project': 'personal-project',
            'fun facts': 'fun-facts'
        };

        if (inputToButtonIdMap.hasOwnProperty(userInput)) {
            const buttonId = inputToButtonIdMap[userInput];
            const button = document.getElementById(buttonId);
            console.log(`Button to click: ${buttonId}`); // Debugging line
            if (button) {
                button.click();
                errorMessage.style.display = 'none';
            }
        } else {
            errorMessage.style.display = 'block';
        }

        document.getElementById('chat-logo').value = '';
    });
   
});

