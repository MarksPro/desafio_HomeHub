import React from 'react';
import Card from './Card';
import InfiniteScroll from "react-infinite-scroll-component";
import '../style/css/style.css'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      listCar: [],
      hasMore: true
    };
    this.listJson();
  }

  listJson(){
    let url = `https://my-json-server.typicode.com/MarksPro/Dba/db`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
      let cars = data.listagem.map(car => car)
      this.setState({listCar: cars})
    });
  }

  fetchMoreData = () => {
    if (this.state.listCar.length >= 61) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      this.setState({
        listCar: this.state.listCar.concat(Array.from(this.state.listCar))
      });
    }, 1000);
  }

  render(){
    return (
      
      <InfiniteScroll
          dataLength={this.state.listCar.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Carregando...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Fim da lista de produtos</b>
            </p>
          }
        >
          <ul>
            {this.state.listCar.map((i, index) => (
              <Card key={index} carList={i}/>
            ))}
          </ul>
        </InfiniteScroll>
      );
  }
}

export default App