//add this line 
// import { key, news_key } from "./secret.js";
// import countries from "./countries.js";

const countries = {
  "AF": "Afghanistan",
  "AX": "Aland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua and Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Congo, the Democratic Republic of the",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D'Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curacao",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island and Mcdonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "Korea, Democratic People's Republic of",
  "KR": "Korea, Republic of",
  "XK": "Kosovo",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libyan Arab Jamahiriya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia, the Former Yugoslav Republic of",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States of",
  "MD": "Moldova, Republic of",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "AN": "Netherlands Antilles",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory, Occupied",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthelemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts and Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "PM": "Saint Pierre and Miquelon",
  "VC": "Saint Vincent and the Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "CS": "Serbia and Montenegro",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia and the South Sandwich Islands",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard and Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan, Province of China",
  "TJ": "Tajikistan",
  "TZ": "Tanzania, United Republic of",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad and Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks and Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Minor Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Viet Nam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.s.",
  "WF": "Wallis and Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};
// require('dotenv').config();
// const key = process.env.WEATHER_API;
// const news_key = process.env.NEWS_API;

var logo = document.querySelector("h1");
var srchArea = document.getElementsByClassName("search-div")[0];
var srch = document.getElementById("srch-text");
var srchBtn = document.getElementById("search-button");
var maxTd = document.getElementsByClassName("maxtemp-td")[0];
var minTd = document.getElementsByClassName("mintemp-td")[0];
var desc = document.getElementsByClassName("desc")[0];
var curtemp = document.getElementsByClassName("curtemp")[0];
var feels = document.getElementsByClassName("feels")[0];
var humid = document.getElementsByClassName("humid")[0];
var info = document.getElementsByClassName("info");
var fwrap = document.getElementsByClassName("futur-wrap");
var dateInfo = document.getElementsByClassName("date-info");
var weatherSection = document.getElementsByClassName("weather-data")[0];
var blankPage = document.getElementsByClassName("blank")[0];
var ic = document.querySelector("i");
var fic = document.getElementsByClassName("f-icon");
var article1 = document.getElementsByClassName("one")[0];
var article2 = document.getElementsByClassName("two")[0];
var article3 = document.getElementsByClassName("three")[0];
var img1 = document.getElementsByClassName("one")[0].childNodes[1];
var img2 = document.getElementsByClassName("two")[0].childNodes[1];
var img3 = document.getElementsByClassName("three")[0].childNodes[1];
var top_loc = document.getElementsByClassName("loc")[0];
var top_date = document.getElementsByClassName("date")[0];
var forecast = document.getElementsByClassName("weather-forecast")[0];
var footer = document.getElementsByClassName("footer")[0];
var h2 = document.querySelector('h2');
var city = "";

// document.getElementsByClassName('li')[0].innerHTML = "YOLO";
// document.getElementsByClassName('li')[1].innerHTML = "YOLO";
//document.getElementsByClassName('li')[2].innerHTML = "YOLO";

blankPage.style.display = "flex";
top_date.style.display = "none";
top_loc.style.display = "none";

var API = "https://rain-chek.herokuapp.com" 

const frontPage = () => {
  fetch(API+"/news")
    .then(res => res.json()
    )
    .then(data => {
      console.log(article1);
      h2.innerText = "Articles for you";
      article1.setAttribute("href", data.value[0].url);
      article1.childNodes[3].innerHTML = data.value[0].title;     
      img1.setAttribute("src", data.value[0].image.url) 
      
      article2.setAttribute("href", data.value[1].url);
      article2.childNodes[3].innerHTML = data.value[1].title;
      img2.setAttribute("src", data.value[1].image.url) 

      article3.setAttribute("href", data.value[2].url);
      article3.childNodes[3].innerHTML = data.value[2].title;
      img3.setAttribute("src", data.value[2].image.url) 
      // document.getElementsByClassName('li')[0].innerHTML = "YOLO";
    // document.getElementsByClassName('li')[1].innerHTML = "YOLO";
    // document.getElementsByClassName('li')[2].innerHTML = "YOLO";
    })
    .catch((err) => {
      console.log(err)
      blankPage.style.display = "none";
      h2.innerHTML = "ERROR :( \nIf you're reading this while using a working internet connection, please <a href='mailto:shrawansb2000@gmail.com'><u>let me know .</u></a>"
    });
}

window.onload = () => {
  h2.innerText = "Loading...."
  frontPage();
};

const putData = () => {
  console.log("HEY")
  city = srch.value;

  fetch(API+"/weather?q="+city)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if(data.cod == 429){
        while(data.cod != 429)
          putData();
          h2.innerHTML = "Please wait awhile, the site is facing high traffic."
      }
      else if(data.cod == 200){
          h2.style.display = "none";
          blankPage.style.display = "none";
          top_date.style.display = "block";
          top_loc.style.display = "block";
          weatherSection.style.display = "flex";

          var prefix = "wi wi-owm-";
          var id = data.weather[0].id;
          var date = new Date(data.dt * 1000);

          if (data.dt > data.sys.sunset) prefix += "night";
          else prefix += "day";

          ic.setAttribute("class", prefix + "-" + id);

          curtemp.innerHTML = Math.floor(data.main.temp) + " &deg;C";
          humid.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + " %";
          feels.innerHTML =
            "Feels like " + Math.floor(data.main.feels_like) + " &deg;C";
          maxTd.innerHTML = "&#9650;" + Math.floor(data.main.temp_max) + " &deg;C";
          minTd.innerHTML = "&#9660;" + Math.floor(data.main.temp_min) + " &deg;C";
          desc.innerHTML = data.weather[0].main;
          document.getElementsByClassName("loc")[0].innerHTML =
            "&#x1f4cc;" + data.name + ", " + countries[data.sys.country];
          document.getElementsByClassName("date")[0].innerHTML =
            Date(date).split("G")[0];

          fetch(API+"/forecast?q="+city)
            .then((res) => res.json())
            .then((data) => {
              var prefix = "wi wi-owm-";

              if (data.daily[0].dt > data.daily[0].sunset) prefix += "night-";
              else prefix += "day-";
              
              forecast.childNodes[11].style.marginLeft = "4%"
              for (var i = 1; i < 8; i++) {
                if (i == 3 ||
                  i == 7){
                    forecast.childNodes[i].style.marginLeft = "4%"
                  }
                var day = new Date(data.daily[i].dt * 1000)
                  .toDateString()
                  .slice(0, 3);
                var exactDate = new Date(data.daily[i].dt * 1000)
                  .toDateString()
                  .slice(4, 11);
                var id = data.daily[i].weather[0].id;
                info[i - 1].childNodes[1].innerHTML =
                  "&#9650;" + Math.floor(data.daily[i].temp.max) + " &deg;C";

                info[i - 1].childNodes[3].innerHTML =
                  "&#9660;" + Math.floor(data.daily[i].temp.min) + " &deg;C";

                fwrap[i - 1].childNodes[3].innerHTML =
                  data.daily[i].weather[0].description;
                fic[i - 1].setAttribute("class", "f-icon " + prefix + id);

                dateInfo[i - 1].childNodes[1].innerHTML = day;
                dateInfo[i - 1].childNodes[3].innerHTML = exactDate;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }else if(data.cod == 400 || data.cod == 404){
          blankPage.style.display = "none";
          top_date.style.display = "none";
          top_loc.style.display = "none";
          weatherSection.style.display = "none";
          h2.style.display = "block";
          h2.innerHTML = "No places found. Please check your input."
        }
    })
    .catch((err) => {
      console.log(err)
      blankPage.style.display = "none";
      h2.innerHTML = "ERROR :( \nIf you're reading this while using a working internet connection, please <a href='mailto:shrawansb2000@gmail.com'><u>let me know .</u></a>"
    })
};

srchBtn.addEventListener("click", () => {
  putData();
});

srchArea.addEventListener("keydown", (e) => {
  if (e.keyCode === 13){
    h2.style.display = "block";
    putData();
  }
});

logo.addEventListener("click", () => {
  blankPage.style.display = "flex";
  weatherSection.style.display = "none";
  top_loc.style.display = "none";
  top_date.style.display = "none";
  h2.style.display = "flex"; 
  h2.innerText = "Articles for you";
  frontPage();
});
