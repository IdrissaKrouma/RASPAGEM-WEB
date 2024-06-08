import { connect } from 'react-redux';
import {  FaRegCopyright } from 'react-icons/fa';

function Footer({backGroundColor}){
    return (
        <footer className="flex justify-between items-baseline p-5 gap-2 " style={{
             backgroundColor:backGroundColor?'white':'#003566',
             color:backGroundColor?'#003566': 'white'
        }}>
            <div className='flex items-center'>
                <FaRegCopyright className='mr-1' />
                <h1 className='text-3xl hidden lx:block '>RASPAGEM</h1>
            </div>
            <span>Tout droits reserves</span>
        </footer>
    );
}


const mapStateToProps = (state) => ({
    backGroundColor: state.color.backGroundColor,
  });
  
  export default connect(mapStateToProps)(Footer);
