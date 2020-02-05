import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LeaderboardData:[]
        }

        this.getLeaderboardData()



        
    }

    getLeaderboardData = async (index = 1)=>{
        let response = await fetch(
            "https://api.github.com/users/Pushpendrahpx/followers"
        )
        let data = await response.json();

        console.log(data);
        this.setState({
            LeaderboardData:data
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='homecontainer'>
                    {/* ================================== Rooms ================================== */}
                    
                    <b className='lead'>Rooms Available </b>
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title lead'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>
                        
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>

               
                    </div>
                    
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>
                        
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>

               
                    </div>
                    {/* 1. What Friends Have Saved
                        2. Leaderboard
                        3. Add Some Other Resources to Optimise
                        4. Below an Another Drawer kind to Add People, [ Like Floating Button ]  */}
                    <div></div>

                </div>

                
                <div className='homecontainer'>
                    {/* ================================== Rooms ================================== */}
                    
                    <b>Rooms Available </b>
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            {/* <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button> */}
                        </div>
                        
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>

               
                    </div>
                    
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>
                        
                        <div className='room card-item'> {/*  for Every Room Actually Map Method will Iterate Here */}
                            <div className='room-title'>Living Room</div>
                            <div className='room-devices'>6 / 7 devices are Active Now</div> 
                            <div className='room-action'>
                                <button> Turn Off All </button>
                                <button> Edit Appliances </button>
                            </div>
                        </div>

               
                    </div>

                    {
                        this.state.LeaderboardData.map(user=>{
                            return(
                            <div className='lead'>{user.login}</div>
                            );
                        })
                    }

                    <br /><br />
                    {/* 1. What Friends Have Saved
                        2. Leaderboard
                        3. Add Some Other Resources to Optimise
                        4. Below an Another Drawer kind to Add People, [ Like Floating Button ]  */}
                    <div></div>

                </div>
            </div>
        );
    }
}

export default home

