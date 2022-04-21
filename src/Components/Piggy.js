let num;
let p = 0;

let p1 = 0;
let p2 = 0;

function rolling()
{

    num = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice").innerText = num;

    if(p % 2 == 0)
    {
        document.getElementById("player").innerText = "Player 1";
        if(num == 1)
        {
            p2 = 0;
            document.getElementById("p2").innerText = "Current " + p2;
        }
    }
    else
    {
        document.getElementById("player").innerText = "Player 2";
        if(num == 1)
        {
            p1 = 0;
            document.getElementById("p1").innerText = "Current " + p1;
        }
    }

    p++;
}

function holding()
{
    if(p % 2 == 0)
    {
        p2 += num;
        document.getElementById("p2").innerText = "Current " + p2;
    }
    else
    {
        p1 += num;
        document.getElementById("p1").innerText = "Current " + p1;
    }
}

const Piggy = () => {
  return (
    <div className="game">
        <h2 id="player">Player 1</h2>
        <button id="dice" onClick={rolling}>Roll</button>
        <button onClick={holding}>Hold</button>
        <div className="points">
            <span id="p1">Current </span>
            <span id="p2">Current </span>
        </div>
    </div>
  )
}

export default Piggy