console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#p3')
const messageTwo = document.querySelector('#p4')
const scoreText = document.querySelector('#p2')
const messagethree = document.querySelector('#p5')
const messagefour = document.querySelector('#p6')
messageOne.textContent = ""
messageTwo.textContent = ""
var score = 0



fetch('/skin').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            msgloc.textContent = 'Error'
            msg.textContent = data.error


        }
        else {
            messageOne.textContent = data.skins.substr(0, data.skins.indexOf(','));
            var skin1 = data.skins.substring(
                data.skins.indexOf("<https") + 1,
                data.skins.lastIndexOf("&")
            );
            console.log(skin1)
            document.getElementById("img1").src = skin1

            var skin2 = data.skins.substring(
                data.skins.lastIndexOf("<https") + 1,
            );
            console.log(skin2)
            document.getElementById("img2").src = skin2
            var skintext2 = data.skins.substring(
                data.skins.indexOf("%B : ") + 4,
                data.skins.lastIndexOf(",")
            );
            messageTwo.textContent = skintext2
            console.log(localStorage)

            score = parseInt(localStorage.getItem("score"))
            scoreText.textContent = "Score: " + score


            document.getElementById('btn1').addEventListener("click", function () {
                
                
                var price1 = data.skins.substring(
                    data.skins.indexOf("),") + 2,
                    data.skins.indexOf("<http")
                );
                var price2 = data.skins.substring(
                    data.skins.lastIndexOf("),") + 2,
                    data.skins.lastIndexOf("<http")
                );
                messagethree.textContent = "$" + price1.toString()
                messagefour.textContent = "$" + price2.toString()
                
                if (parseFloat(price1) > parseFloat(price2)) {
                    score = score + 1
                    scoreText.textContent = "Score: " + score
                    scoreString = score.toString()
                    localStorage.setItem("score", scoreString)
                    
                    setTimeout(function () {
                        location.reload();
                    }, (3 * 800));

                }
                else {
                    
                    score = 0
                    localStorage.setItem("score", "0")
                    scoreText.textContent = "Score: " + score
                    
                    setTimeout(function () {
                        location.reload();
                    }, (3 * 800));

                }
            });
            document.getElementById('btn2').addEventListener("click", function () {
                
                
                var price1 = data.skins.substring(
                    data.skins.indexOf("),") + 2,
                    data.skins.indexOf("<http")
                );
                var price2 = data.skins.substring(
                    data.skins.lastIndexOf("),") + 2,
                    data.skins.lastIndexOf("<http")
                );
                messagethree.textContent = "$" + price1
                messagefour.textContent = "$" + price2
                if (parseFloat(price1) < parseFloat(price2)) {
                    score = score + 1
                    scoreText.textContent = "Score: " + score
                    scoreString = score.toString()
                    localStorage.setItem("score", scoreString)
                    
                    setTimeout(function () {
                        location.reload();
                    }, (3 * 800));

                }
                else {
    
                    score = 0
                    localStorage.setItem("score", "0")
                    scoreText.textContent = "Score: " + score
                    setTimeout(function () {
                        location.reload();
                    }, (3 * 800));
                    
                    

                }
            });


        }
    })
})
  



