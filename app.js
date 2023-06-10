const gameContainer = document.querySelector(".container")
const optionImg = document.querySelectorAll('.option-img')
const userResult = document.querySelector('.user-result img')
const cpuResult = document.querySelector('.comp-result img')
const resultText = document.querySelector('.result')
optionImg.forEach((image,index1)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add('active');
        userResult.src = cpuResult.src = 'images/rock.png'
        resultText.innerHTML = 'Wait...'

        optionImg.forEach((image2,index2)=>{
            if(index1 != index2)
            {
                image2.classList.remove('active');
            }
        })

        gameContainer.classList.add('start');
        let time = setTimeout(()=>{
            
            gameContainer.classList.remove('start');
            let imageSrc = e.target.src;
            userResult.src = imageSrc;
            
            let cpuMove = Math.floor(Math.random()*3);
            let cpuImages = ['images/rock.png','images/paper.png','images/scissors.png']
            cpuResult.src = cpuImages[cpuMove];

            //Winning Logic

            let cpuArr = ["R", "P", "S"];
            let cpuValue = cpuArr[cpuMove];

            let userArr = ["R", "P", "S"];
            let userValue = userArr[index1];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let winner = outcomes[userValue+cpuValue];
            if(winner == "Draw")
            resultText.innerHTML = "Match Draw"
            else
            resultText.innerHTML = `${winner} has Won`
        },1500);
    });
});
