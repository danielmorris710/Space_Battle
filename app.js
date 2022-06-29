/// make yourship and add attack method \\\



onload = function(){
    class Spaceship {
        constructor(){
            this.hull = 20;
            this.firepower = 5;
            this.accuracy = 0.7;
            document.getElementById("playerStats").innerHTML = `Hull  :  ${this.hull} FirePower  :  ${this.firepower} Accuracy  :  ${this.accuracy}`
        }

        attackNow(target) {
            if (Math.random() < (this.accuracy)){
                target.hull -= this.firepower;
                if (target.hull > 0){
                    alert(`YES! YOU HIT THE ALIEN! \n The alien has ${alien.spaceship[0].hull} health left and there are ${alien.spaceship.length} alien ships remaining!`)
          
                } else {
                    alert(`GREAT SHOT! ALIEN IS NOW DEAD!!. There are ${alien.spaceship.length-1} alien ships on there way!`)
                 
                };
            } else {
                alert(`HOW DID YOU MISS!? The alien has ${alien.spaceship[0].hull} health remain. `)
            }
        }
    }

    const myShip = new Spaceship();
    console.log(myShip)

/// make alien ships \\\

    class AlienSpaceship {
        constructor(alienNumber){
            this.hull = randomStats(3,6);
            this.firepower = randomStats(2,4),
            this.accuracy = randomStats(6,8)/10,
            this.alienNumber = alienNumber
            
        }    
        attackNow(target) {
            if (Math.random() < (this.accuracy)){
               target.hull -= this.firepower;
                alert(`YOU HAVE BEEN HIT!!! Your health is down to ${myShip.hull}.`)
                // document.getElementById("playerStats").innerHTML = `Hull  :  ${(myShip.hull -= this.firepower)} FirePower  :  ${myShip.firepower} Accuracy  :  ${myShip.accuracy}`

            } else {
                alert(`They tried to hit us! But we dodged sucessfully!\n Good job captain!`);
            }

        }
    }

    /// Random Stats Generator \\\
    const randomStats = function(min, max){
        if (min || max >= 0){
            return Math.floor((Math.random()*(max-min+1)) + min);
        }
    }

/// set your ship and make ships try 1 first \\\

    class Build {
        constructor(){
            this.spaceship = []
            
        }

        makeShips(){
            const newAlienSpaceship = new AlienSpaceship (this.spaceship.length); // this.spaceship.length = alienNumber
            this.spaceship.push(newAlienSpaceship)
        }
    }


    const alien = new Build();
    alien.makeShips();
    for(let i = 0; i < 5 ; i++){
        alien.makeShips();    
    }

    document.getElementById("enemyStats").innerHTML = `Hull  :  ${alien.spaceship[0].hull} FirePower  :  ${alien.spaceship[0].firepower} Accuracy  :  ${alien.spaceship[0].accuracy}`

    

    console.log(alien);
    // console.log(alien.spaceship[0])
    // console.log(alien.spaceship[1])
    // console.log(alien.spaceship[2])
    // console.log(alien.spaceship[3])
    // console.log(alien.spaceship[4])
    // console.log(alien.spaceship[5])


/// start game \\\ ///make retreat\\\ /// option if i dont retreat\\\
    function startGame() {
        alert(`Save Planet Earth! Press OK to attack first`)
        while(myShip.hull > 0 && alien.spaceship.length > 0){
            myShip.attackNow(alien.spaceship[0])
            
            if(alien.spaceship[0].hull <= 0 && alien.spaceship.length > 0){
                alien.spaceship.shift()
                
                if(alien.spaceship.length <= 0) {
                document.getElementById("enemyStats").innerHTML = "DESTROYED THE ALIENS!!"
                document.getElementById("playerStats").innerHTML = "YOU DID IT!!"
                break;
                 }
                var playerInput = prompt(`MISSION IS NOT OVER!! \n You have ${myShip.hull} health left and  ${alien.spaceship.length} aliens waiting to attack! \n Would you like to retreat? Yes or No?`);
                if (playerInput == "Yes" || playerInput == "yes" ){
                        alert("you have retreated successfully");
                        document.getElementById("playerStats").innerHTML = `YOU GAVE UP ON EARTH??`
                        document.getElementById("enemyStats").innerHTML = "EARTH IS OURS!!"
                        break;
                } else {
                        alert("NEXT ROUND GET READY!!!")
                };
            }
            alien.spaceship[0].attackNow(myShip);
            if(myShip.hull <= 0){
                document.getElementById("playerStats").innerHTML = "YOU ARE NOW DEAD!"
                document.getElementById("enemyStats").innerHTML = "EARTH IS OURS!!"
                break;

            }
            
        }
    }

    document.getElementById("start").addEventListener("click", startGame)
   

}