import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Piggy from "./Components/Piggy";

function App() {
  return (

    <div className="mainThing">

      <div id="cards">
        <Card name="John Doe" icon="male1" line1="Good Listener" line2="Hard Worker"/>
        <Card name="Jane Doe" icon="female1" line1="Good Humour" line2="Brain Tumor"/>
        <Card name="Ryan Right" icon="male2" line1="Fast Runner" line2="Sharp Gunner"/>
        <Card name="Riley Right" icon="female2" line1="Bill Nye" line2="The Science Guy"/>
      </div>

      {/* <Footer/> */}
      
    </div>
  
  );
}

export default App;
