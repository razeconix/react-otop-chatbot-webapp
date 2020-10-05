import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js'





class itemList extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          products: [],
          search:"",
          category:""
         

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
         
          M.AutoInit();
        
  
      }
        //Get unique from Category 
      getUnique(arr, comp) {
        const unique = arr
          //store the comparison values in array
          .map(e => e[comp])
    
          // store the keys of the unique objects
          .map((e, i, final) => final.indexOf(e) === i && i)
    
          // eliminate the dead keys & store unique objects
          .filter(e => arr[e])
    
          .map(e => arr[e]);
    
        return unique;
      }
      

      

      //render checkbox list 
renderSelectList(){
  
 const uniqueCategory = this.getUnique(this.state.products, "category");
  return   <div className="input-field col s12">
   <select className="browser-default" value={this.state.category} onChange={this.onChangeCategory}>
   <option value=""  defaultValue>สินค้าทั้งหมด</option>
              {uniqueCategory.map(selectList => (
                <option key={selectList._id} value={selectList.category}>
                  {selectList.category}
                </option>
              ))}
              
            </select>
</div>
  

}
      

        //เปลี่ยนค่าเวลา Search 
      onChangeSearch= e =>{
              this.setState({search: e.target.value});
      }

      //เปลี่ยนค่า Select
      onChangeCategory = e => {
        this.setState({ category: e.target.value });
      };
     
        renderProduct = item =>{
        
            const {search} = this.state;
            const {category} = this.state;
            
           //const {checkbox} = this.state;
           // const {checkbox}= this.state;
              //search
            if(search !== "" && item.product_name.indexOf(search) ===-1 ){
             
              return  null
            }else if(category !== "" && item.category.indexOf(category) ===-1){
              return  null
            }//end serch 

          return    <div className="col s12 m4 l4"  key={item._id}>
            <div className="card hoverable">
              <div className="card-image">
              <img src={item.img} alt={item.img} style={{height:350}} loading="lazy"/>
                <span className="card-title" style={{display:'block', background:'black', width:350 ,opacity: 0.6} }>{item.product_name}</span>
              </div>
              <div className="card-content">
              <p>หมวดหมู่ {item.category}</p>
              <p>ราคา {item.price} บาท</p>
              </div>
              <div className="card-action">
              <Link to={"/product/detail/"+item._id}>ดูข้อมูลสินค้า</Link>
              </div>
            </div>
          </div>
 
          
        }
  
    render() {
     
      
        return (     
          <div className="row" style={{paddingTop:30}}>  
<div className="container"> 
{this.renderSelectList()}
<br/>
</div>
          <div className="container" >
            {/* search*/}
            <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">search</i>
          <textarea id="textarea1" className="materialize-textarea"  onChange={this.onChangeSearch}></textarea>
          <label htmlFor="textarea1">ค้นหาสินค้า...</label>
        </div>
      </div>
    </form>
  </div>
                   {/* end search*/}

                    {/* map result to Shop component  */}
             {this.state.products.map(allproduct => {
               
                return this.renderProduct(allproduct)
             })}
    
             </div>
             </div>
             
            
            )
            }
    
    
  }
  
  export default itemList