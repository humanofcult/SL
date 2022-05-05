let num;
let p = 0;

let p1 = 0;
let p2 = 0;

function rolling()
{

    num = Math.floor(Math.random() * 6) + 1;

    document.getElementById("rolled").innerText = "ROLLED: " + num;

    if(p % 2 === 0)
    {
        document.getElementById("player").innerText = "Player 1";
        if(num === 1)
        {
            p1 = 0;
            document.getElementById("p1").innerText = "Current: " + p1;
            p++;
        }
    }
    else
    {
        document.getElementById("player").innerText = "Player 2";
        if(num === 1)
        {
            p2 = 0;
            document.getElementById("p2").innerText = "Current: " + p2;
            p++;
        }
    }
}

function holding()
{

    p++;

    if(p % 2 === 0)
    {
        p2 += num;
        document.getElementById("p2").innerText = "Current " + p2;

        if(p2 >= 100)
        {
            document.getElementById("player").innerText = "Winner Player 2";
        }
        else
        {
            document.getElementById("player").innerText = "Player 1";
        }
    }
    else
    {
        p1 += num;
        document.getElementById("p1").innerText = "Current " + p1;

        if(p1 >= 100)
        {
            document.getElementById("player").innerText = "Winner Player 1";
        }
        else
        {
            document.getElementById("player").innerText = "Player 2";
        }
    }

    document.getElementById("rolled").innerHTML = "ROLLED: &nbsp;";

}

const Piggy = () => {
  return (
    <div className="game">
        <div id="innerDiv">
            <h2 id="player">Player 1</h2>

            <div id="buttons">
                <button id="dice" onClick={rolling}>Roll</button>
                <button onClick={holding}>Hold</button>
            </div>

            <br />

            <span id="rolled">ROLLED: &nbsp;</span>

            <div className="points">
                <span id="p1">Current: 0</span>
                <span id="p2">Current: 0</span>
            </div>
        </div>
    </div>
  )
}

export default Piggy