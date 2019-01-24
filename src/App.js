import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  shuffle = id => {

  var a = this.state.friends;
  
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
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            house={friend.house}
            checked={1}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
