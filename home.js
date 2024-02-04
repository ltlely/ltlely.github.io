document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll('.msg-bot');
    const paragraphs1 = document.querySelectorAll('.msg-user');
    const workExperience = document.getElementById('workExperience');
    const followUpMessage = document.getElementById('followUpMessage');
    workExperience.style.display = 'none';
    followUpMessage.style.display = 'none';

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
    
    const toggleButton = document.getElementById('workBtn'); // Replace 'toggleButton' with the actual button ID
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
});