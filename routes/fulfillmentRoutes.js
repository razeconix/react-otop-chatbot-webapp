const {WebhookClient} = require('dialogflow-fulfillment');

const Product = require('../models/Product');


module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        async function getProduct(agent) {
            
            let product = await Product.findOne({'product_name' : agent.parameters.product_name});
            if (product !== null ) {
                responseText = `${agent.parameters.product_name} ราคา ${product.price} บาท`;
            }

            agent.add(responseText);
        
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('getProduct fulfillment', getProduct);

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });
}