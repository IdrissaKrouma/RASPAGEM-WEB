import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BodyTable from './components/BodyTable';

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Logo */}
      <img src="images/Ellipse.png" alt="Logo" className="animate-spin w-24 h-24" />

      {/* Cercle animé */}
      <div className="absolute w-20 h-20 border-4 border-solid border-blue-700 rounded-full animate-ping"></div>
    </div>
  );
}

const App = ({ backGroundColor }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement avec setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 secondes de délai
  }, []);

  return (
    <div className={`min-h-screen flex flex-col }`}>
        {/* ${backGroundColor ? 'bg-white' : 'bg-gray-900' */}
      {loading ? <Logo /> : (
        <>
          <Navbar />
          <br />
          <div className="flex-grow">
            <BodyTable />
          </div>
          <br />
          <Footer />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  backGroundColor: state.color.backGroundColor,
});

export default connect(mapStateToProps)(App);
