const fs = require("fs");

const coreLinks = [
  "<https://www.astromech.net/> - Astromech.net Forum",
  "<https://www.facebook.com/groups/R2.builders> - R2 Builders Group",
  "<https://www.facebook.com/groups/droidbuildersuk/> - Droid Builders UK",
  "<https://www.facebook.com/groups/MrBaddeley/> - Mr Baddeley's Printed Droids",
  "<https://robsrobots.co.uk/guides.php> - Rob's Robots Guides",
];

const categories = {
  "r2|r2d2|r-series|r series|openr2|open r2|astromech|astromech.net|astromech spain| spanish astromech|australian astromech|australian r2":
    [
      "<https://www.facebook.com/groups/114873821868779> - UK R2 Builders Facebook",
      "<https://www.facebook.com/astromechspain> - Astromech Spain Facebook",
      "<https://www.facebook.com/groups/openr2/> - OpenR2 Facebook",
      "<https://www.facebook.com/groups/r2australia> - Australian R2 Builders",
      "<https://www.astromech.net/> - Astromech.net Forum",
      "<https://www.facebook.com/groups/R2.builders> - R2 Builders Group",
    ],
  "a-lt": ["<https://www.facebook.com/groups/altbuilders> - A-LT Builders"],
  "t3|t-series|t series|t3-m4| t3 m4": [
    "<https://www.facebook.com/groups/t3droidbuildersgroup> - T3 Builders",
  ],
  "bd1|bd-series|bd series": [
    "<https://www.facebook.com/groups/2237166566376768/> - BD1 Builders",
  ],
  "b1|battle|battle droid": [
    "<https://www.facebook.com/groups/2749665778627806> - B1 Battle Droid Builders",
  ],
  "mouse|mouser|mse|mse-series|mse series": [
    "<https://www.facebook.com/groups/MouseDroidBuildersClub> - Mouse Droid Builders",
  ],
  "probe|imperial probe": [
    "<https://www.facebook.com/groups/503363040384828> - Imperial Probe Droid Builders",
  ],
  "bb8|bb-series|bb series": [
    "<https://bb8builders.club/forum/> - BB8 Builders Forum",
    "<https://www.facebook.com/groups/BB8BuildersClub> - BB8 Builders",
  ],
  "fx-7|medical droid": [
    "<https://www.facebook.com/groups/569516146941615> - FX-7 Builders",
  ],
  "pit|pit droid": [
    "<https://www.facebook.com/groups/421618565373702> - Pit Droid Builders",
  ],
  "2-1b|medical droid": [
    "<https://www.facebook.com/groups/564510187428303> - 2-1B Medical Droid Builders",
  ],
  "chopper|c1-10p": [
    "<https://www.facebook.com/groups/150848812068222> - Chopper Builders",
  ],
  "ig|ig unit": [
    "<https://www.facebook.com/groups/219205625906611> - IG Unit Builders",
  ],
  "gonk|gnk": [
    "<https://www.facebook.com/groups/413080335552627> - Gonk Droid Builders",
  ],
  "d-o|do": [
    "<https://www.facebook.com/groups/2468594199841880> - D-O Builders",
  ],
  "rx-23|pilot|rex": [
    "<https://www.facebook.com/groups/616292118832957> - Captain Rex RX-23 Pilot Droid Builders",
  ],
  "groups|general|builders|generic": [
    "<https://www.facebook.com/groups/droidbuildersuk/> - Droid Builders UK",
    "<https://www.facebook.com/groups/MrBaddeley/> - Mr Baddeley's Printed Droids",
    "<https://www.facebook.com/groups/healthsupportfordroidbuilders> - Health Support for Droid Builders",
    "<https://www.facebook.com/groups/161260285386282> - High Republic Droid Builders",
    "<http://rebeldroids.net/forum/> - Rebel Droids",
  ],
  "guides|robs-robots|new builder guide|electronics guide|control system guide":
    ["<https://robsrobots.co.uk/guides.php> - Rob's Robots Guides"],
  "portal|dbuk portal|uk portal": [
    "<https://portal.droidbuilders.uk> - Droid Builders UK Portal",
  ],
};

module.exports = {
  generateLinks: (category) => {
    let response = ": Sorry, I couln't find anything around that topic.";

    if (!category || category === "all") {
      return coreLinks;
    }

    if (category === "categories") {
      Object.keys(categories).map((i) => {
        const categoryNames = i.split("|");

        return categoryNames.join("\n");
      });
    }

    Object.keys(categories).map((i) => {
      const terms = i.split("|");
      if (terms.indexOf(category) !== -1) {
        response = `Here is a list of ${category} related links I could find:\n\r${categories[
          i
        ].join("\n")}`;
      }

      return false;
    });

    return response;
  },
  makeSuggestion: (suggestion) => {
    fs.appendFile(
      process.argv.indexOf("--local") !== -1
        ? "link-suggestions.csv"
        : `${process.env.LINK_SUGGEST}.csv`,
      `\n${suggestion.content
        .replace("!link-suggestion ", `${suggestion.author.username},`)
        .replace(/ \|/g, "|")
        .replace(/\| /g, "|")
        .split("|")
        .join(",")}`,
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  },
};
