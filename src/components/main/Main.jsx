import "./Main.css";
import Chart from "../charts/Chart";


const Main = () => {
    return (
        <main>
            {/* start main container */}
            <div className="main__container">
                <div className="main__title">
                    {/* img */}
                    <div className="main__greeting">
                        <h1>Hello guest</h1>
                        <p>Welcome to your dashboard</p>
                    </div>
                </div>

                {/* start main cards */}
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of subs</p>
                            <span className="font-bold text-title">327</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title">2548</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of videos</p>
                            <span className="font-bold text-title">289</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of likes</p>
                            <span className="font-bold text-title">897</span>
                        </div>
                    </div>
                </div>
                {/* end main cards */}

                {/* start charts */}
                <div className="charts">
                    {/* start charts left */}
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, Califonia, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    {/* end charts left */}

                    {/* start charts right */}
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Status reports</h1>
                                <p>Cupertino, Califonia, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$85,635</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$635,956</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>5635</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1987</p>
                            </div>
                        </div>
                    </div>
                    {/* end charts right */}
                </div>
                {/* end charts */}
            </div>
            {/* end main container */}
        </main>
    );
};


export default Main;
