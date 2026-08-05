// Static database of popular Indian trains for instant offline search.
// The live API is used only for tracking — search stays fast and offline.

export interface TrainEntry {
  number: string;
  name: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
}

export const TRAINS_DB: TrainEntry[] = [
  // Rajdhani Express
  { number: '12951', name: 'New Delhi Tejas Rajdhani Express', from: 'Mumbai Central', fromCode: 'MMCT', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12952', name: 'Mumbai Tejas Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Mumbai Central', toCode: 'MMCT' },
  { number: '12301', name: 'Howrah Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Howrah', toCode: 'HWH' },
  { number: '12302', name: 'New Delhi Rajdhani Express', from: 'Howrah', fromCode: 'HWH', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12303', name: 'Poorva Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Howrah', toCode: 'HWH' },
  { number: '12305', name: 'Howrah Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Howrah', toCode: 'HWH' },
  { number: '12309', name: 'Patna Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '12313', name: 'Sealdah Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Sealdah', toCode: 'SDAH' },
  { number: '12431', name: 'Thiruvananthapuram Rajdhani', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Thiruvananthapuram', toCode: 'TVC' },
  { number: '12433', name: 'Chennai Rajdhani Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12435', name: 'Dibrugarh Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Dibrugarh', toCode: 'DBRG' },
  { number: '12439', name: 'Ranchi Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Ranchi', toCode: 'RNC' },
  { number: '12423', name: 'Dibrugarh Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Dibrugarh Town', toCode: 'DBRT' },
  { number: '12453', name: 'Rajdhani Express', from: 'Ranchi', fromCode: 'RNC', to: 'New Delhi', toCode: 'NDLS' },
  // Shatabdi Express
  { number: '12001', name: 'Bhopal Shatabdi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Bhopal', toCode: 'BPL' },
  { number: '12002', name: 'Bhopal Shatabdi Express', from: 'Habibganj', fromCode: 'HBJ', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12003', name: 'Lucknow Swarna Shatabdi', from: 'New Delhi', fromCode: 'NDLS', to: 'Lucknow', toCode: 'LKO' },
  { number: '12007', name: 'Chennai Shatabdi Express', from: 'Mysuru', fromCode: 'MYS', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12009', name: 'Mumbai Shatabdi Express', from: 'Mumbai Central', fromCode: 'MMCT', to: 'Ahmedabad', toCode: 'ADI' },
  { number: '12011', name: 'Kalka Shatabdi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Kalka', toCode: 'KLK' },
  { number: '12013', name: 'Amritsar Shatabdi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Amritsar', toCode: 'ASR' },
  { number: '12015', name: 'Ajmer Shatabdi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Ajmer', toCode: 'AII' },
  { number: '12017', name: 'Dehradun Shatabdi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Dehradun', toCode: 'DDN' },
  { number: '12019', name: 'Howrah Shatabdi Express', from: 'Howrah', fromCode: 'HWH', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12021', name: 'Howrah Shatabdi Express', from: 'Howrah', fromCode: 'HWH', to: 'Ranchi', toCode: 'RNC' },
  { number: '12023', name: 'Patna Shatabdi Express', from: 'Howrah', fromCode: 'HWH', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '12025', name: 'Pune Shatabdi Express', from: 'Pune', fromCode: 'PUNE', to: 'Mumbai CST', toCode: 'CSMT' },
  { number: '12027', name: 'Chennai Shatabdi Express', from: 'Chennai Central', fromCode: 'MAS', to: 'Bangalore City', toCode: 'SBC' },
  // Vande Bharat Express
  { number: '22436', name: 'Varanasi Vande Bharat Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Varanasi Junction', toCode: 'BSB' },
  { number: '22435', name: 'New Delhi Vande Bharat Express', from: 'Varanasi Junction', fromCode: 'BSB', to: 'New Delhi', toCode: 'NDLS' },
  { number: '20901', name: 'Mumbai Vande Bharat Express', from: 'Mumbai CST', fromCode: 'CSMT', to: 'Solapur', toCode: 'SUR' },
  { number: '20903', name: 'Chennai Vande Bharat Express', from: 'Chennai Central', fromCode: 'MAS', to: 'Coimbatore', toCode: 'CBE' },
  { number: '20905', name: 'Patna Vande Bharat Express', from: 'Patna Junction', fromCode: 'PNBE', to: 'Howrah', toCode: 'HWH' },
  { number: '20911', name: 'Rani Kamlapati Vande Bharat', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Rani Kamlapati', toCode: 'HBJ' },
  { number: '22221', name: 'Mumbai Vande Bharat Express', from: 'Mumbai CST', fromCode: 'CSMT', to: 'Shirdi', toCode: 'SAI' },
  { number: '22223', name: 'Amritsar Vande Bharat Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Amritsar', toCode: 'ASR' },
  { number: '22229', name: 'Howrah Vande Bharat Express', from: 'Howrah', fromCode: 'HWH', to: 'New Jalpaiguri', toCode: 'NJP' },
  { number: '22231', name: 'Lucknow Vande Bharat Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Lucknow', toCode: 'LKO' },
  { number: '20951', name: 'Ahmedabad Vande Bharat Express', from: 'Ahmedabad', fromCode: 'ADI', to: 'Mumbai Central', toCode: 'MMCT' },
  { number: '20971', name: 'Gorakhpur Vande Bharat', from: 'Lucknow', fromCode: 'LKO', to: 'Gorakhpur', toCode: 'GKP' },
  // Duronto Express
  { number: '12259', name: 'Sealdah Duronto Express', from: 'Sealdah', fromCode: 'SDAH', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12260', name: 'New Delhi Duronto Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Sealdah', toCode: 'SDAH' },
  { number: '12263', name: 'Pune Duronto Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Pune Junction', toCode: 'PUNE' },
  { number: '12269', name: 'Mumbai Duronto Express', from: 'Chennai Central', fromCode: 'MAS', to: 'Mumbai LTT', toCode: 'LTT' },
  // Express Trains
  { number: '12621', name: 'Tamil Nadu Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12622', name: 'Tamil Nadu Express', from: 'Chennai Central', fromCode: 'MAS', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12625', name: 'Kerala Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Thiruvananthapuram', toCode: 'TVC' },
  { number: '12626', name: 'Kerala Express', from: 'Thiruvananthapuram', fromCode: 'TVC', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12627', name: 'Karnataka Express', from: 'New Delhi', fromCode: 'NDLS', to: 'KSR Bengaluru City', toCode: 'SBC' },
  { number: '12628', name: 'Karnataka Express', from: 'KSR Bengaluru City', fromCode: 'SBC', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12649', name: 'Karnataka Sampark Kranti', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'KSR Bengaluru City', toCode: 'SBC' },
  { number: '12650', name: 'Karnataka Sampark Kranti', from: 'KSR Bengaluru City', fromCode: 'SBC', to: 'Hazrat Nizamuddin', toCode: 'NZM' },
  { number: '12723', name: 'Telangana Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Hyderabad', toCode: 'HYB' },
  { number: '12724', name: 'Telangana Express', from: 'Hyderabad', fromCode: 'HYB', to: 'Hazrat Nizamuddin', toCode: 'NZM' },
  { number: '12685', name: 'Mangalore Express', from: 'Chennai Central', fromCode: 'MAS', to: 'Mangalore', toCode: 'MAQ' },
  { number: '12686', name: 'Chennai Express', from: 'Mangalore', fromCode: 'MAQ', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12101', name: 'Jnaneshwari Deluxe Express', from: 'Mumbai LTT', fromCode: 'LTT', to: 'Howrah', toCode: 'HWH' },
  { number: '12102', name: 'Jnaneshwari Deluxe Express', from: 'Howrah', fromCode: 'HWH', to: 'Mumbai LTT', toCode: 'LTT' },
  // Superfast / SF
  { number: '12561', name: 'Swatantrata Senani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Rajgir', toCode: 'RGR' },
  { number: '12471', name: 'Swaraj Express', from: 'Jammu Tawi', fromCode: 'JAT', to: 'Indore', toCode: 'INDB' },
  { number: '12691', name: 'Chennai Express', from: 'Nagercoil', fromCode: 'NCJ', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12141', name: 'Patna Express', from: 'Mumbai LTT', fromCode: 'LTT', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '12229', name: 'Lucknow Mail', from: 'New Delhi', fromCode: 'NDLS', to: 'Lucknow', toCode: 'LKO' },
  { number: '12903', name: 'Golden Temple Mail', from: 'Mumbai Central', fromCode: 'MMCT', to: 'Amritsar', toCode: 'ASR' },
  { number: '12904', name: 'Golden Temple Mail', from: 'Amritsar', fromCode: 'ASR', to: 'Mumbai Central', toCode: 'MMCT' },
  { number: '14003', name: 'Delhi Sarai Rohilla Express', from: 'Delhi Sarai Rohilla', fromCode: 'DEE', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12651', name: 'Millenium Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12213', name: 'Yesvantpur Duronto Express', from: 'Delhi Sarai Rohilla', fromCode: 'DEE', to: 'Yesvantpur', toCode: 'YPR' },
  { number: '12401', name: 'Nandan Kanan Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Bhubaneswar', toCode: 'BBS' },
  { number: '22691', name: 'Rajdhani Express', from: 'KSR Bengaluru City', fromCode: 'SBC', to: 'Hazrat Nizamuddin', toCode: 'NZM' },
  { number: '22692', name: 'Rajdhani Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'KSR Bengaluru City', toCode: 'SBC' },
  { number: '22687', name: 'Yesvantpur Rajdhani Express', from: 'Yesvantpur', fromCode: 'YPR', to: 'Hazrat Nizamuddin', toCode: 'NZM' },
  { number: '22688', name: 'Hazrat Nizamuddin Rajdhani', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Yesvantpur', toCode: 'YPR' },
  { number: '12615', name: 'Grand Trunk Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12616', name: 'Grand Trunk Express', from: 'Chennai Central', fromCode: 'MAS', to: 'New Delhi', toCode: 'NDLS' },
  { number: '16315', name: 'Kochuveli Express', from: 'Thiruvananthapuram', fromCode: 'KCVL', to: 'Bangalore City', toCode: 'SBC' },
  { number: '16316', name: 'Kochuveli Express', from: 'Bangalore City', fromCode: 'SBC', to: 'Thiruvananthapuram', toCode: 'KCVL' },
  { number: '12163', name: 'Dadar Chennai Express', from: 'Dadar', fromCode: 'DR', to: 'Chennai Central', toCode: 'MAS' },
  { number: '12187', name: 'Jabalpur Garib Rath Express', from: 'Mumbai LTT', fromCode: 'LTT', to: 'Jabalpur', toCode: 'JBP' },
  { number: '12953', name: 'August Kranti Rajdhani Express', from: 'Mumbai Central', fromCode: 'MMCT', to: 'Hazrat Nizamuddin', toCode: 'NZM' },
  { number: '12954', name: 'August Kranti Rajdhani Express', from: 'Hazrat Nizamuddin', fromCode: 'NZM', to: 'Mumbai Central', toCode: 'MMCT' },
  { number: '12025', name: 'Shatabdi Express', from: 'Pune Junction', fromCode: 'PUNE', to: 'Mumbai CST', toCode: 'CSMT' },
  { number: '12959', name: 'Dadar Shatabdi Express', from: 'Dadar', fromCode: 'DR', to: 'Ahmedabad', toCode: 'ADI' },
  { number: '15005', name: 'Rapti Sagar Express', from: 'Guwahati', fromCode: 'GHY', to: 'Delhi Anand Vihar', toCode: 'ANVT' },
  { number: '12595', name: 'Gorakhpur Express', from: 'Anand Vihar Terminal', fromCode: 'ANVT', to: 'Gorakhpur', toCode: 'GKP' },

  // ==========================================
  // BIHAR TO DELHI / MUMBAI / KOLKATA / HOWRAH
  // ==========================================

  // Bihar to Delhi
  { number: '12393', name: 'Sampoorna Kranti Express', from: 'Rajendra Nagar Terminal', fromCode: 'RJPB', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12394', name: 'Sampoorna Kranti Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Rajendra Nagar Terminal', toCode: 'RJPB' },
  { number: '12391', name: 'Shramjeevi Express', from: 'Rajgir', fromCode: 'RGD', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12392', name: 'Shramjeevi Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Rajgir', toCode: 'RGD' },
  { number: '12565', name: 'Bihar Sampark Kranti Express', from: 'Darbhanga', fromCode: 'DBG', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12566', name: 'Bihar Sampark Kranti Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Darbhanga', toCode: 'DBG' },
  { number: '12553', name: 'Vaishali Express', from: 'Saharsa', fromCode: 'SHC', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12554', name: 'Vaishali Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Saharsa', toCode: 'SHC' },
  { number: '12309', name: 'Patna Tejas Rajdhani Express', from: 'Rajendra Nagar Terminal', fromCode: 'RJPB', to: 'New Delhi', toCode: 'NDLS' },
  { number: '12310', name: 'Patna Tejas Rajdhani Express', from: 'New Delhi', fromCode: 'NDLS', to: 'Rajendra Nagar Terminal', toCode: 'RJPB' },
  { number: '12296', name: 'Sanghamitra Express', from: 'Danapur', fromCode: 'DNR', to: 'Bengaluru', toCode: 'SBC' },
  { number: '12369', name: 'Kumbh Express', from: 'Howrah', fromCode: 'HWH', to: 'Dehradun', toCode: 'DDN' },
  { number: '12423', name: 'Dibrugarh Rajdhani Express', from: 'Dibrugarh', fromCode: 'DBRG', to: 'New Delhi', toCode: 'NDLS' },

  // Bihar to Mumbai
  { number: '12141', name: 'Patliputra - LTT SF Express', from: 'Patliputra', fromCode: 'PPTA', to: 'Lokmanya Tilak Terminus', toCode: 'LTT' },
  { number: '12142', name: 'LTT - Patliputra SF Express', from: 'Lokmanya Tilak Terminus', fromCode: 'LTT', to: 'Patliputra', toCode: 'PPTA' },
  { number: '13201', name: 'Patna - LTT Express', from: 'Patna Junction', fromCode: 'PNBE', to: 'Lokmanya Tilak Terminus', toCode: 'LTT' },
  { number: '13202', name: 'LTT - Patna Express', from: 'Lokmanya Tilak Terminus', fromCode: 'LTT', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '12520', name: 'Kamakhya - Lokmanya Tilak AC SF Express', from: 'Kamakhya', fromCode: 'KYQ', to: 'Lokmanya Tilak Terminus', toCode: 'LTT' },

  // Bihar to Kolkata / Howrah / Sealdah
  { number: '12023', name: 'Howrah - Patna Jan Shatabdi Express', from: 'Howrah', fromCode: 'HWH', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '12024', name: 'Patna - Howrah Jan Shatabdi Express', from: 'Patna Junction', fromCode: 'PNBE', to: 'Howrah', toCode: 'HWH' },
  { number: '22347', name: 'Howrah - Patna Vande Bharat Express', from: 'Howrah', fromCode: 'HWH', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '22348', name: 'Patna - Howrah Vande Bharat Express', from: 'Patna Junction', fromCode: 'PNBE', to: 'Howrah', toCode: 'HWH' },
  { number: '12351', name: 'Howrah - Rajendra Nagar SF Express', from: 'Howrah', fromCode: 'HWH', to: 'Rajendra Nagar Terminal', toCode: 'RJPB' },
  { number: '12352', name: 'Rajendra Nagar - Howrah SF Express', from: 'Rajendra Nagar Terminal', fromCode: 'RJPB', to: 'Howrah', toCode: 'HWH' },
  { number: '13131', name: 'Kolkata - Patna Express', from: 'Kolkata', fromCode: 'KOAA', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '13132', name: 'Patna - Kolkata Express', from: 'Patna Junction', fromCode: 'PNBE', to: 'Kolkata', toCode: 'KOAA' },
  { number: '12313', name: 'Sealdah Rajdhani Express', from: 'Sealdah', fromCode: 'SDAH', to: 'New Delhi', toCode: 'NDLS' },

  // ==========================================
  // LOCAL & MEMU PASSENGER TRAINS WITHIN BIHAR
  // ==========================================

  { number: '03611', name: 'Patna - Sasaram MEMU Special', from: 'Patna Junction', fromCode: 'PNBE', to: 'Sasaram', toCode: 'SSM' },
  { number: '03612', name: 'Sasaram - Patna MEMU Special', from: 'Sasaram', fromCode: 'SSM', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '03222', name: 'Ara - Patna MEMU Special', from: 'Ara Junction', fromCode: 'ARA', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '03221', name: 'Patna - Ara MEMU Special', from: 'Patna Junction', fromCode: 'PNBE', to: 'Ara Junction', toCode: 'ARA' },
  { number: '03263', name: 'Patna - Gaya MEMU Special', from: 'Patna Junction', fromCode: 'PNBE', to: 'Gaya Junction', toCode: 'GAYA' },
  { number: '03264', name: 'Gaya - Patna MEMU Special', from: 'Gaya Junction', fromCode: 'GAYA', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '03214', name: 'Patna - Barauni MEMU Special', from: 'Patna Junction', fromCode: 'PNBE', to: 'Barauni Junction', toCode: 'BJU' },
  { number: '03284', name: 'Patna - Buxar MEMU Special', from: 'Patna Junction', fromCode: 'PNBE', to: 'Buxar', toCode: 'BXR' },
  { number: '03283', name: 'Buxar - Patna MEMU Special', from: 'Buxar', fromCode: 'BXR', to: 'Patna Junction', toCode: 'PNBE' },
  { number: '05256', name: 'Samastipur - Muzaffarpur MEMU', from: 'Samastipur', fromCode: 'SPJ', to: 'Muzaffarpur', toCode: 'MFP' },
  { number: '05255', name: 'Muzaffarpur - Samastipur MEMU', from: 'Muzaffarpur', fromCode: 'MFP', to: 'Samastipur', toCode: 'SPJ' },
  { number: '05221', name: 'Saharsa - Purnea Court DEMU', from: 'Saharsa', fromCode: 'SHC', to: 'Purnea Court', toCode: 'PRNC' },

  
  { "number": "12393", "name": "Sampoorna Kranti Express", "from": "Rajendra Nagar Terminal (RJPB)", "fromCode": "RJPB", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12394", "name": "Sampoorna Kranti Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Rajendra Nagar Terminal (RJPB)", "toCode": "RJPB" },
  { "number": "12391", "name": "Shramjeevi Express", "from": "Rajgir (RGD)", "fromCode": "RGD", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12392", "name": "Shramjeevi Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Rajgir (RGD)", "toCode": "RGD" },
  { "number": "12568", "name": "Rajya Rani Express", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Saharsa Junction (SHC)", "toCode": "SHC" },
  { "number": "13250", "name": "Intercity Express", "from": "Bhabua Road (BBU)", "fromCode": "BBU", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03222", "name": "Ara - Patna MEMU Special", "from": "Ara Junction (ARA)", "fromCode": "ARA", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03221", "name": "Patna - Ara MEMU Special", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Ara Junction (ARA)", "toCode": "ARA" },
  { "number": "03338", "name": "Gaya - Patna Passenger via Ara", "from": "Gaya Junction (GAYA)", "fromCode": "GAYA", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "13244", "name": "Intercity Express", "from": "Bhabua Road (BBU)", "fromCode": "BBU", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03612", "name": "Sasaram - Patna MEMU Special", "from": "Sasaram Junction (SSM)", "fromCode": "SSM", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03611", "name": "Patna - Sasaram MEMU Special", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Sasaram Junction (SSM)", "toCode": "SSM" },
  { "number": "15232", "name": "Gondia - Muzaffarpur Express", "from": "Gondia Junction (G)", "fromCode": "G", "to": "Muzaffarpur Junction (MFP)", "toCode": "MFP" },
  { "number": "11123", "name": "Gwalior - Barauni Express", "from": "Gwalior Junction (GWL)", "fromCode": "GWL", "to": "Barauni Junction (BJU)", "toCode": "BJU" },
  { "number": "15052", "name": "Gorakhpur - Kolkata Express", "from": "Gorakhpur Junction (GKP)", "fromCode": "GKP", "to": "Kolkata Chitpur (KOAA)", "toCode": "KOAA" },
  { "number": "12296", "name": "Sanghamitra Express", "from": "Danapur (DNR)", "fromCode": "DNR", "to": "KSR Bengaluru (SBC)", "toCode": "SBC" },
  { "number": "12142", "name": "Patliputra - LTT Express", "from": "Patliputra Junction (PPTA)", "fromCode": "PPTA", "to": "Lokmanya Tilak Terminus (LTT)", "toCode": "LTT" },
  { "number": "12141", "name": "LTT - Patliputra Express", "from": "Lokmanya Tilak Terminus (LTT)", "fromCode": "LTT", "to": "Patliputra Junction (PPTA)", "toCode": "PPTA" },
  { "number": "12369", "name": "Kumbh Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "Dehradun (DDN)", "toCode": "DDN" },
  { "number": "03283", "name": "Buxar - DDU MEMU Special", "from": "Buxar (BXR)", "fromCode": "BXR", "to": "Pt. Deen Dayal Upadhyaya (DDU)", "toCode": "DDU" },
  { "number": "12366", "name": "Ranchi - Patna Jan Shatabdi Express", "from": "Ranchi Junction (RNC)", "fromCode": "RNC", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "18634", "name": "Ranchi - Patna Express", "from": "Ranchi Junction (RNC)", "fromCode": "RNC", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "22350", "name": "Ranchi - Patna Vande Bharat Express", "from": "Ranchi Junction (RNC)", "fromCode": "RNC", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03264", "name": "Gaya - Patna MEMU Special", "from": "Gaya Junction (GAYA)", "fromCode": "GAYA", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "03263", "name": "Patna - Gaya MEMU Special", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Gaya Junction (GAYA)", "toCode": "GAYA" },
  { "number": "03354", "name": "Gaya - Patna Passenger", "from": "Gaya Junction (GAYA)", "fromCode": "GAYA", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "12352", "name": "Rajendra Nagar - Howrah SF Express", "from": "Rajendra Nagar Terminal (RJPB)", "fromCode": "RJPB", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12351", "name": "Howrah - Rajendra Nagar SF Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "Rajendra Nagar Terminal (RJPB)", "toCode": "RJPB" },
  { "number": "13006", "name": "Amritsar - Howrah Mail", "from": "Amritsar Junction (ASR)", "fromCode": "ASR", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12334", "name": "Vibhuti Express", "from": "Prayagraj Rambag (PRRB)", "fromCode": "PRRB", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "13132", "name": "Patna - Kolkata Express", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Kolkata Chitpur (KOAA)", "toCode": "KOAA" },
  { "number": "13131", "name": "Kolkata - Patna Express", "from": "Kolkata Chitpur (KOAA)", "fromCode": "KOAA", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "13156", "name": "Mithilanchal Express", "from": "Sitamarhi (SMI)", "fromCode": "SMI", "to": "Sealdah (SDAH)", "toCode": "SDAH" },
  { "number": "12308", "name": "Jodhpur - Howrah SF Express", "from": "Jodhpur Junction (JU)", "fromCode": "JU", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12382", "name": "Poorva Express (via Gaya)", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12314", "name": "Sealdah Rajdhani Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Sealdah (SDAH)", "toCode": "SDAH" },
  { "number": "12313", "name": "Sealdah Rajdhani Express", "from": "Sealdah (SDAH)", "fromCode": "SDAH", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12380", "name": "Jalianwala Bagh Express", "from": "Amritsar Junction (ASR)", "fromCode": "ASR", "to": "Sealdah (SDAH)", "toCode": "SDAH" },
  { "number": "13152", "name": "Kolkata Express", "from": "Jammu Tawi (JAT)", "fromCode": "JAT", "to": "Kolkata Chitpur (KOAA)", "toCode": "KOAA" },
  { "number": "22388", "name": "Black Diamond Express", "from": "Dhanbad Junction (DHN)", "fromCode": "DHN", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12301", "name": "Howrah Rajdhani Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12302", "name": "New Delhi - Howrah Rajdhani Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12309", "name": "Patna Tejas Rajdhani Express", "from": "Rajendra Nagar Terminal (RJPB)", "fromCode": "RJPB", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12310", "name": "Patna Tejas Rajdhani Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Rajendra Nagar Terminal (RJPB)", "toCode": "RJPB" },
  { "number": "12423", "name": "Dibrugarh Rajdhani Express", "from": "Dibrugarh (DBRG)", "fromCode": "DBRG", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12381", "name": "Poorva Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12801", "name": "Purushottam Express", "from": "Puri (PURI)", "fromCode": "PURI", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "03288", "name": "DDU - Patna MEMU Express Special", "from": "Pt. Deen Dayal Upadhyaya (DDU)", "fromCode": "DDU", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "12023", "name": "Howrah - Patna Jan Shatabdi Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "12024", "name": "Patna - Howrah Jan Shatabdi Express", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "22347", "name": "Howrah - Patna Vande Bharat Express", "from": "Howrah Junction (HWH)", "fromCode": "HWH", "to": "Patna Junction (PNBE)", "toCode": "PNBE" },
  { "number": "22348", "name": "Patna - Howrah Vande Bharat Express", "from": "Patna Junction (PNBE)", "fromCode": "PNBE", "to": "Howrah Junction (HWH)", "toCode": "HWH" },
  { "number": "12565", "name": "Bihar Sampark Kranti Express", "from": "Darbhanga Junction (DBG)", "fromCode": "DBG", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12566", "name": "Bihar Sampark Kranti Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Darbhanga Junction (DBG)", "toCode": "DBG" },
  { "number": "12553", "name": "Vaishali Express", "from": "Saharsa Junction (SHC)", "fromCode": "SHC", "to": "New Delhi (NDLS)", "toCode": "NDLS" },
  { "number": "12554", "name": "Vaishali Express", "from": "New Delhi (NDLS)", "fromCode": "NDLS", "to": "Saharsa Junction (SHC)", "toCode": "SHC" }

];

/**
 * Search trains from the static database.
 * Matches against number, name, from/to station names and codes.
 */
export function searchLocalTrains(query: string): TrainEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return TRAINS_DB.slice(0, 12); // Return popular trains if no query

  return TRAINS_DB.filter(
    (t) =>
      t.number.startsWith(q) ||
      t.name.toLowerCase().includes(q) ||
      t.from.toLowerCase().includes(q) ||
      t.to.toLowerCase().includes(q) ||
      t.fromCode.toLowerCase().includes(q) ||
      t.toCode.toLowerCase().includes(q)
  ).slice(0, 15);
}
