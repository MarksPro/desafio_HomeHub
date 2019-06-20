import React from 'react';
import Card from './Card';
import Header from './Header';
import SideNav from './SideNav';
import InfiniteScroll from "react-infinite-scroll-component";
import '../style/css/style.css'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      listCar: [],
      hasMore: true,
      selectCar: '',
      carFilter: []
    };
    this.listJson();
    this.selectCarFn = this.selectCarFn.bind(this);
  }

  filterCar(){
   this.setState({
     carFilter: this.state.listCar.filter(car => {
       return car.car_make === this.state.selectCar;
     })
   })
  }

  selectCarFn(param){
    this.setState({
      selectCar: param
    }, () => {
      this.filterCar()
    })
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
    console.log(this.state.carFilter);
    return (
      
      <InfiniteScroll
          dataLength={this.state.listCar.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<span className="carregando"></span>}
          endMessage={
            <p className="fim" style={{ textAlign: "center" }}>
              <b>Fim da lista de produtos</b>
            </p>
          }
        >

          <Header />

          <div className="containerSection">
            <SideNav carList={this.state.listCar} carFn={this.selectCarFn} />
            <ul>
            {this.state.carFilter.map((car, index) => (
                <Card key={index} carList={car}/>
              ))}
              {this.state.listCar.map((car, index) => (
                <Card key={index} carList={car}/>
              ))}
            </ul>
          </div>
        </InfiniteScroll>
      );
  }
}

export default App
