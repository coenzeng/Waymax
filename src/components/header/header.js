import './header.css';
import icon from './textmessage.png'

const Header = () => (
    
<header class="header-fixed">

<div class="header-limiter">

    <h1><a href="#">Way<span>max</span></a></h1>

    <nav>
        <a href="#"><img src={icon} className="icon-text" alt="Logo" /></a>
    </nav>

</div>

</header>


);

export default Header;