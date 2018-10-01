function ConvertToIntMapHeightLevel (heightLevel){
    var out;
    switch (heightLevel){
        case "000":
            out = 0;
            break;
        case "001":
            out = 1;
            break;
        case "010":
            out = 2;
            break;
        case "011":
            out = 3;
            break;
        case "100":
            out = 4;
            break;
        case "101":
            out = 5;
            break;
        case "110":
            out = 6;
            break;
        case "111":
            out = 7;
            break;
    }
    return out;
}

function ConvertToIntMapTexture (texture){
    var out;
    switch (texture){
        case "00":
            out = 0;
            break;
        case "01":
            out = 1;
            break;
        case "10":
            out = 2;
            break;
        case "11":
            out = 3;
            break;
    }
    return out;
}
function ConvertBase64ToBinary(symbol){
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output;
    switch(symbol){
        case key.charAt(0): output =    "000000";break;
        case key.charAt(1): output =    "000001";break;
        case key.charAt(2): output =    "000010";break;
        case key.charAt(3): output =    "000011";break;
        case key.charAt(4): output =    "000100";break;
        case key.charAt(5): output =    "000101";break;
        case key.charAt(6): output =    "000110";break;
        case key.charAt(7): output =    "000111";break;
        case key.charAt(8): output =    "001000";break;
        case key.charAt(9): output =    "001001";break;
        case key.charAt(10): output =   "001010";break;
        case key.charAt(11): output =   "001011";break;
        case key.charAt(12): output =   "001100";break;
        case key.charAt(13): output =   "001101";break;
        case key.charAt(14): output =   "001110";break;
        case key.charAt(15): output =   "001111";break;
        case key.charAt(16): output =   "010000";break;
        case key.charAt(17): output =   "010001";break;
        case key.charAt(18): output =   "010010";break;
        case key.charAt(19): output =   "010011";break;
        case key.charAt(20): output =   "010100";break;
        case key.charAt(21): output =   "010101";break;
        case key.charAt(22): output =   "010110";break;
        case key.charAt(23): output =   "010111";break;
        case key.charAt(24): output =   "011000";break;
        case key.charAt(25): output =   "011001";break;
        case key.charAt(26): output =   "011010";break;
        case key.charAt(27): output =   "011011";break;
        case key.charAt(28): output =   "011100";break;
        case key.charAt(29): output =   "011101";break;
        case key.charAt(30): output =   "011110";break;
        case key.charAt(31): output =   "011111";break;
        case key.charAt(32): output =   "100000";break;
        case key.charAt(33): output =   "100001";break;
        case key.charAt(34): output =   "100010";break;
        case key.charAt(35): output =   "100011";break;
        case key.charAt(36): output =   "100100";break;
        case key.charAt(37): output =   "100101";break;
        case key.charAt(38): output =   "100110";break;
        case key.charAt(39): output =   "100111";break;
        case key.charAt(40): output =   "101000";break;
        case key.charAt(41): output =   "101001";break;
        case key.charAt(42): output =   "101010";break;
        case key.charAt(43): output =   "101011";break;
        case key.charAt(44): output =   "101100";break;
        case key.charAt(45): output =   "101101";break;
        case key.charAt(46): output =   "101110";break;
        case key.charAt(47): output =   "101111";break;
        case key.charAt(48): output =   "110000";break;
        case key.charAt(49): output =   "110001";break;
        case key.charAt(50): output =   "110010";break;
        case key.charAt(51): output =   "110011";break;
        case key.charAt(52): output =   "110100";break;
        case key.charAt(53): output =   "110101";break;
        case key.charAt(54): output =   "110110";break;
        case key.charAt(55): output =   "110111";break;
        case key.charAt(56): output =   "111000";break;
        case key.charAt(57): output =   "111001";break;
        case key.charAt(58): output =   "111010";break;
        case key.charAt(59): output =   "111011";break;
        case key.charAt(60): output =   "111100";break;
        case key.charAt(61): output =   "111101";break;
        case key.charAt(62): output =   "111110";break;
        case key.charAt(63): output =   "111111";break;
    }
    return output;
}