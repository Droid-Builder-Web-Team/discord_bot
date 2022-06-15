const fs = require('fs');

const links = {
    'r2|r2d2|r-series|r series': [
        '<http://www.astromech.net/> - Online Droid Building Forums',
        '<https://www.facebook.com/groups/R2.builders> - R2 Builders Group',
        '<https://www.facebook.com/astromech.net> - Astromech.net Facebook Page are the main ones.',
    ],
    'a-lt': [
        '<https://www.facebook.com/groups/altbuilders> - A-LT Builders'
    ],
    't3|t-series|t series': [
        '<https://www.facebook.com/groups/t3droidbuildersgroup> - T3 Builders'
    ],
    'bd1|bd-series|bd series': [
        '<https://www.facebook.com/groups/2237166566376768/> - BD1 Builders'
    ],
    'b1|battle|battle droid': [
        '<https://www.facebook.com/groups/2749665778627806> - B1 Battle Droid Builders'
    ],
    'mouse|mouser|mse|mse-series|mse series': [
        '<https://www.facebook.com/groups/MouseDroidBuildersClub> - Mouse Droid Builders'
    ],
    'probe|imperial probe': [
        '<https://www.facebook.com/groups/503363040384828> - Imperial Probe Droid Builders'
    ],
    'bb8|bb-series|bb series': [
        '<https://www.facebook.com/groups/BB8BuildersClub> - BB8 Builders'
    ],
    'fx-7': [
        '<https://www.facebook.com/groups/569516146941615> - FX-7 Builders'
    ],
    'pit|pit droid': [
        '<https://www.facebook.com/groups/421618565373702> - Pit Droid Builders'
    ],
    '2-1b|medical droid': [
        '<https://www.facebook.com/groups/564510187428303> - 2-1B Medical Droid Builders'  
    ],
    'chopper': [
        '<https://www.facebook.com/groups/150848812068222> - Chopper Builders'
    ],
    'ig|ig unit': [
        '<https://www.facebook.com/groups/219205625906611> - IG Unit Builders'
    ],
    'gonk': [
        '<https://www.facebook.com/groups/413080335552627> - Gonk Droid Builders'
    ],
    'd-o': [
        '<https://www.facebook.com/groups/2468594199841880> - D-O Builders'
    ],
    'rx-23|pilot|rex': [
        '<https://www.facebook.com/groups/616292118832957> - Captain Rex RX-23 Pilot Droid Builders'
    ],
    'groups|general|builders|generic': [
        '<https://www.facebook.com/groups/UKR2D2Builders/> - UK R2 Builders',
        '<https://www.facebook.com/groups/droidbuildersuk/> - Droid Builders UK',
        '<https://www.facebook.com/groups/MrBaddeley/> - Mr Baddeley\'s Printed Droids',
        '<https://www.facebook.com/groups/healthsupportfordroidbuilders> - Health Support for Droid Builders',
        '<https://www.facebook.com/groups/openr2/> - OpenR2',
        '<https://www.facebook.com/groups/161260285386282> - High Republic Droid Builders'
    ]
};

const categories = {
    'robs-mom': [
        '<https://www.google.com> - Rob\'s Mom'
    ],
    'robs-sister': [
        '<https://www.yahoo.com> - Rob\'s Sister'
    ],
    'robs-dad': [
        '<https://www.duckduckgo.com> - Rob\'s Dad'
    ],
    'robert': [
        '<https://www.bing.com> - Robert'
    ]   
};

module.exports =  {
    generateLinks: (link) => {
        let response = ': Sorry, I couln\'t find anything around that topic.';
        
        if (!link || link === 'all') {
            return Object.keys(links).map((i) => links[i].join('\n')).join('\n');
        }

        Object.keys(links).map((i) => {
            const terms = i.split('|');
            if (terms.indexOf(link) !== -1) {
                response = `Here is a list of ${link} related links I could find:\n\r${links[i].join('\n')}`;
            }

            return false; 
        });

        return response;
    },
    generateCategories: (category) => {
        let response = ': Sorry, I couln\'t find anything around that topic.';
        
        if (!category || category === 'all') {
            return Object.keys(categories).map((i) => categories[i].join('\n')).join('\n');
        }

        Object.keys(categories).map((i) => {
            const terms = i.split('|');
            if (terms.indexOf(category) !== -1) {
                response = `Here is a list of categories I could find:\n\r${categories[i].join('\n')}`;
            }

            return false; 
        });

        return response;
    },    
    makeSuggestion: (suggestion) => {
        fs.appendFile(
            (process.argv.indexOf('--local') !== -1) 
                ? 'link-suggestions.csv'
                : `${process.env.LINK_SUGGEST}.csv`,
            `\n${suggestion.content
                .replace('!link-suggestion ', `${suggestion.author.username},`)
                .replace(/ \|/g, '|')
                .replace(/\| /g, '|' )
                .split('|').join(',')}`, 
            (error) => {
              if (error) { console.log(error) };
            }
        );
    }
};