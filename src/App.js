import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import friends from "./friends.json";


var score = 0;
var highscore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  shuffle = id => {

    const a = this.state.friends;
    console.log(a);

  if(a[id-1].checked === 1){
    console.log("You Already clicked this! You Lose!");
    // clears them all 
    for (let i = a.length - 1; i > 0 || i === 0; i--) {
      a[i].checked = 0;
    }
    if(score > highscore){
      highscore = score;
    }
    score = 0;
  }else{
    
    a[id-1].checked = 1;
    score++;
  }
  
    console.log(a[id-1].name + " " + a[id-1].checked);
    console.log(score);

          //shuffle
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  this.setState({ a });
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Hogwarts Clicky Game</Title>
        <Counter 
          score={score} 
          
          />
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            house={friend.house}
            checked={friend.checked}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
