export const biz = () => {
    const IS_NODE = Math.random() > 0.5

    if (IS_NODE) {
      const config = require('./config.json');
    
      console.log('load some config on node platform', config)
    } else {
      console.log('some logic in browser');
    }
}    
