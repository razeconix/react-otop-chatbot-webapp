import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class itemList extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          products: [],
          search:"",
          checkedItems: new Map(),

   
        };
        
    }

    componentDidMount() {
        axios.get('https://enigmatic-chamber-67174.herokuapp.com/products/') //http://localhost:5000 ต้องเปลี่ยนเวลาอัพ Heroku ใช้ https://enigmatic-chamber-67174.herokuapp.com
          .then(response => {
            this.setState({ products: response.data  })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      
renderCheckboxList(){
  const  checkboxList = [
    {
        "id" :1,
        "category": "อาหาร"
    },
    {   
        "id" :2,
        "category": "สมุนไพร"
    },
    {
        "id" :3,
        "category": "เครื่องดื่ม"
    },
    {
      
        "id" :4,
        "category": "เครื่องแต่งกาย"
    }
  ];
  return checkboxList.map(listItem => (
      <label key={listItem}>
        <input name={listItem.category} type="checkbox" class="filled-in" checked={this.state.checkedItems.get(listItem.category)} onChange={this.onChangeCheckbox}/>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span>{listItem.category}</span>
      </label>
    ))
  
}
      

        //เปลี่ยนค่าเวลา Search 
      onChangeSearch= e =>{
              this.setState({search: e.target.value});
      }

      //เปลี่ยนค่า Checkbox
      onChangeCheckbox=e =>{
    
      }
     
        renderProduct = item =>{
            const {search} = this.state;
           
           // const {checkbox}= this.state;
              //search
            if(search !== "" && item.product_name.indexOf(search) ===-1 ){
              return  null
            }//end serch 

          return  <div class="col s12 m4 l4 ">
              
          <div class="card hoverable" style={{ width: 250}} key={item._id}>
            {/*-----------------------*/}
          
          <div class="card-image">
            <img src={item.img} alt={item.img} style={{width: 250,height:250}}/>
          </div>
            {/*-----------------------*/}
          <div class="card-content">
          <span class="card-title">{item.product_name}</span>
          <p>หมวดหมู่ {item.category}</p>
          <p>ราคา {item.price} บาท</p>
          </div>
            {/*-----------------------*/}
          <div class="card-action">
          <Link to={"/product/detail/"+item._id}>ดูสินค้า</Link>
          </div>

        </div>
       </div>
        }
  
    render() {
      
        return (     
          <div class="row" style={{paddingTop:30}}>  
<div class="container"> 
{/* <p>หมวดหมู่สินค้า</p>{this.renderCheckboxList()}  */}
</div>
          <div class="container" >
            {/* search*/}
                  <div>
                  
                  <div class="input-field">
               <i class="material-icons">search
               <input id="search" 
               type="text" 
               class="validate" 
               placeholder="ค้นหาสินค้า..."
               onChange={this.onChangeSearch}
              />
               </i>
                   
             </div>
                  </div>
                   {/* end search*/}

                    {/* map result to Shop component  */}
             {this.state.products.map(item => {
                return this.renderProduct(item)
             })}
             </div>
             </div>
             
            
            )
            }
    
    
  }
  export default itemList