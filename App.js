import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View } from 'react-native';

function Counter(props) {
    return(
      <Text style={styles.counter}>{props.count}</Text>
    );
  };

const PlusButton = ({count, increaseCount}) => {
  return(
    <Button onPress={() => increaseCount(count + 1)} title='+'/>
  );
};

/* PlusButton without binding */
// export default class ParentComponent extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0
//     };
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Counter count={this.state.count} />
//         <PlusButton count={this.state.count} increaseCount={
//           function add(count) {
//             console.log(this);
//             this.setState({count});
//           }}/>
//       </View>
//     );
//   };
// };

/* PlusButton with binding using bind method */
// export default class ParentComponent extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.add = this.add.bind(this);
//   };
//
//   add(count) {
//     console.log(this);
//     this.setState({count});
//   };
//
//   render() {
//       return (
//         <View style={styles.container}>
//           <Counter count={this.state.count} />
//           <PlusButton count={this.state.count} increaseCount={this.add}/>
//         </View>
//     );
//   }
// };

/* Plus Button with binding using arrow functions */
export default class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  };

  render() {
      return (
        <View style={styles.container}>
          <Counter count={this.state.count} />
          <PlusButton count={this.state.count} increaseCount={(count)=>{
              console.log(this);
              this.setState({count});
            }}/>
        </View>
    );
  }
};

//<MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
