const Sequelize = require('sequelize');
const assert = require('assert');


const sequelize = new Sequelize('sebs', 'sebs', null, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  });


const Urls = require('../models/urls.js')(sequelize, Sequelize);
const Links = require('../models/links.js')(sequelize, Sequelize);
const Images = require('../models/images.js')(sequelize, Sequelize);
const UrlsImages = require('../models/urlsimages.js')(sequelize, Sequelize);
const Meta = require('../models/meta.js')(sequelize, Sequelize);
const TextExtracts = require('../models/textextracts.js')(sequelize, Sequelize);
describe('Urls', ()=>{
    var urls;
    beforeEach(()=>{
        urls = new Urls({
            url: 'foo',
            created: new Date(), 
            id: 1,
        });
    })

    it('has url property', ()=>{
        assert.equal(urls.url, 'foo')
    })  
    it('has created property', ()=>{
        assert.ok(urls.created)
    })
    it('has id property', ()=>{
        assert.equal(urls.id, 1)
    });
});


describe('Links', ()=>{
    var links;
    beforeEach(()=>{
        links = new Links({
            created: new Date(), 
            id: 1,
            from_urls_id: 1,
            to_urls_id: 1
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(links.from_urls_id, 1)
    })    
    it('has to_urls_id property', ()=>{
        assert.equal(links.to_urls_id, 1)
    })

    it('has created property', ()=>{
        assert.ok(links.created)
    })

    it('has id property', ()=>{
        assert.equal(links.id, 1)
    });
});

describe('Images', ()=>{
    var images;
    beforeEach(()=>{
        images = new Images({
            created: new Date(), 
            id: 1,
            url: 'foo'
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(images.url, 'foo')
    })     
    
    it('has created property', ()=>{
        assert.ok(images.created)
    })
    it('has id property', ()=>{
        assert.equal(images.id, 1)
    });
});



describe('UrlsImages', ()=>{
    var urlsImages;
    beforeEach(()=>{
        urlsImages = new UrlsImages({
            created: new Date(), 
            id: 1,
            from_urls_id: 1,
            to_images_id: 1,
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(urlsImages.from_urls_id, 1)
    });
    it('has to_images_id property', ()=>{
        assert.equal(urlsImages.to_images_id, 1)
    });        
    it('has created property', ()=>{
        assert.ok(urlsImages.created)
    });
});


describe('Meta', ()=>{
    var meta;
    beforeEach(()=>{
        meta = new Meta({
            created: new Date(), 
            id: 1,
            urls_id: 1,
            name: 'foo',
            value: 'bar',
        });
    })
    it('has id property', ()=>{
        assert.equal(meta.id, 1)
    })   
    it('has urls_id property', ()=>{
        assert.equal(meta.urls_id, 1)
    })    
    it('has created property', ()=>{
        assert.ok(meta.created)
    })
    it('has name property', ()=>{
        assert.equal(meta.name, 'foo');
    });
    it('has value property', ()=>{
        assert.equal(meta.value, 'bar');
    });
});

describe('TextExtracts', ()=>{
    var textExtracts;
    beforeEach(()=>{
        textExtracts = new TextExtracts({
            created: new Date(), 
            id: 1,
            urls_id: 1,
            text: 'foo',
        });
    })
    it('has id property', ()=>{
        assert.equal(textExtracts.id, 1)
    })   
    it('has urls_id property', ()=>{
        assert.equal(textExtracts.urls_id, 1)
    })    
    it('has created property', ()=>{
        assert.ok(textExtracts.created)
    })
    it('has text property', ()=>{
        assert.equal(textExtracts.text, 'foo');
    });
});
