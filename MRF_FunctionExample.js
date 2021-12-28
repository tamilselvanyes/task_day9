var request = new XMLHttpRequest();
request.open('GET' , 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'); 
request.send();
request.onload = function (){
    var data = JSON.parse(request.response);

    // countries from Asia continent /region
    var asian_Countries = data.filter( item => item.region == "Asia" )
    var asian_Countries_name = asian_Countries.map((item)=> item.name)
    console.log("Asian Countries:")
    console.log(asian_Countries_name);

    //countries with a population of less than 2 lakhs
    var countries_lessthan_twoLakh_population = data.filter(item => item.population < 200000)
    var countries_lessthan_twoLakh_population_name = countries_lessthan_twoLakh_population.map(item => item.name)
    console.log("Countries with less than 2 lakhs population:")
    console.log(countries_lessthan_twoLakh_population_name);
    

    // name, capital, flag using forEach function
    data.forEach(item => {
       console.log(`${item.name}   ${item.capital}   ${item.flag}`)
    });



    //total population of countries using reduce function
    var totalpopulation;
    totalpopulation = data.reduce((acc, item) => acc + item.population, 0 )
    console.log("Total Population:   " +totalpopulation)

        
    
    //country which uses US Dollars as currency
    var countries_USD = data .filter (item => {
        for(let i =0 ; i < item.currencies.length ; i++){
           if (item.currencies[i].code === "USD"){
            return item;
           }
        }
    })
    var USD_Countries_name = countries_USD.map((item)=> item.name)
    console.log("Countries that use USD as Currency:");
    console.log(USD_Countries_name)

}




/*Output:
script.js:33 Asian Countries:
script.js:34 (50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Viet Nam', 'Yemen']0: "Afghanistan"1: "Armenia"2: "Azerbaijan"3: "Bahrain"4: "Bangladesh"5: "Bhutan"6: "Brunei Darussalam"7: "Cambodia"8: "China"9: "Georgia"10: "Hong Kong"11: "India"12: "Indonesia"13: "Iran (Islamic Republic of)"14: "Iraq"15: "Israel"16: "Japan"17: "Jordan"18: "Kazakhstan"19: "Kuwait"20: "Kyrgyzstan"21: "Lao People's Democratic Republic"22: "Lebanon"23: "Macao"24: "Malaysia"25: "Maldives"26: "Mongolia"27: "Myanmar"28: "Nepal"29: "Korea (Democratic People's Republic of)"30: "Oman"31: "Pakistan"32: "Palestine, State of"33: "Philippines"34: "Qatar"35: "Saudi Arabia"36: "Singapore"37: "Korea (Republic of)"38: "Sri Lanka"39: "Syrian Arab Republic"40: "Taiwan"41: "Tajikistan"42: "Thailand"43: "Timor-Leste"44: "Turkey"45: "Turkmenistan"46: "United Arab Emirates"47: "Uzbekistan"48: "Viet Nam"49: "Yemen"length: 50[[Prototype]]: Array(0)
script.js:39 Countries with less than 2 lakhs population:
script.js:40 (63) ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Holy See', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']
script.js:45 Afghanistan   Kabul   https://restcountries.eu/data/afg.svg
script.js:45 Åland Islands   Mariehamn   https://restcountries.eu/data/ala.svg
script.js:45 Albania   Tirana   https://restcountries.eu/data/alb.svg
script.js:45 Algeria   Algiers   https://restcountries.eu/data/dza.svg
script.js:45 American Samoa   Pago Pago   https://restcountries.eu/data/asm.svg
script.js:45 Andorra   Andorra la Vella   https://restcountries.eu/data/and.svg
script.js:45 Angola   Luanda   https://restcountries.eu/data/ago.svg
script.js:45 Anguilla   The Valley   https://restcountries.eu/data/aia.svg
script.js:45 Antarctica      https://restcountries.eu/data/ata.svg
script.js:45 Antigua and Barbuda   Saint John's   https://restcountries.eu/data/atg.svg
script.js:45 Argentina   Buenos Aires   https://restcountries.eu/data/arg.svg
script.js:45 Armenia   Yerevan   https://restcountries.eu/data/arm.svg
script.js:45 Aruba   Oranjestad   https://restcountries.eu/data/abw.svg
script.js:45 Australia   Canberra   https://restcountries.eu/data/aus.svg
script.js:45 Austria   Vienna   https://restcountries.eu/data/aut.svg
script.js:45 Azerbaijan   Baku   https://restcountries.eu/data/aze.svg
script.js:45 Bahamas   Nassau   https://restcountries.eu/data/bhs.svg
script.js:45 Bahrain   Manama   https://restcountries.eu/data/bhr.svg
script.js:45 Bangladesh   Dhaka   https://restcountries.eu/data/bgd.svg
script.js:45 Barbados   Bridgetown   https://restcountries.eu/data/brb.svg
script.js:45 Belarus   Minsk   https://restcountries.eu/data/blr.svg
script.js:45 Belgium   Brussels   https://restcountries.eu/data/bel.svg
script.js:45 Belize   Belmopan   https://restcountries.eu/data/blz.svg
script.js:45 Benin   Porto-Novo   https://restcountries.eu/data/ben.svg
script.js:45 Bermuda   Hamilton   https://restcountries.eu/data/bmu.svg
script.js:45 Bhutan   Thimphu   https://restcountries.eu/data/btn.svg
script.js:45 Bolivia (Plurinational State of)   Sucre   https://restcountries.eu/data/bol.svg
script.js:45 Bonaire, Sint Eustatius and Saba   Kralendijk   https://restcountries.eu/data/bes.svg
script.js:45 Bosnia and Herzegovina   Sarajevo   https://restcountries.eu/data/bih.svg
script.js:45 Botswana   Gaborone   https://restcountries.eu/data/bwa.svg
script.js:45 Bouvet Island      https://restcountries.eu/data/bvt.svg
script.js:45 Brazil   Brasília   https://restcountries.eu/data/bra.svg
script.js:45 British Indian Ocean Territory   Diego Garcia   https://restcountries.eu/data/iot.svg
script.js:45 United States Minor Outlying Islands      https://restcountries.eu/data/umi.svg
script.js:45 Virgin Islands (British)   Road Town   https://restcountries.eu/data/vgb.svg
script.js:45 Virgin Islands (U.S.)   Charlotte Amalie   https://restcountries.eu/data/vir.svg
script.js:45 Brunei Darussalam   Bandar Seri Begawan   https://restcountries.eu/data/brn.svg
script.js:45 Bulgaria   Sofia   https://restcountries.eu/data/bgr.svg
script.js:45 Burkina Faso   Ouagadougou   https://restcountries.eu/data/bfa.svg
script.js:45 Burundi   Bujumbura   https://restcountries.eu/data/bdi.svg
script.js:45 Cambodia   Phnom Penh   https://restcountries.eu/data/khm.svg
script.js:45 Cameroon   Yaoundé   https://restcountries.eu/data/cmr.svg
script.js:45 Canada   Ottawa   https://restcountries.eu/data/can.svg
script.js:45 Cabo Verde   Praia   https://restcountries.eu/data/cpv.svg
script.js:45 Cayman Islands   George Town   https://restcountries.eu/data/cym.svg
script.js:45 Central African Republic   Bangui   https://restcountries.eu/data/caf.svg
script.js:45 Chad   N'Djamena   https://restcountries.eu/data/tcd.svg
script.js:45 Chile   Santiago   https://restcountries.eu/data/chl.svg
script.js:45 China   Beijing   https://restcountries.eu/data/chn.svg
script.js:45 Christmas Island   Flying Fish Cove   https://restcountries.eu/data/cxr.svg
script.js:45 Cocos (Keeling) Islands   West Island   https://restcountries.eu/data/cck.svg
script.js:45 Colombia   Bogotá   https://restcountries.eu/data/col.svg
script.js:45 Comoros   Moroni   https://restcountries.eu/data/com.svg
script.js:45 Congo   Brazzaville   https://restcountries.eu/data/cog.svg
script.js:45 Congo (Democratic Republic of the)   Kinshasa   https://restcountries.eu/data/cod.svg
script.js:45 Cook Islands   Avarua   https://restcountries.eu/data/cok.svg
script.js:45 Costa Rica   San José   https://restcountries.eu/data/cri.svg
script.js:45 Croatia   Zagreb   https://restcountries.eu/data/hrv.svg
script.js:45 Cuba   Havana   https://restcountries.eu/data/cub.svg
script.js:45 Curaçao   Willemstad   https://restcountries.eu/data/cuw.svg
script.js:45 Cyprus   Nicosia   https://restcountries.eu/data/cyp.svg
script.js:45 Czech Republic   Prague   https://restcountries.eu/data/cze.svg
script.js:45 Denmark   Copenhagen   https://restcountries.eu/data/dnk.svg
script.js:45 Djibouti   Djibouti   https://restcountries.eu/data/dji.svg
script.js:45 Dominica   Roseau   https://restcountries.eu/data/dma.svg
script.js:45 Dominican Republic   Santo Domingo   https://restcountries.eu/data/dom.svg
script.js:45 Ecuador   Quito   https://restcountries.eu/data/ecu.svg
script.js:45 Egypt   Cairo   https://restcountries.eu/data/egy.svg
script.js:45 El Salvador   San Salvador   https://restcountries.eu/data/slv.svg
script.js:45 Equatorial Guinea   Malabo   https://restcountries.eu/data/gnq.svg
script.js:45 Eritrea   Asmara   https://restcountries.eu/data/eri.svg
script.js:45 Estonia   Tallinn   https://restcountries.eu/data/est.svg
script.js:45 Ethiopia   Addis Ababa   https://restcountries.eu/data/eth.svg
script.js:45 Falkland Islands (Malvinas)   Stanley   https://restcountries.eu/data/flk.svg
script.js:45 Faroe Islands   Tórshavn   https://restcountries.eu/data/fro.svg
script.js:45 Fiji   Suva   https://restcountries.eu/data/fji.svg
script.js:45 Finland   Helsinki   https://restcountries.eu/data/fin.svg
script.js:45 France   Paris   https://restcountries.eu/data/fra.svg
script.js:45 French Guiana   Cayenne   https://restcountries.eu/data/guf.svg
script.js:45 French Polynesia   Papeetē   https://restcountries.eu/data/pyf.svg
script.js:45 French Southern Territories   Port-aux-Français   https://restcountries.eu/data/atf.svg
script.js:45 Gabon   Libreville   https://restcountries.eu/data/gab.svg
script.js:45 Gambia   Banjul   https://restcountries.eu/data/gmb.svg
script.js:45 Georgia   Tbilisi   https://restcountries.eu/data/geo.svg
script.js:45 Germany   Berlin   https://restcountries.eu/data/deu.svg
script.js:45 Ghana   Accra   https://restcountries.eu/data/gha.svg
script.js:45 Gibraltar   Gibraltar   https://restcountries.eu/data/gib.svg
script.js:45 Greece   Athens   https://restcountries.eu/data/grc.svg
script.js:45 Greenland   Nuuk   https://restcountries.eu/data/grl.svg
script.js:45 Grenada   St. George's   https://restcountries.eu/data/grd.svg
script.js:45 Guadeloupe   Basse-Terre   https://restcountries.eu/data/glp.svg
script.js:45 Guam   Hagåtña   https://restcountries.eu/data/gum.svg
script.js:45 Guatemala   Guatemala City   https://restcountries.eu/data/gtm.svg
script.js:45 Guernsey   St. Peter Port   https://restcountries.eu/data/ggy.svg
script.js:45 Guinea   Conakry   https://restcountries.eu/data/gin.svg
script.js:45 Guinea-Bissau   Bissau   https://restcountries.eu/data/gnb.svg
script.js:45 Guyana   Georgetown   https://restcountries.eu/data/guy.svg
script.js:45 Haiti   Port-au-Prince   https://restcountries.eu/data/hti.svg
script.js:45 Heard Island and McDonald Islands      https://restcountries.eu/data/hmd.svg
script.js:45 Holy See   Rome   https://restcountries.eu/data/vat.svg
script.js:45 Honduras   Tegucigalpa   https://restcountries.eu/data/hnd.svg
script.js:45 Hong Kong   City of Victoria   https://restcountries.eu/data/hkg.svg
script.js:45 Hungary   Budapest   https://restcountries.eu/data/hun.svg
script.js:45 Iceland   Reykjavík   https://restcountries.eu/data/isl.svg
script.js:45 India   New Delhi   https://restcountries.eu/data/ind.svg
script.js:45 Indonesia   Jakarta   https://restcountries.eu/data/idn.svg
script.js:45 Côte d'Ivoire   Yamoussoukro   https://restcountries.eu/data/civ.svg
script.js:45 Iran (Islamic Republic of)   Tehran   https://restcountries.eu/data/irn.svg
script.js:45 Iraq   Baghdad   https://restcountries.eu/data/irq.svg
script.js:45 Ireland   Dublin   https://restcountries.eu/data/irl.svg
script.js:45 Isle of Man   Douglas   https://restcountries.eu/data/imn.svg
script.js:45 Israel   Jerusalem   https://restcountries.eu/data/isr.svg
script.js:45 Italy   Rome   https://restcountries.eu/data/ita.svg
script.js:45 Jamaica   Kingston   https://restcountries.eu/data/jam.svg
script.js:45 Japan   Tokyo   https://restcountries.eu/data/jpn.svg
script.js:45 Jersey   Saint Helier   https://restcountries.eu/data/jey.svg
script.js:45 Jordan   Amman   https://restcountries.eu/data/jor.svg
script.js:45 Kazakhstan   Astana   https://restcountries.eu/data/kaz.svg
script.js:45 Kenya   Nairobi   https://restcountries.eu/data/ken.svg
script.js:45 Kiribati   South Tarawa   https://restcountries.eu/data/kir.svg
script.js:45 Kuwait   Kuwait City   https://restcountries.eu/data/kwt.svg
script.js:45 Kyrgyzstan   Bishkek   https://restcountries.eu/data/kgz.svg
script.js:45 Lao People's Democratic Republic   Vientiane   https://restcountries.eu/data/lao.svg
script.js:45 Latvia   Riga   https://restcountries.eu/data/lva.svg
script.js:45 Lebanon   Beirut   https://restcountries.eu/data/lbn.svg
script.js:45 Lesotho   Maseru   https://restcountries.eu/data/lso.svg
script.js:45 Liberia   Monrovia   https://restcountries.eu/data/lbr.svg
script.js:45 Libya   Tripoli   https://restcountries.eu/data/lby.svg
script.js:45 Liechtenstein   Vaduz   https://restcountries.eu/data/lie.svg
script.js:45 Lithuania   Vilnius   https://restcountries.eu/data/ltu.svg
script.js:45 Luxembourg   Luxembourg   https://restcountries.eu/data/lux.svg
script.js:45 Macao      https://restcountries.eu/data/mac.svg
script.js:45 Macedonia (the former Yugoslav Republic of)   Skopje   https://restcountries.eu/data/mkd.svg
script.js:45 Madagascar   Antananarivo   https://restcountries.eu/data/mdg.svg
script.js:45 Malawi   Lilongwe   https://restcountries.eu/data/mwi.svg
script.js:45 Malaysia   Kuala Lumpur   https://restcountries.eu/data/mys.svg
script.js:45 Maldives   Malé   https://restcountries.eu/data/mdv.svg
script.js:45 Mali   Bamako   https://restcountries.eu/data/mli.svg
script.js:45 Malta   Valletta   https://restcountries.eu/data/mlt.svg
script.js:45 Marshall Islands   Majuro   https://restcountries.eu/data/mhl.svg
script.js:45 Martinique   Fort-de-France   https://restcountries.eu/data/mtq.svg
script.js:45 Mauritania   Nouakchott   https://restcountries.eu/data/mrt.svg
script.js:45 Mauritius   Port Louis   https://restcountries.eu/data/mus.svg
script.js:45 Mayotte   Mamoudzou   https://restcountries.eu/data/myt.svg
script.js:45 Mexico   Mexico City   https://restcountries.eu/data/mex.svg
script.js:45 Micronesia (Federated States of)   Palikir   https://restcountries.eu/data/fsm.svg
script.js:45 Moldova (Republic of)   Chișinău   https://restcountries.eu/data/mda.svg
script.js:45 Monaco   Monaco   https://restcountries.eu/data/mco.svg
script.js:45 Mongolia   Ulan Bator   https://restcountries.eu/data/mng.svg
script.js:45 Montenegro   Podgorica   https://restcountries.eu/data/mne.svg
script.js:45 Montserrat   Plymouth   https://restcountries.eu/data/msr.svg
script.js:45 Morocco   Rabat   https://restcountries.eu/data/mar.svg
script.js:45 Mozambique   Maputo   https://restcountries.eu/data/moz.svg
script.js:45 Myanmar   Naypyidaw   https://restcountries.eu/data/mmr.svg
script.js:45 Namibia   Windhoek   https://restcountries.eu/data/nam.svg
script.js:45 Nauru   Yaren   https://restcountries.eu/data/nru.svg
script.js:45 Nepal   Kathmandu   https://restcountries.eu/data/npl.svg
script.js:45 Netherlands   Amsterdam   https://restcountries.eu/data/nld.svg
script.js:45 New Caledonia   Nouméa   https://restcountries.eu/data/ncl.svg
script.js:45 New Zealand   Wellington   https://restcountries.eu/data/nzl.svg
script.js:45 Nicaragua   Managua   https://restcountries.eu/data/nic.svg
script.js:45 Niger   Niamey   https://restcountries.eu/data/ner.svg
script.js:45 Nigeria   Abuja   https://restcountries.eu/data/nga.svg
script.js:45 Niue   Alofi   https://restcountries.eu/data/niu.svg
script.js:45 Norfolk Island   Kingston   https://restcountries.eu/data/nfk.svg
script.js:45 Korea (Democratic People's Republic of)   Pyongyang   https://restcountries.eu/data/prk.svg
script.js:45 Northern Mariana Islands   Saipan   https://restcountries.eu/data/mnp.svg
script.js:45 Norway   Oslo   https://restcountries.eu/data/nor.svg
script.js:45 Oman   Muscat   https://restcountries.eu/data/omn.svg
script.js:45 Pakistan   Islamabad   https://restcountries.eu/data/pak.svg
script.js:45 Palau   Ngerulmud   https://restcountries.eu/data/plw.svg
script.js:45 Palestine, State of   Ramallah   https://restcountries.eu/data/pse.svg
script.js:45 Panama   Panama City   https://restcountries.eu/data/pan.svg
script.js:45 Papua New Guinea   Port Moresby   https://restcountries.eu/data/png.svg
script.js:45 Paraguay   Asunción   https://restcountries.eu/data/pry.svg
script.js:45 Peru   Lima   https://restcountries.eu/data/per.svg
script.js:45 Philippines   Manila   https://restcountries.eu/data/phl.svg
script.js:45 Pitcairn   Adamstown   https://restcountries.eu/data/pcn.svg
script.js:45 Poland   Warsaw   https://restcountries.eu/data/pol.svg
script.js:45 Portugal   Lisbon   https://restcountries.eu/data/prt.svg
script.js:45 Puerto Rico   San Juan   https://restcountries.eu/data/pri.svg
script.js:45 Qatar   Doha   https://restcountries.eu/data/qat.svg
script.js:45 Republic of Kosovo   Pristina   https://restcountries.eu/data/kos.svg
script.js:45 Réunion   Saint-Denis   https://restcountries.eu/data/reu.svg
script.js:45 Romania   Bucharest   https://restcountries.eu/data/rou.svg
script.js:45 Russian Federation   Moscow   https://restcountries.eu/data/rus.svg
script.js:45 Rwanda   Kigali   https://restcountries.eu/data/rwa.svg
script.js:45 Saint Barthélemy   Gustavia   https://restcountries.eu/data/blm.svg
script.js:45 Saint Helena, Ascension and Tristan da Cunha   Jamestown   https://restcountries.eu/data/shn.svg
script.js:45 Saint Kitts and Nevis   Basseterre   https://restcountries.eu/data/kna.svg
script.js:45 Saint Lucia   Castries   https://restcountries.eu/data/lca.svg
script.js:45 Saint Martin (French part)   Marigot   https://restcountries.eu/data/maf.svg
script.js:45 Saint Pierre and Miquelon   Saint-Pierre   https://restcountries.eu/data/spm.svg
script.js:45 Saint Vincent and the Grenadines   Kingstown   https://restcountries.eu/data/vct.svg
script.js:45 Samoa   Apia   https://restcountries.eu/data/wsm.svg
script.js:45 San Marino   City of San Marino   https://restcountries.eu/data/smr.svg
script.js:45 Sao Tome and Principe   São Tomé   https://restcountries.eu/data/stp.svg
script.js:45 Saudi Arabia   Riyadh   https://restcountries.eu/data/sau.svg
script.js:45 Senegal   Dakar   https://restcountries.eu/data/sen.svg
script.js:45 Serbia   Belgrade   https://restcountries.eu/data/srb.svg
script.js:45 Seychelles   Victoria   https://restcountries.eu/data/syc.svg
script.js:45 Sierra Leone   Freetown   https://restcountries.eu/data/sle.svg
script.js:45 Singapore   Singapore   https://restcountries.eu/data/sgp.svg
script.js:45 Sint Maarten (Dutch part)   Philipsburg   https://restcountries.eu/data/sxm.svg
script.js:45 Slovakia   Bratislava   https://restcountries.eu/data/svk.svg
script.js:45 Slovenia   Ljubljana   https://restcountries.eu/data/svn.svg
script.js:45 Solomon Islands   Honiara   https://restcountries.eu/data/slb.svg
script.js:45 Somalia   Mogadishu   https://restcountries.eu/data/som.svg
script.js:45 South Africa   Pretoria   https://restcountries.eu/data/zaf.svg
script.js:45 South Georgia and the South Sandwich Islands   King Edward Point   https://restcountries.eu/data/sgs.svg
script.js:45 Korea (Republic of)   Seoul   https://restcountries.eu/data/kor.svg
script.js:45 South Sudan   Juba   https://restcountries.eu/data/ssd.svg
script.js:45 Spain   Madrid   https://restcountries.eu/data/esp.svg
script.js:45 Sri Lanka   Colombo   https://restcountries.eu/data/lka.svg
script.js:45 Sudan   Khartoum   https://restcountries.eu/data/sdn.svg
script.js:45 Suriname   Paramaribo   https://restcountries.eu/data/sur.svg
script.js:45 Svalbard and Jan Mayen   Longyearbyen   https://restcountries.eu/data/sjm.svg
script.js:45 Swaziland   Lobamba   https://restcountries.eu/data/swz.svg
script.js:45 Sweden   Stockholm   https://restcountries.eu/data/swe.svg
script.js:45 Switzerland   Bern   https://restcountries.eu/data/che.svg
script.js:45 Syrian Arab Republic   Damascus   https://restcountries.eu/data/syr.svg
script.js:45 Taiwan   Taipei   https://restcountries.eu/data/twn.svg
script.js:45 Tajikistan   Dushanbe   https://restcountries.eu/data/tjk.svg
script.js:45 Tanzania, United Republic of   Dodoma   https://restcountries.eu/data/tza.svg
script.js:45 Thailand   Bangkok   https://restcountries.eu/data/tha.svg
script.js:45 Timor-Leste   Dili   https://restcountries.eu/data/tls.svg
script.js:45 Togo   Lomé   https://restcountries.eu/data/tgo.svg
script.js:45 Tokelau   Fakaofo   https://restcountries.eu/data/tkl.svg
script.js:45 Tonga   Nuku'alofa   https://restcountries.eu/data/ton.svg
script.js:45 Trinidad and Tobago   Port of Spain   https://restcountries.eu/data/tto.svg
script.js:45 Tunisia   Tunis   https://restcountries.eu/data/tun.svg
script.js:45 Turkey   Ankara   https://restcountries.eu/data/tur.svg
script.js:45 Turkmenistan   Ashgabat   https://restcountries.eu/data/tkm.svg
script.js:45 Turks and Caicos Islands   Cockburn Town   https://restcountries.eu/data/tca.svg
script.js:45 Tuvalu   Funafuti   https://restcountries.eu/data/tuv.svg
script.js:45 Uganda   Kampala   https://restcountries.eu/data/uga.svg
script.js:45 Ukraine   Kiev   https://restcountries.eu/data/ukr.svg
script.js:45 United Arab Emirates   Abu Dhabi   https://restcountries.eu/data/are.svg
script.js:45 United Kingdom of Great Britain and Northern Ireland   London   https://restcountries.eu/data/gbr.svg
script.js:45 United States of America   Washington, D.C.   https://restcountries.eu/data/usa.svg
script.js:45 Uruguay   Montevideo   https://restcountries.eu/data/ury.svg
script.js:45 Uzbekistan   Tashkent   https://restcountries.eu/data/uzb.svg
script.js:45 Vanuatu   Port Vila   https://restcountries.eu/data/vut.svg
script.js:45 Venezuela (Bolivarian Republic of)   Caracas   https://restcountries.eu/data/ven.svg
script.js:45 Viet Nam   Hanoi   https://restcountries.eu/data/vnm.svg
script.js:45 Wallis and Futuna   Mata-Utu   https://restcountries.eu/data/wlf.svg
script.js:45 Western Sahara   El Aaiún   https://restcountries.eu/data/esh.svg
script.js:45 Yemen   Sana'a   https://restcountries.eu/data/yem.svg
script.js:45 Zambia   Lusaka   https://restcountries.eu/data/zmb.svg
script.js:45 Zimbabwe   Harare   https://restcountries.eu/data/zwe.svg
script.js:53 Total Population:   7349137231
script.js:66 Countries that use USD as Currency:
script.js:67 (20) ['American Samoa', 'Bonaire, Sint Eustatius and Saba', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cambodia', 'Ecuador', 'El Salvador', 'Guam', 'Marshall Islands', 'Micronesia (Federated States of)', 'Northern Mariana Islands', 'Palau', 'Panama', 'Puerto Rico', 'Timor-Leste', 'Turks and Caicos Islands', 'United States of America', 'Zimbabwe']
*/
