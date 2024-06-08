import { connect } from 'react-redux';
import { setBackGroundColor } from "../redux/actions";

function Navbar({ backGroundColor, setBackGroundColor }){

    const btnStyle = {
        backgroundColor: (backGroundColor) ? 'black':'white',
        justifyContent: (!backGroundColor) ? 'flex-start':'flex-end',
    }

    const navStyle={
        backgroundColor:(backGroundColor)?'white':'#003566'
    }

    const onClick = () => {
        const color =  !backGroundColor
        setBackGroundColor(color);
    }

    return (
        <div className="flex justify-between items-center p-5" style={navStyle}>
            <a href="http://localhost:3000/" className='flex items-center text-current no-underline'>
                <img className="h-16 md:h-20" src="images/Ellipse.png" alt="Not Found" />
                <h1 className='font-sans ml-2 text-3xl  lg:text-4xl'>RASPAGEM</h1>
            </a>
            <button className="flex items-center w-8 md:w-12  rounded-full cursor-pointer" onClick={onClick} style={btnStyle}>
                <img className="h-6 md:h-8" src={!backGroundColor ? 'images/lune.png' : 'images/soleil.png'} alt="Not Found" />
            </button>
            <a href="https://www.brvm.org/" className="hidden lx:block">
                <img className="h-16 md:h-20" src="images/logo-brvm-1.png" alt="Not Found" />
            </a>
        </div>
    );
}

const mapStateToProps = (state) => ({
    backGroundColor: state.color.backGroundColor,
});

const mapDispatchToProps = {
    setBackGroundColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);