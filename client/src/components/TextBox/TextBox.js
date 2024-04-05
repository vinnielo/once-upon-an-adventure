import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import Inventory from "../Inventory/Inventory";
import { Link } from "react-router-dom";



let userName = "You";

//our story elements that don't require a userName
const storyObj = {
    home: {
        start: {
            p3: " A strange but handsome man appears! 'Hello' says Wilson. 'I am here to help. And in return, I hope you can help us. ",
            p4: " There is something wrong with the King. He lives in the castle. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
        }
}
}
 
//The text box for continue.js
class TextBox extends React.Component {


    state = {
        storyString: "",
        image: "placeholder.gif",
        name: "Misterman",
        poofShow: "hide",
        homeFirst: true,
        lives: "",
        money: 0,
        gameLog: "",
        wilsonShow: "hide",
    }

    //when the page loads
    componentDidMount() {

        // get the id from the parameters
        const id = this.props.match.params.id;

        //set our username for our story
        API.getUserSprite(id).then(user => {
            const { name } = user.data[0].sprite[0]
       
            userName = name
           
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                const { sprite, homeFirst, lives, money } = user.data[0].sprite[0]
           
                this.setState({ image: sprite})
                this.setState({ homeFirst: homeFirst})
                this.setState({lives: lives})
                this.setState({money: money})

                //If it's the first time the user is on this page, run the wilson exposition
               if ( homeFirst === true ) {
                
                this.setState({storyString:  userName + " awakens in a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. There seems to be a path that leads to a forest, and one that leads to a cliff. In the distance, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! "})
                setTimeout(this.poofAppears, 9000);
                }
                if ( homeFirst === false ) {
                    
                    this.setState({storyString: userName + " enters where they first came into the land. " + userName + " looks around and decides what to do. "})
                    
                }
               
            })
        })
        
    }
      

    //Shows the Poof gif and then runs the next function
    poofAppears = () => {
        this.setState({poofShow: "show"})
        this.updateStory("As " + userName + " looks around suddenly - POOF. ")
        setTimeout(this.wilsonAppears, 3000)
    }

    //Shows the image of wilson and he starts to talk and then runs the next function
    wilsonAppears = () => {
        
        this.updateStory(storyObj.home.start.p3)
        this.setState({poofShow: "hide", wilsonShow: "show"})
        setTimeout(this.wilsonTalks, 5000)
    }

    //Wilson talks and gives you money and then runs the next function
    wilsonTalks = () => {
        const id = this.props.match.params.id;

        this.updateStory(storyObj.home.start.p4)
        //updates our money database to 10
        API.UpdateSpriteMoney(10, id).then(()=> {
            console.log("updated money")
            this.setState({money: 10})
           
        })

        setTimeout(this.wilsonGoes, 6000)
    }

    //Wilson image goes, and he poof shows. Updates homefirst so this sequence doesn't run again. And then runs the next functions
    wilsonGoes = () => {

        const id = this.props.match.params.id;
        this.setState({wilsonShow: "hide"})
        this.setState({poofShow: "show"})

        API.UpdateSpriteHomeFirst(false, id).then(()=> {
            console.log("updated homeFirst")            
        })

        setTimeout(this.poofGoes, 3000)
    }

    //Hides the poof image and then runs the function that updates the story database
    poofGoes = () => {
        this.setState({poofShow: "hide"})
        this.updateStory("And then, in another POOF, he was gone! " + userName+ " looked around again and thought about what to do... ")
        this.createStory()
    }

    //function to set the state with the string given in the parameter
    updateStory = storyObjectPath => {
       
        this.setState({storyString: this.state.storyString + " " + storyObjectPath })
    }

    //Our function that creates our story for our user so that we can update it in the future
    createStory = () => {
        const id = this.props.match.params.id;
        let postObj = {
            text: this.state.storyString
        }
        API.createStory(postObj, id).then(res => 
            console.log("story created")).catch(err => console.log(err));
    }

    //Gets the full story when you click on the button
    findGameLog = () => {
        const id = this.props.match.params.id;
        API.getUserStory(id).then(user => {
            const { text } = user.data[0].story[0]
            this.setState({gameLog: text})
        })
    }


    render () {
    return(
            <div>
               
                {/* Our textbox for this page */}
                <div className="mapBG">
                    <div ref = "scroll">
                    
                        {this.state.storyString}
                    </div>
                    
                </div>

                {/* Pass our props to our inventory so they change in page */}
                < Inventory 
                money={this.state.money}
                />

            {/* Our menu buttons */}
            <div className="card-body text-center">
                <p></p>
                <h5>Menu</h5>

                {/* Logs you out of the game */}
                <Link to ="/">
                    <button type="button" className="btn" >
                        Log Out!
                    </button>
                </Link>

                {/* Pulls up GameLog */}
                <button type="button" className="btn btn-primary" onClick={this.findGameLog} data-toggle="modal" data-target="#game-log">
                    Game Log!
                    </button>
                </div>


                <div className= {this.state.poofShow}>
                    <img className ="poof-image" src={require("../../images/prettypoof.gif")} />
                </div>

                <div className={this.state.wilsonShow}>
                    <img className="appear-image" src={require("../../assets/sprites/wilson.gif")} />
                </div>
                <div >
                    <img className="avatar-image" src={require("../../assets/sprites/1-" + this.state.image)} />
                </div>

                {/* Our game log modal */}
                <div className="modal fade" id="game-log" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">The Story so far...</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <div className = "scroll-log">
                                    {this.state.gameLog}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(TextBox);
