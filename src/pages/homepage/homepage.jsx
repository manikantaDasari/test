import React from 'react';
import './homepage.scss';
import {userData} from '../../userdata';

class Homepage extends React.Component{
    constructor(){
        super()
        this.state={
            like:false,
            start:0,            
            end:9,
            page:1,
            totalPages:null,
            perPage:10
        }
    }

    toggleLike(){      

        this.setState({like:!this.state.like})
        console.log(this.state.like)
    }

    componentDidMount(){
        this.changePage()
    }

    changePage(){
        const {perPage,page}=this.state;        
        this.setState({totalPages:Math.ceil(userData.length/perPage)})
        this.setState({start:(page-1)*perPage})
        this.setState({end:(page)*perPage})
    }


    pagenation=e=>{
        const {start,end,page,totalPages,perPage}=this.state;
        const type= e.target.value;
        this.setState({start:(page-1)*perPage})
        this.setState({totalPages:Math.ceil(userData/perPage)})   

        if (type==='prev') {
            this.setState({page:page-1},this.changePage)
            
        }else{
            this.setState({page:page+1},this.changePage)
        }
    }

    

    render(){
        const{like,start,end,page,totalPages} = this.state
        return(
            <React.Fragment>
                <div className="container">                

                { userData.slice(start, end).map((user,i)=>(
                    <div key={i} className='post'>

                    <div className="header">
                        <img className='profilePic' src= {user.ProfilePicture} alt=""/>
                        <h5 className='profileName'>{user.profileName}</h5>
                        <p className='userName'>{user.username}</p>
                        <p className='time'>{ `${new Date().getHours()-user.timeStamp}h`}</p>
                    </div>

                    <div className="content">
                        <p className='postText'>{user.Post}</p>
                        <img src= {user.Image} className='postImg' alt="" width='100%'/>
                    </div>

                    <div className="footer">
                        <p className='like'><span className={`${like?'active':''} 'heart'`} onClick={this.toggleLike.bind(this)}><i className="fa fa-heart"></i></span> <span className='count'>{user.likes}</span> </p>
                    </div>

                    </div>)

                )}

                <div className='pagenation'>
                    <button className={`${(page===totalPages && totalPages>1)?'active':''} button`} onClick={this.pagenation.bind(this)} value='prev'>Prev</button>
                    <button className={`${(page===1 && totalPages>1)?'active':''} button`} onClick={this.pagenation.bind(this)} value='next'>Next</button>
                </div>

                </div>

                
                
            </React.Fragment>
        )
    }

}

export default Homepage;