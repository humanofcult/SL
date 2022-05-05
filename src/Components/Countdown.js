function left()
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    today = new Date(today);
    
    console.log(today);
    
    let later = new Date(document.getElementById("givenDate").value);
    var dd2 = String(later.getDate()).padStart(2, '0');
    var mm2 = String(later.getMonth() + 1).padStart(2, '0');
    var yyyy2 = later.getFullYear();
    
    later = mm2 + '/' + dd2 + '/' + yyyy2;

    later = new Date(later);

    let difference = Math.abs(later - today);
    let daysLeft = difference / (1000 * 3600 * 24);

    console.log(daysLeft)

    document.getElementById("leftich").innerHTML = "Time Left: <br>" + daysLeft + " Days";
}

const Countdown = () => {
  return (
    <div id="count">
        <input type="text" id="namich" placeholder="Name" />
        <input type="date" id="givenDate" onInput={left}/>
        <span id="leftich">Time Left:</span>
    </div>
  )
}

export default Countdown