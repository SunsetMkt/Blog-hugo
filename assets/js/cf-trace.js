async function getCfCDNinfo(id) {
    // Get text element
    const textElement = document.getElementById(id);

    // Get trace
    const response = await fetch("/cdn-cgi/trace");
    if (!response.ok) {
        console.error("[getCfCDNinfo]", "Request error", response);
        return;
    }
    const data = (await response.text()).trim();
    if (!data.includes("visit_scheme=")) {
        console.error("[getCfCDNinfo]", "Invalid trace", data);
        return;
    }

    // Areas data
    const areas = [
        "Amsterdam, Netherlands - (AMS)",
        "Amman, Jordan - (AMM)",
        "Adelaide, SA, Australia - (ADL)",
        "Americana, Brazil - (QWJ)",
        "Accra, Ghana - (ACC)",
        "Ahmedabad, India - (AMD)",
        "Ashburn, VA, United States - (IAD)",
        "Auckland, New Zealand - (AKL)",
        "Athens, Greece - (ATH)",
        "Arica, Chile - (ARI)",
        "Algiers, Algeria - (ALG)",
        "Almaty, Kazakhstan - (ALA)",
        "Astara, Azerbaijan - (LLK)",
        "Atlanta, GA, United States - (ATL)",
        "Brisbane, QLD, Australia - (BNE)",
        "Barcelona, Spain - (BCN)",
        "Baghdad, Iraq - (BGW)",
        "Asunción, Paraguay - (ASU)",
        "Annaba, Algeria - (AAE)",
        "Belgrade, Serbia - (BEG)",
        "Baku, Azerbaijan - (GYD)",
        "Bangalore, India - (BLR)",
        "Antananarivo, Madagascar - (TNR)",
        "Canberra, ACT, Australia - (CBR)",
        "Belém, Brazil - (BEL)",
        "Berlin, Germany - (TXL)",
        "Bangkok, Thailand - (BKK)",
        "Boston, MA, United States - (BOS)",
        "Cape Town, South Africa - (CPT)",
        "Belo Horizonte, Brazil - (CNF)",
        "Basra, Iraq - (BSR)",
        "Christchurch, New Zealand - (CHC)",
        "Beirut, Lebanon - (BEY)",
        "Buffalo, NY, United States - (BUF)",
        "Bandar Seri Begawan, Brunei - (BWN)",
        "Blumenau, Brazil - (BNU)",
        "Hagatna, Guam - (GUM)",
        "Bratislava, Slovakia   - (BTS)",
        "Brussels, Belgium - (BRU)",
        "Calgary, AB, Canada - (YYC)",
        "Bogotá, Colombia - (BOG)",
        "Dakar, Senegal - (DKR)",
        "Dammam, Saudi Arabia - (DMM)",
        "Melbourne, VIC, Australia - (MEL)",
        "Doha, Qatar - (DOH)",
        "Bucharest, Romania - (OTP)",
        "Charlotte, NC, United States - (CLT)",
        "Dar Es Salaam, Tanzania - (DAR)",
        "Brasilia, Brazil - (BSB)",
        "Bhubaneswar, India - (BBI)",
        "Chicago, IL, United States - (ORD)",
        "Buenos Aires, Argentina - (EZE)",
        "Dubai, United Arab Emirates - (DXB)",
        "Djibouti City, Djibouti - (JIB)",
        "Budapest, Hungary - (BUD)",
        "Cebu, Philippines - (CEB)",
        "Noumea, New Caledonia - (NOU)",
        "Perth, WA, Australia - (PER)",
        "Durban, South Africa - (DUR)",
        "Chișinău, Moldova - (KIV)",
        "Columbus, OH, United States - (CMH)",
        "Caçador, Brazil - (CFC)",
        "Erbil, Iraq - (EBL)",
        "Chandigarh, India - (IXC)",
        "Dallas, TX, United States - (DFW)",
        "Sydney, NSW, Australia - (SYD)",
        "Copenhagen, Denmark - (CPH)",
        "Campinas, Brazil - (VCP)",
        "Changde, China - (CGD)",
        "Haifa, Israel - (HFA)",
        "Gaborone, Botswana - (GBE)",
        "Chennai, India - (MAA)",
        "Denver, CO, United States - (DEN)",
        "Cork, Ireland -  (ORK)",
        "Harare, Zimbabwe - (HRE)",
        "Jeddah, Saudi Arabia - (JED)",
        "Tahiti, French Polynesia - (PPT)",
        "Johannesburg, South Africa - (JNB)",
        "Kuwait City, Kuwait - (KWI)",
        "Dublin, Ireland - (DUB)",
        "Detroit, MI, United States - (DTW)",
        "Córdoba, Argentina - (COR)",
        "Suva, Fiji - (SUV)",
        "Düsseldorf, Germany - (DUS)",
        "Manama, Bahrain - (BAH)",
        "Kigali, Rwanda - (KGL)",
        "Chittagong, Bangladesh - (CGP)",
        "Honolulu, HI, United States - (HNL)",
        "Cuiabá, Brazil - (CGB)",
        "Hobart, Australia - (HBA)",
        "Muscat, Oman - (MCT)",
        "Colombo, Sri Lanka - (CMB)",
        "Houston, TX, United States - (IAH)",
        "Edinburgh, United Kingdom - (EDI)",
        "Lagos, Nigeria - (LOS)",
        "Curitiba, Brazil - (CWB)",
        "Frankfurt, Germany - (FRA)",
        "Luanda, Angola - (LAD)",
        "Indianapolis, IN, United States - (IND)",
        "Dhaka, Bangladesh - (DAC)",
        "Florianopolis, Brazil - (FLN)",
        "Najaf, Iraq - (NJF)",
        "Jacksonville, FL, United States - (JAX)",
        "Geneva, Switzerland - (GVA)",
        "Fortaleza, Brazil - (FOR)",
        "Maputo, Mozambique - (MPM)",
        "Foshan, China - (FUO)",
        "Nasiriyah, Iraq - (XNH)",
        "Mombasa, Kenya - (MBA)",
        "Kansas City, MO, United States - (MCI)",
        "Ramallah - (ZDM)",
        "Gothenburg, Sweden - (GOT)",
        "Georgetown, Guyana - (GEO)",
        "Fukuoka, Japan - (FUK)",
        "Hamburg, Germany - (HAM)",
        "Las Vegas, NV, United States - (LAS)",
        "Riyadh, Saudi Arabia - (RUH)",
        "Nairobi, Kenya - (NBO)",
        "Goiânia, Brazil - (GYN)",
        "Fuzhou, China - (FOC)",
        "Los Angeles, CA, United States - (LAX)",
        "Guangzhou, China - (CAN)",
        "Helsinki, Finland - (HEL)",
        "Guatemala City, Guatemala - (GUA)",
        "Sulaymaniyah, Iraq - (ISU)",
        "Oran, Algeria - (ORN)",
        "McAllen, TX, United States - (MFE)",
        "Istanbul, Turkey - (IST)",
        "Tel Aviv, Israel - (TLV)",
        "Guayaquil, Ecuador - (GYE)",
        "Haikou, China - (HAK)",
        "Ouagadougou, Burkina Faso   - (OUA)",
        "Port Louis, Mauritius - (MRU)",
        "Memphis, TN, United States - (MEM)",
        "Hanoi, Vietnam - (HAN)",
        "Itajaí, Brazil - (ITJ)",
        "Izmir, Turkey - (ADB)",
        "Kyiv, Ukraine - (KBP)",
        "Mexico City, Mexico - (MEX)",
        "Réunion, France - (RUN)",
        "Hengshui, China - (SJW)",
        "Joinville, Brazil - (JOI)",
        "Miami, FL, United States - (MIA)",
        "Lisbon, Portugal - (LIS)",
        "Ho Chi Minh City, Vietnam - (SGN)",
        "Tunis, Tunisia - (TUN)",
        "Juazeiro do Norte, Brazil - (JDO)",
        "London, United Kingdom - (LHR)",
        "Hong Kong - (HKG)",
        "Lima, Peru - (LIM)",
        "Minneapolis, MN, United States - (MSP)",
        "Kinshasa, DR Congo - (FIH)",
        "Luxembourg City, Luxembourg - (LUX)",
        "Hyderabad, India - (HYD)",
        "Manaus, Brazil - (MAO)",
        "Cairo, Egypt - (CAI)",
        "Madrid, Spain - (MAD)",
        "Medellín, Colombia - (MDE)",
        "Montréal, QC, Canada - (YUL)",
        "Islamabad, Pakistan - (ISB)",
        "Windhoek, Namibia - (WDH)",
        "Manchester, United Kingdom - (MAN)",
        "Jakarta, Indonesia - (CGK)",
        "Neuquén, Argentina - (NQN)",
        "Nashville, United States - (BNA)",
        "Yamoussoukro, Ivory Coast - (ASK)",
        "Newark, NJ, United States - (EWR)",
        "Marseille, France - (MRS)",
        "Panama City, Panama - (PTY)",
        "Abidjan, Ivory Coast - (ABJ)",
        "Milan, Italy - (MXP)",
        "Jinan, China - (TNA)",
        "Norfolk, VA, United States - (ORF)",
        "Paramaribo, Suriname - (PBM)",
        "Kampala, Uganda - (EBB)",
        "Omaha, NE, United States - (OMA)",
        "Porto Alegre, Brazil - (POA)",
        "Minsk, Belarus - (MSQ)",
        "Moscow, Russia - (DME)",
        "Johor Bahru, Malaysia - (JHB)",
        "Ottawa, Canada - (YOW)",
        "Saint-Denis, Réunion - (RUN)",
        "Quito, Ecuador - (UIO)",
        "Munich, Germany - (MUC)",
        "Philadelphia, United States - (PHL)",
        "Kanpur, India - (KNU)",
        "Dar es Salaam, Tanzania - (DAR)",
        "Phoenix, AZ, United States - (PHX)",
        "Nicosia, Cyprus - (LCA)",
        "Kaohsiung City, Taiwan - (KHH)",
        "Recife, Brazil - (REC)",
        "Oslo, Norway - (OSL)",
        "Pittsburgh, PA, United States - (PIT)",
        "Karachi, Pakistan - (KHI)",
        "Ribeirao Preto, Brazil - (RAO)",
        "Rio de Janeiro, Brazil - (GIG)",
        "Portland, OR, United States - (PDX)",
        "Kathmandu, Nepal - (KTM)",
        "Palermo, Italy - (PMO)",
        "Paris, France - (CDG)",
        "Queretaro, MX, Mexico - (QRO)",
        "Prague, Czech Republic - (PRG)",
        "Richmond, VA, United States - (RIC)",
        "Kolkata, India - (CCU)",
        "San José, Costa Rica - (SJO)",
        "Djibouti, Djibouti - (JIB)",
        "Santiago, Chile - (SCL)",
        "Reykjavík, Iceland - (KEF)",
        "Sacramento, CA, United States - (SMF)",
        "Krasnoyarsk, Russia - (KJA)",
        "Lusaka, Zambia - (LUN)",
        "Kuala Lumpur, Malaysia - (KUL)",
        "Salt Lake City, UT, United States - (SLC)",
        "Riga, Latvia - (RIX)",
        "Santo Domingo, Dominican Republic - (SDQ)",
        "Addis Ababa, Ethiopia - (ADD)",
        "Rome, Italy - (FCO)",
        "San Diego, CA, United States - (SAN)",
        "Lahore, Pakistan - (LHE)",
        "São José do Rio Preto, Brazil - (SJP)",
        "San Jose, CA, United States - (SJC)",
        "Saint Petersburg, Russia - (LED)",
        "Langfang, China - (PKX)",
        "São José dos Campos, Brazil - (SJK)",
        "São Paulo, Brazil - (GRU)",
        "Sofia, Bulgaria - (SOF)",
        "Saskatoon, SK, Canada - (YXE)",
        "Seattle, WA, United States - (SEA)",
        "Stockholm, Sweden - (ARN)",
        "Sorocaba, Brazil - (SOD)",
        "Macau - (MFM)",
        "Sioux Falls, South Dakota - (FSD)",
        "Stuttgart, Germany   - (STR)",
        "St. Louis, MO, United States - (STL)",
        "Tallinn, Estonia - (TLL)",
        "Malé, Maldives - (MLE)",
        "Tegucigalpa, Honduras - (TGU)",
        "Tallahassee, FL, United States - (TLH)",
        "Tbilisi, Georgia - (TBS)",
        "Timbó, Brazil - (NVT)",
        "Manila, Philippines - (MNL)",
        "Thessaloniki, Greece - (SKG)",
        "Uberlândia, Brazil - (UDI)",
        "Toronto, ON, Canada - (YYZ)",
        "Mumbai, India - (BOM)",
        "Tirana, Albania - (TIA)",
        "Vitoria, Brazil - (VIX)",
        "Vancouver, BC, Canada - (YVR)",
        "Nagpur, India - (NAG)",
        "Vienna, Austria - (VIE)",
        "Winnipeg, MB, Canada - (YWG)",
        "Naha, Japan  - (OKA)",
        "Campos dos Goytacazes, Brazil - (CAW)",
        "New Delhi, India - (DEL)",
        "Vilnius, Lithuania - (VNO)",
        "San Francisco, United States - (SFO)",
        "Chapeco, Brazil - (XAP)",
        "Warsaw, Poland - (WAW)",
        "Osaka, Japan - (KIX)",
        "Kingston, Jamaica - (KIN)",
        "Bridgetown, Barbados - (BGI)",
        "Patna, India - (PAT)",
        "Bangor, United States - (BGR)",
        "St. George's, Grenada - (GND)",
        "Zagreb, Croatia - (ZAG)",
        "Phnom Penh, Cambodia - (PNH)",
        "Austin, United States - (AUS)",
        "Santiago de los Caballeros, Dominican Republic - (STI)",
        "Zürich, Switzerland - (ZRH)",
        "Qingdao, China - (TAO)",
        "Albuquerque, United States - (ABQ)",
        "La Paz, Bolivia - (LPB)",
        "Seoul, South Korea - (ICN)",
        "Lyon, France - (LYS)",
        "Guadalajara, Mexico - (GDL)",
        "Shanghai, China - (SHA)",
        "Bordeaux, France - (BOD)",
        "San Antonio, United States - (SAT)",
        "San Juan, Puerto Rico - (SJU)",
        "Singapore, Singapore - (SIN)",
        "Cleveland, United States - (CLE)",
        "Barranquilla, Colombia - (BAQ)",
        "Skopje, North Macedonia - (SKP)",
        "Surat Thani, Thailand - (URT)",
        "Durham, United States - (RDU)",
        "Palmas, Brazil - (PMW)",
        "Taipei - (TPE)",
        "Oklahoma City, United States - (OKC)",
        "Aracatuba, Brazil - (ARU)",
        "Tampa, United States - (TPA)",
        "Port of Spain, Trinidad and Tobago - (POS)",
        "Anchorage, United States - (ANC)",
        "Salvador, Brazil - (SSA)",
        "Halifax, Canada - (YHZ)",
        "Tokyo, Japan - (NRT)",
        "Timbo, Brazil - (NVT)",
        "Ulaanbaatar, Mongolia - (ULN)",
        "Vientiane, Laos - (VTE)",
        "Neuquen, Argentina - (NQN)",
        "Xinyu, China - (KHN)",
        "Yerevan, Armenia - (EVN)",
        "Yogyakarta, Indonesia - (JOG)",
        "Zurich, Switzerland - (ZRH)",
        "Zhongshan, China - (ZGN)",
        "Goiania, Brazil - (GYN)",
        "Cagayan de Oro, Philippines - (CGY)",
        "Kochi, India - (COK)",
        "Cuiaba, Brazil - (CGB)",
        "Itajai, Brazil - (ITJ)",
        "Denpasar, Indonesia - (DPS)",
        "Kannur, India - (CNN)",
        "Cacador, Brazil - (CFC)",
        "Uberlandia, Brazil - (UDI)",
        "Cali, Colombia - (CLO)",
        "San Pedro Sula, Honduras - (SAP)",
        "Bogota, Colombia - (BOG)",
        "Shenzhen, China - (SZX)",
        "Guiyang, China - (KWE)",
        "Shaoxing, China - (HGH)",
        "Changzhou, China - (CZX)",
        "Kunming, China - (KMG)",
        "Chiang Mai, Thailand - (CNX)",
        "Zhengzhou, China - (CGO)",
        "Yangquan, China - (TYN)",
        "Changsha, China - (CSX)",
        "Dalian, China - (DLC)",
        "Beihai, China - (BHY)",
        "Chongqing, China - (CKG)",
        "Xiangyang, China - (XFN)",
        "Da Nang, Vietnam - (DAD)",
        "Jiaxing, China - (JXG)",
        "Tarlac City, Philippines - (CRK)",
        "Thimphu, Bhutan - (PBH)",
        "Baoji, China - (XIY)",
        "Chengdu, China - (CTU)",
        "Astana, Kazakhstan - (NQZ)",
        "Nanning, China - (NNG)",
        "Zibo, China - (TNA)",
        "Kuching, Malaysia - (KCH)",
        "Aktobe, Kazakhstan - (AKX)",
        "Chengmai, China - (HAK)",
        "Nanchang, China - (KHN)",
        "Male, Maldives - (MLE)",
        "Tongren, China - (TEN)",
        "Taizhou, China - (HYN)",
        "Shijiazhuang, China - (SJW)",
        "Xining, China - (XNN)",
    ];

    // Parse trace
    var trace = {};
    for (const item of data.split("\n")) {
        const [key, value] = item.split("=");
        trace[key.trim()] = value.trim();
    }
    console.log("[getCfCDNinfo]", trace);

    // Set alert text
    textElement.onclick = () => {
        // navigator.clipboard.writeText(data);
        // alert(data);
        function openTextWindow(text, title = "Trace") {
            const win = window.open(
                "",
                "_blank",
                "width=600,height=400,resizable=yes,scrollbars=yes",
            );

            // If popup blocked, just alert
            if (!win) {
                alert(text);
                return;
            }

            // Build dummy html
            const html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>${title}</title>
                    <style>
                        body {
                            font-family: "JetBrains Mono", "Menlo", "Monaco", "Consolas", "Courier New", monospace;
                            white-space: pre-wrap;
                        }
                    </style>
                </head>
                <body></body>
                </html>`;
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);

            // Apply blob
            win.location.href = url;
            win.onload = () => {
                // Apply text
                const body = win.document.body;
                body.textContent = text;
            };
        }
        openTextWindow(data, "Trace");
    };

    // Get colo name
    var coloName = trace.colo;
    for (const item of areas) {
        if (item.includes(trace.colo)) {
            const nameOnly = item.split("-")[0].trim();
            coloName = nameOnly;
            break;
        }
    }

    // Get other attributes
    var attrs = [];
    attrs.push(trace.colo);
    if (trace.warp != "off") {
        attrs.push("WARP");
    }
    if (trace.sni == "encrypted") {
        attrs.push("ECH");
    }
    if (trace.gateway != "off") {
        attrs.push("Gateway");
    }
    if (trace.sliver != "none") {
        attrs.push("Sliver");
    }
    // Get attrs strings in (A, B, C)
    var attrsStr = "";
    if (attrs.length > 0) {
        attrsStr = " (" + attrs.join(", ") + ")";
    }

    var finalText = coloName + attrsStr;
    textElement.innerText = finalText;
}
