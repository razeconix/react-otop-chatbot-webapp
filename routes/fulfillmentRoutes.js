const {WebhookClient,Text,QuickReplies} = require('dialogflow-fulfillment');

const Product = require('../models/Product');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        async function getProduct(agent) {
            const payload_data = {
                    "cards": [
                      {
                        "link": "https://enigmatic-chamber-67174.herokuapp.com/#/product/detail/5f3941305038a60004778090",
                        "image": "https://www.otopphitsanulok.com/wp-content/uploads/2019/07/dried-banana-artawan.jpg",
                        "header": "กล้วยตาก",
                        "price": "85 บาท",
                        "description": "กล้วยตากอรรถวรรณ บางกระทุ่ม พิษณุโลก"
                      }
                    ]
                  }
                 
            

            //let payload = new Payload(agent.UNSPECIFIED, payload_data, { sendAsMessage: true ,rawPayload: true});
            let product = await Product.findOne({'product_name' : agent.parameters.product_name});

            if (product !== null ) {

                
                //responseText = `${agent.parameters.product_name} ราคา ${product.price} บาท `;
                
               
                responses = [
                    new Text((`${agent.parameters.product_name}`)+" "+(`ราคา ${product.price} บาท`)),  
                ]  
            }
            agent.add(responses);

        }

        function fallback(agent) {
            agent.add(`ขอโทษนะคะ ไม่เจอข้อมูลสินค้า`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('getProduct fulfillment', getProduct);

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });
}