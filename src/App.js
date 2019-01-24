import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,

  };

  shuffleFriend = id => {

  var a = this.state.friends;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
}
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    //console.log(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ a });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Hogwarts Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            house={friend.house}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}




export default App;
