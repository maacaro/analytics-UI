import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import axios from 'axios'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const renderCustomizedLabel = ({ x, y, fill, payload, percent, index , textAnchor}) => {
  const { name , value } = payload.payload
  return (
   <text x={x} y={y} fill={fill} textAnchor={textAnchor}>
       {`${(value)} ${name}`}
   </text>
 );
};

const EntitiesPieChart = ({data})=>{
  	return (
      <div className={"box-shadow"}>
    	  <PieChart width={300} height={300} fill="red" >
          <Pie
            data={data} 
            cx={150} 
            cy={150} 
            labelLine={true}
            className="recharts-pie-label-text"
            alignmentBaseline="middle"
            label={renderCustomizedLabel}
            outerRadius={80} 
            fill="#8884d8"
          >
        	  {
          	  data.map((entry, index) => <Cell key= {index} fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
        </PieChart>
      </div>
    );
  }

class Dashboard extends React.Component{

  state = {
    pieChartData:[]
  }

  render(){
    return (
      <section>
        <EntitiesPieChart data={this.state.pieChartData}/>
      </section>
      )
  }
  
  componentDidMount(){
    const url = "https://maacaro-analytics-api.herokuapp.com/products/"+this.props.asin+"/analytics"
    axios.get(url)
      .then((res)=> {
        const analysisByEntity = res.data.analysisByEntityType.map(
          analysis =>({ name:analysis[1], value: analysis[0] })
        ).sort((entityA,entityB)=>entityB.value - entityA.value)
        this.setState({ pieChartData: analysisByEntity })
      })
      .catch((err)=> console.log(err))
  }

}

export default Dashboard