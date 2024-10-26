
import './App.css';
import Exp from './Components/Exp';
import Icon from './Components/Icon';
import Map from './Components/Map';
import Profile from './Components/Profile';
import Resume from './Components/Resume';
import Slider from './Components/Slider';
import Tech from './Components/Tech';

const  icons = [
  {
    src: "https://i.pinimg.com/originals/57/84/08/578408947ec37a138619034dfabab227.gif"
  },
  {
    src: "https://i.pinimg.com/originals/57/84/08/578408947ec37a138619034dfabab227.gif"
  },{
    src: "https://i.pinimg.com/originals/57/84/08/578408947ec37a138619034dfabab227.gif"
  },
]

const map = "https://i.pinimg.com/originals/57/84/08/578408947ec37a138619034dfabab227.gif" 

function App() {
  return (
    <div className="App">

<div className='mainCont'>


<div className='hh'>
<Profile />
</div>

<div className='fl'>
<Slider />
<div className='mm'>
<Map src={map}/>
<Resume />
</div>
</div>

<div className='iconPart'>

<div className='iconsp'>
{
  icons.map((item, i)=> <Icon key={i} src={item} />)
}
</div>

<div className='myus'>
<Icon src="https://i.pinimg.com/originals/dd/50/b6/dd50b6932dfd6ff35c020c63f7e1213f.gif"/>

<Tech />

</div>

</div>

<div className='exppart'>
  <Exp />
</div>


     </div>

    </div>
  );
}

export default App;
