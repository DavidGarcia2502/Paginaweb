function showInfo(symbol, number, name, description, imageUrl) {
    const infoDiv = document.getElementById('element-info');
    var number="";

    switch (symbol) {
        case "H":
            number = 1;
            name = "Hidrogeno";
            description = "El Hidrógeno es un elemento químico de la tabla periódica con símbolo químico H y número atómico 1 con un peso atómico de 1.0079 u y está clasificado como no metal y forma parte del grupo 1 (alcalino). El Hidrógeno es gas a temperatura ambiente.";
            break;

        case "He":
            number = 2;
            name = "Helio"
            description = "El Helio es un elemento químico de la tabla periódica con símbolo químico He y número atómico 2 con un peso atómico de 4.0026 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Helio es gas a temperatura ambiente.";
            break;
            case "Li":
                number = 3;
                name = "Litio"
                description = "El Litio es un elemento químico de la tabla periódica con símbolo químico Li y número atómico 3 con un peso atómico de 6.938 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Litio es sólido a temperatura ambiente.";
            break;

            case "Be":
                number = 4;
                name = "Berilio"
                description = "El Berilio es un elemento químico de la tabla periódica con símbolo químico Be y número atómico 4 con un peso atómico de 9.01218 u y está clasificado como alcalinotérreos y forma parte del grupo 2 (alcalinotérreos). El Berilio es sólido a temperatura ambiente.";
            break;

            case "B":
                number = 5;
                name = "Boro"
                description = "El Boro es un elemento químico de la tabla periódica con símbolo químico B y número atómico 5 con un peso atómico de 10.806 u y está clasificado como semimetal y forma parte del grupo 13 (familia del boro). El Boro es sólido a temperatura ambiente.";
            break;

            case "C":
            number = 6;
            name = "Carbono"
            description = "El Carbono es un elemento químico de la tabla periódica con símbolo químico C y número atómico 6 con un peso atómico de 12.0096 u y está clasificado como no metal y forma parte del grupo 14 (familia del carbono). El Carbono es sólido a temperatura ambiente.";
            break;

            case "N":
                number = 7;
                name = "Nitrogeno";
                description = "El Nitrógeno es un elemento químico de la tabla periódica con símbolo químico N y número atómico 7 con un peso atómico de 14.0064 u y está clasificado como no metal y forma parte del grupo 15 (familia del nitrógeno). El Nitrógeno es gas a temperatura ambiente.";
            break;
    
            case "O":
                number = 8;
                name = "Oxigeno"
                description = "El Oxígeno es un elemento químico de la tabla periódica con símbolo químico O y número atómico 8 con un peso atómico de 15.999 u y está clasificado como no metal y forma parte del grupo 16 (familia del oxígeno). El Oxígeno es gas a temperatura ambiente.";
            break;

            case "F":
                number = 9;
                name = "Flúor"
                description = "El Flúor es un elemento químico de la tabla periódica con símbolo químico F y número atómico 9 con un peso atómico de 18.9984 u y está clasificado como no metal y forma parte del grupo 17 (familia del flúor). El Flúor es gas a temperatura ambiente.";
                break;
    
                case "Ne":
                    number = 10;
                    name = "Neón"
                    description = "El Neón es un elemento químico de la tabla periódica con símbolo químico Ne y número atómico 10 con un peso atómico de 20.1797 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Neón es gas a temperatura ambiente.";
                break;
    
                case "Na":
                    number = 11;
                    name = "Sodio"
                    description = "El Sodio es un elemento químico de la tabla periódica con símbolo químico Na y número atómico 11 con un peso atómico de 22.9898 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Sodio es sólido a temperatura ambiente.";
                break;
    
                case "Mg":
                number = 12;
                name = "Magnesio"
                description = "El Magnesio es un elemento químico de la tabla periódica con símbolo químico Mg y número atómico 12 con un peso atómico de 24.304 u y está clasificado como alcalinotérreos y forma parte del grupo 2 (alcalinotérreos). El Magnesio es sólido a temperatura ambiente.";
                break;
    
                case "Al":
                    number = 13;
                    name = "Aluminio";
                    description = "El Aluminio es un elemento químico de la tabla periódica con símbolo químico Al y número atómico 13 con un peso atómico de 26.9815 u y está clasificado como metal del bloque p y forma parte del grupo 13 (familia del boro). El Aluminio es sólido a temperatura ambiente.";
                break;
        
                case "Si":
                    number = 14;
                    name = "Silicio"
                    description = "El Silicio es un elemento químico de la tabla periódica con símbolo químico Si y número atómico 14 con un peso atómico de 28.084 u y está clasificado como semimetal y forma parte del grupo 14 (familia del carbono). El Silicio es sólido a temperatura ambiente.";
                break;
                case "P":
                    number = 15;
                    name = "Fósforo"
                    description = "El Fósforo es un elemento químico de la tabla periódica con símbolo químico P y número atómico 15 con un peso atómico de 30.9738 u y está clasificado como no metal y forma parte del grupo 15 (familia del nitrógeno). El Fósforo es sólido a temperatura ambiente.";
                break;
                case "S":
                    number = 16;
                    name = "Azufre"
                    description = "El Azufre es un elemento químico de la tabla periódica con símbolo químico S y número atómico 16 con un peso atómico de 32.059 u y está clasificado como no metal y forma parte del grupo 16 (familia del oxígeno). El Azufre es sólido a temperatura ambiente.";
                break;
                case "Cl":
                    number = 17;
                    name = "Cloro"
                    description = "El Cloro es un elemento químico de la tabla periódica con símbolo químico Cl y número atómico 17 con un peso atómico de 35.446 u y está clasificado como no metal y forma parte del grupo 17 (familia del flúor). El Cloro es gas a temperatura ambiente.";
                break;
                case "Ar":
                    number = 18;
                    name = "Argón"
                    description = "El Argón es un elemento químico de la tabla periódica con símbolo químico Ar y número atómico 18 con un peso atómico de 39.792 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Argón es gas a temperatura ambiente.";
                break;
                case "K":
                    number = 19;
                    name = "Potasio"
                    description = "El Potasio es un elemento químico de la tabla periódica con símbolo químico K y número atómico 19 con un peso atómico de 39.0983 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Potasio es sólido a temperatura ambiente.";
                break;
                case "Ca":
                    number = 20;
                    name = "Calcio"
                    description = "El Calcio es un elemento químico de la tabla periódica con símbolo químico Ca y número atómico 20 con un peso atómico de 40.0784 u y está clasificado como alcalinotérreos y forma parte del grupo 3 (familia del escandio). El Calcio es sólido a temperatura ambiente.";
                break;
                case "Sc":
                    number = 21;
                    name = "Escadio"
                    description = "El Escandio es un elemento químico de la tabla periódica con símbolo químico Sc y número atómico 21 con un peso atómico de 44.9559 u y está clasificado como metal de transición y forma parte del grupo 3 (familia del escandio). El Escandio es sólido a temperatura ambiente.";
                break;
                case "Ti":
                    number = 22;
                    name = "Titanio"
                    description = "El Titanio es un elemento químico de la tabla periódica con símbolo químico Ti y número atómico 22 con un peso atómico de 47.8671 u y está clasificado como metal de transición y forma parte del grupo 4 (familia del titanio). El Titanio es sólido a temperatura ambiente.";
                break;
                case "V":
                    number = 23;
                    name = "Vanadio"
                    description = "El Vanadio es un elemento químico de la tabla periódica con símbolo químico V y número atómico 23 con un peso atómico de 50.9415 u y está clasificado como metal de transición y forma parte del grupo 5 (familia del vanadio). El Vanadio es sólido a temperatura ambiente.";
                break;
                case "Cr":
                    number = 24;
                    name = "Cromo"
                    description = "El Cromo es un elemento químico de la tabla periódica con símbolo químico Cr y número atómico 24 con un peso atómico de 51.9962 u y está clasificado como metal de transición y forma parte del grupo 6 (familia del cromo). El Cromo es sólido a temperatura ambiente.";
                break;
                case "Mn":
                    number = 25;
                    name = "Manganeso"
                    description = "El Manganeso es un elemento químico de la tabla periódica con símbolo químico Mn y número atómico 25 con un peso atómico de 54.938 u y está clasificado como metal de transición y forma parte del grupo 7 (familia del manganeso). El Manganeso es sólido a temperatura ambiente";
                break;
                case "Fe":
                    number = 26;
                    name = "Hierro"
                    description = "El Hierro es un elemento químico de la tabla periódica con símbolo químico Fe y número atómico 26 con un peso atómico de 55.8452 u y está clasificado como metal de transición y forma parte del grupo 8 (familia del hierro). El Hierro es sólido a temperatura ambiente.";
                break;
                case "Co":
                    number = 27;
                    name = "Cobalto"
                    description = "El Cobalto es un elemento químico de la tabla periódica con símbolo químico Co y número atómico 27 con un peso atómico de 58.9332 u y está clasificado como metal de transición y forma parte del grupo 9 (familia del cobalto). El Cobalto es sólido a temperatura ambiente.";
                break;
                case "Ni":
                    number = 28;
                    name = "Níquel"
                    description = "El Níquel es un elemento químico de la tabla periódica con símbolo químico Ni y número atómico 28 con un peso atómico de 58.6934 u y está clasificado como metal de transición y forma parte del grupo 10 (familia del níquel). El Níquel es sólido a temperatura ambiente.";
                break;
                case "Cu":
                    number = 29;
                    name = "Cobre"
                    description = "El Cobre es un elemento químico de la tabla periódica con símbolo químico Cu y número atómico 29 con un peso atómico de 63.5463 u y está clasificado como metal de transición y forma parte del grupo 11 (metales de acuñación). El Cobre es sólido a temperatura ambiente.";
                break;
                case "Zn":
                    number = 30;
                    name = "Zinc"
                    description = "El Zinc es un elemento químico de la tabla periódica con símbolo químico Zn y número atómico 30 con un peso atómico de 65.382 u y está clasificado como metal de transición y forma parte del grupo 12 (familia del zinc). El Zinc es sólido a temperatura ambiente.";
                break;
                case "Ga":
                    number = 31;
                    name = "Galio"
                    description = "El Galio es un elemento químico de la tabla periódica con símbolo químico Ga y número atómico 31 con un peso atómico de 69.7231 u y está clasificado como metal del bloque p y forma parte del grupo 13 (familia del boro). El Galio es sólido a temperatura ambiente.";
                break;
                case "Ge":
                    number = 32;
                    name = "Germanio"
                    description = "El Germanio es un elemento químico de la tabla periódica con símbolo químico Ge y número atómico 32 con un peso atómico de 72.6308 u y está clasificado como semimetal y forma parte del grupo 14 (familia del carbono). El Germanio es sólido a temperatura ambiente.";
                break;
                case "As":
                    number = 33;
                    name = "Arsénico"
                    description = "El Arsénico es un elemento químico de la tabla periódica con símbolo químico As y número atómico 33 con un peso atómico de 74.9216 u y está clasificado como semimetal y forma parte del grupo 15 (familia del nitrógeno). El Arsénico es sólido a temperatura ambiente.";
                break;
                case "Se":
                    number = 34;
                    name = "Selenio"
                    description = "El Selenio es un elemento químico de la tabla periódica con símbolo químico Se y número atómico 34 con un peso atómico de 78.9718 u y está clasificado como no metal y forma parte del grupo 16 (familia del oxígeno). El Selenio es sólido a temperatura ambiente.";
                break;
                case "Br":
                    number = 35;
                    name = "Bromo"
                    description = "El Bromo es un elemento químico de la tabla periódica con símbolo químico Br y número atómico 35 con un peso atómico de 79.901 u y está clasificado como no metal y forma parte del grupo 17 (familia del flúor). El Bromo es líquido a temperatura ambiente.";
                break;
                case "Kr":
                    number = 36;
                    name = "Kriptón"
                    description = "El Kriptón es un elemento químico de la tabla periódica con símbolo químico Kr y número atómico 36 con un peso atómico de 83.7982 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Kriptón es gas a temperatura ambiente.";
                break;
                case "Rb":
                    number = 37;
                    name = "Rubidio"
                    description = "El Rubidio es un elemento químico de la tabla periódica con símbolo químico Rb y número atómico 37 con un peso atómico de 85.4678 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Rubidio es sólido a temperatura ambiente.";
                break;
                case "Sr":
                    number = 38;
                    name = "Estroncio"
                    description = "El Estroncio es un elemento químico de la tabla periódica con símbolo químico Sr y número atómico 38 con un peso atómico de 87.621 u y está clasificado como alcalinotérreos y forma parte del grupo 2 (alcalinotérreos). El Estroncio es sólido a temperatura ambiente.";
                break;
                case "Y":
                    number = 39;
                    name = "Itrio"
                    description = "El Itrio es un elemento químico de la tabla periódica con símbolo químico Y y número atómico 39 con un peso atómico de 88.9058 u y está clasificado como metal de transición y forma parte del grupo 3 (familia del escandio). El Itrio es sólido a temperatura ambiente.";
                break;
                case "Zr":
                    number = 40;
                    name = "Circonio"
                    description = "El Circonio es un elemento químico de la tabla periódica con símbolo químico Zr y número atómico 40 con un peso atómico de 91.2242 u y está clasificado como metal de transición y forma parte del grupo 4 (familia del titanio). El Circonio es sólido a temperatura ambiente.";
                break;
                case "Nb":
                    number = 41;
                    name = "Niobio"
                    description = "El Niobio es un elemento químico de la tabla periódica con símbolo químico Nb y número atómico 41 con un peso atómico de 92.9064 u y está clasificado como metal de transición y forma parte del grupo 5 (familia del vanadio). El Niobio es sólido a temperatura ambiente.";
                break;
                case "Mo":
                    number = 42;
                    name = "Molibdeno"
                    description = "El Molibdeno es un elemento químico de la tabla periódica con símbolo químico Mo y número atómico 42 con un peso atómico de 95.951 u y está clasificado como metal de transición y forma parte del grupo 6 (familia del cromo). El Molibdeno es sólido a temperatura ambiente.";
                break;
                case "Tc":
                    number = 43;
                    name = "Tecnecio"
                    description = "El Tecnecio es un elemento químico de la tabla periódica con símbolo químico Tc y número atómico 43 con un peso atómico de 98.9062 u y está clasificado como metal de transición y forma parte del grupo 7 (familia del manganeso). El Tecnecio es sólido a temperatura ambiente.";
                break;
                case "Ru":
                    number = 44;
                    name = "Rutenio"
                    description = "El Rutenio es un elemento químico de la tabla periódica con símbolo químico Ru y número atómico 44 con un peso atómico de 101.072 u y está clasificado como metal de transición y forma parte del grupo 8 (familia del hierro). El Rutenio es sólido a temperatura ambiente.";
                break;
                case "Rh":
                    number = 45;
                    name = "Rodio"
                    description = "El Rodio es un elemento químico de la tabla periódica con símbolo químico Rh y número atómico 45 con un peso atómico de 102.906 u y está clasificado como metal de transición y forma parte del grupo 9 (familia del cobalto). El Rodio es sólido a temperatura ambiente.";
                break;
                case "Pd":
                    number = 46;
                    name = "Paladio"
                    description = "El Paladio es un elemento químico de la tabla periódica con símbolo químico Pd y número atómico 46 con un peso atómico de 106.421 u y está clasificado como metal de transición y forma parte del grupo 10 (familia del níquel). El Paladio es sólido a temperatura ambiente.";
                break;
                case "Ag":
                    number = 47;
                    name = "Plata"
                    description = "El Plata es un elemento químico de la tabla periódica con símbolo químico Ag y número atómico 47 con un peso atómico de 107.868 u y está clasificado como metal de transición y forma parte del grupo 11 (metales de acuñación). El Plata es sólido a temperatura ambiente.";
                break;
                case "Cd":
                    number = 48;
                    name = "Cadmio"
                    description = "El Cadmio es un elemento químico de la tabla periódica con símbolo químico Cd y número atómico 48 con un peso atómico de 112.414 u y está clasificado como metal de transición y forma parte del grupo 12 (familia del zinc). El Cadmio es sólido a temperatura ambiente.";
                break;
                case "In":
                    number = 49;
                    name = "Indio"
                    description = "El Indio es un elemento químico de la tabla periódica con símbolo químico In y número atómico 49 con un peso atómico de 114.818 u y está clasificado como metal del bloque p y forma parte del grupo 13 (familia del boro). El Indio es sólido a temperatura ambiente.";
                break;
                case "Sn":
                    number = 50;
                    name = "Estaño"
                    description = "El Estaño es un elemento químico de la tabla periódica con símbolo químico Sn y número atómico 50 con un peso atómico de 118.711 u y está clasificado como metal del bloque p y forma parte del grupo 14 (familia del carbono). El Estaño es sólido a temperatura ambiente.";
                break;
                case "Sb":
                    number = 51;
                    name = "Antimonio"
                    description = "El Antimonio es un elemento químico de la tabla periódica con símbolo químico Sb y número atómico 51 con un peso atómico de 121.76 u y está clasificado como semimetal y forma parte del grupo 15 (familia del nitrógeno). El Antimonio es sólido a temperatura ambiente.";
                break;
                case "Te":
                    number = 52;
                    name = "Telurio"
                    description = "El Telurio es un elemento químico de la tabla periódica con símbolo químico Te y número atómico 52 con un peso atómico de 127.603 u y está clasificado como semimetal y forma parte del grupo 16 (familia del oxígeno). El Telurio es sólido a temperatura ambiente.";
                break;
                case "I":
                    number = 53;
                    name = "Yodo"
                    description = "El Yodo es un elemento químico de la tabla periódica con símbolo químico I y número atómico 53 con un peso atómico de 126.904 u y está clasificado como no metal y forma parte del grupo 17 (familia del flúor). El Yodo es sólido a temperatura ambiente.";
                break;
                case "Xe":
                    number = 54;
                    name = "Xénon"
                    description = "El Xenón es un elemento químico de la tabla periódica con símbolo químico Xe y número atómico 54 con un peso atómico de 131.294 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Xenón es gas a temperatura ambiente";
                break;
                case "Cs":
                    number = 55;
                    name = "Cesio"
                    description = "El Cesio es un elemento químico de la tabla periódica con símbolo químico Cs y número atómico 55 con un peso atómico de 132.905 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Cesio es sólido a temperatura ambiente.";
                break;
                case "Ba":
                    number = 56;
                    name = "Bario"
                    description = "El Bario es un elemento químico de la tabla periódica con símbolo químico Ba y número atómico 56 con un peso atómico de 137.328 u y está clasificado como alcalinotérreos y forma parte del grupo 2 (alcalinotérreos). El Bario es sólido a temperatura ambiente.";
                break;
                case "La":
                    number = 57;
                    name = "Lantano"
                    description = "El Lantano es un elemento químico de la tabla periódica con símbolo químico La y número atómico 57 con un peso atómico de 138.905 u y está clasificado como lantánidos y forma parte del grupo 3 (familia del escandio). El Lantano es sólido a temperatura ambiente.";
                break;
                case "Ce":
                    number = 58;
                    name = "Cerio"
                    description = "El Cerio es un elemento químico de la tabla periódica con símbolo químico Ce y número atómico 58 con un peso atómico de 140.116 u y está clasificado como lantánidos. El Cerio es sólido a temperatura ambiente.";
                break;
                case "Pr":
                    number = 59;
                    name = "Praseodimio"
                    description = "El Praseodimio es un elemento químico de la tabla periódica con símbolo químico Pr y número atómico 59 con un peso atómico de 140.908 u y está clasificado como lantánidos. El Praseodimio es sólido a temperatura ambiente.";
                break;
                case "Nd":
                    number = 60;
                    name = "Neodimio"
                    description = "El Neodimio es un elemento químico de la tabla periódica con símbolo químico Nd y número atómico 60 con un peso atómico de 144.242 u y está clasificado como lantánidos. El Neodimio es sólido a temperatura ambiente.";
                break;
                case "Pm":
                    number = 61;
                    name = "Prometio"
                    description = "El Prometio es un elemento químico de la tabla periódica con símbolo químico Pm y número atómico 61 con un peso atómico de 145 u y está clasificado como lantánidos. El Prometio es sólido a temperatura ambiente.";
                break;
                case "Sm":
                    number = 62;
                    name = "Samario"
                    description = "El Samario es un elemento químico de la tabla periódica con símbolo químico Sm y número atómico 62 con un peso atómico de 150.362 u y está clasificado como lantánidos. El Samario es sólido a temperatura ambiente.";
                break;
                case "Eu":
                    number = 63;
                    name = "Europio"
                    description = "El Europio es un elemento químico de la tabla periódica con símbolo químico Eu y número atómico 63 con un peso atómico de 151.964 u y está clasificado como lantánidos. El Europio es sólido a temperatura ambiente.";
                break;
                case "Gd":
                    number = 64;
                    name = "Gadolinio"
                    description = "El Gadolinio es un elemento químico de la tabla periódica con símbolo químico Gd y número atómico 64 con un peso atómico de 157.253 u y está clasificado como lantánidos. El Gadolinio es sólido a temperatura ambiente.";
                break;
                case "Tb":
                    number = 65;
                    name = "Terbio"
                    description = "El Terbio es un elemento químico de la tabla periódica con símbolo químico Tb y número atómico 65 con un peso atómico de 158.925 u y está clasificado como lantánidos. El Terbio es sólido a temperatura ambiente.";
                break;
                case "Dy":
                    number = 66;
                    name = "Disprosio"
                    description = "El Disprosio es un elemento químico de la tabla periódica con símbolo químico Dy y número atómico 66 con un peso atómico de 162.5 u y está clasificado como lantánidos. El Disprosio es sólido a temperatura ambiente.";
                break;
                case "Ho":
                    number = 67;
                    name = "Holmio"
                    description = "El Holmio es un elemento químico de la tabla periódica con símbolo químico Ho y número atómico 67 con un peso atómico de 164.93 u y está clasificado como lantánidos. El Holmio es sólido a temperatura ambiente.";
                break;
                case "Er":
                    number = 68;
                    name = "Erbio"
                    description = "El Erbio es un elemento químico de la tabla periódica con símbolo químico Er y número atómico 68 con un peso atómico de 167.259 u y está clasificado como lantánidos. El Erbio es sólido a temperatura ambiente.";
                break;
                case "Tm":
                    number = 69;
                    name = "Tulio"
                    description = "El Tulio es un elemento químico de la tabla periódica con símbolo químico Tm y número atómico 69 con un peso atómico de 168.934 u y está clasificado como lantánidos. El Tulio es sólido a temperatura ambiente.";
                break;
                case "Yb":
                    number = 70;
                    name = "Iterbio"
                    description = "El Iterbio es un elemento químico de la tabla periódica con símbolo químico Yb y número atómico 70 con un peso atómico de 173.045 u y está clasificado como lantánidos. El Iterbio es sólido a temperatura ambiente";
                break;
                case "Lu":
                    number = 71;
                    name = "Lutecio"
                    description = "El Lutecio es un elemento químico de la tabla periódica con símbolo químico Lu y número atómico 71 con un peso atómico de 174.967 u y está clasificado como lantánidos. El Lutecio es sólido a temperatura ambiente.";
                break;
                case "Hf":
                    number = 72;
                    name = "Hafnio"
                    description = "El Hafnio es un elemento químico de la tabla periódica con símbolo químico Hf y número atómico 72 con un peso atómico de 178.492 u y está clasificado como metal de transición y forma parte del grupo 4 (familia del titanio). El Hafnio es sólido a temperatura ambiente.";
                break;
                case "Ta":
                    number = 73;
                    name = "Tántalo"
                    description = "El Tántalo es un elemento químico de la tabla periódica con símbolo químico Ta y número atómico 73 con un peso atómico de 180.948 u y está clasificado como metal de transición y forma parte del grupo 5 (familia del vanadio). El Tántalo es sólido a temperatura ambiente.";
                break;
                case "W":
                    number = 74;
                    name = "Tusgsteno"
                    description = "El Wolframio o Tungsteno es un elemento químico de la tabla periódica con símbolo químico W y número atómico 74 con un peso atómico de 183.841 u y está clasificado como metal de transición y forma parte del grupo 6 (familia del cromo). El Tungsteno es sólido a temperatura ambiente.";
                break;
                case "Re":
                    number = 75;
                    name = "Renio"
                    description = "El Renio es un elemento químico de la tabla periódica con símbolo químico Re y número atómico 75 con un peso atómico de 186.207 u y está clasificado como metal de transición y forma parte del grupo 7 (familia del manganeso). El Renio es sólido a temperatura ambiente.";
                break;
                case "Os":
                    number = 76;
                    name = "Osmio"
                    description = "El Osmio es un elemento químico de la tabla periódica con símbolo químico Os y número atómico 76 con un peso atómico de 190.233 u y está clasificado como metal de transición y forma parte del grupo 8 (familia del hierro). El Osmio es sólido a temperatura ambiente.";
                break;
                case "Ir":
                    number = 77 ;
                    name = "Iridio";
                    description = "El Iridio es un elemento químico de la tabla periódica con símbolo químico Ir y número atómico 77 con un peso atómico de 192.217 u y está clasificado como metal de transición y forma parte del grupo 9 (familia del cobalto). El Iridio es sólido a temperatura ambiente.";
                break;
                                        
                case "Pt":
                    number = 78 ;
                    name = "Platino";
                    description = "El Platino es un elemento químico de la tabla periódica con símbolo químico Pt y número atómico 78 con un peso atómico de 195.085 u y está clasificado como metal de transición y forma parte del grupo 10 (familia del níquel). El Platino es sólido a temperatura ambiente.";
                break;
                                        
                case "Au":
                    number = 79 ;
                    name = "Oro";
                    description = "El Oro es un elemento químico de la tabla periódica con símbolo químico Au y número atómico 79 con un peso atómico de 196.967 u y está clasificado como metal de transición y forma parte del grupo 11 (metales de acuñación). El Oro es sólido a temperatura ambiente.";
                break;
                                        
                case "Hg":
                    number = 80 ;
                    name = "Mercurio";
                    description = "El Mercurio es un elemento químico de la tabla periódica con símbolo químico Hg y número atómico 80 con un peso atómico de 200.592 u y está clasificado como metal de transición y forma parte del grupo 12 (familia del zinc). El Mercurio es líquido a temperatura ambiente.";
                break;
                                        
                case "Tl":
                    number = 81 ;
                    name = "Talio";
                    description = "El Talio es un elemento químico de la tabla periódica con símbolo químico Tl y número atómico 81 con un peso atómico de 204.382 u y está clasificado como metal del bloque p y forma parte del grupo 13 (familia del boro). El Talio es sólido a temperatura ambiente.";
                break;
                                        
                case "Pb":
                    number = 82 ;
                    name = "Plomo";
                    description = "El Plomo es un elemento químico de la tabla periódica con símbolo químico Pb y número atómico 82 con un peso atómico de 207.21 u y está clasificado como metal del bloque p y forma parte del grupo 14 (familia del carbono). El Plomo es sólido a temperatura ambiente.";
                break;
    
                                        
                case "Bi":
                    number = 83 ;
                    name = "Bismuto";
                    description = "El Bismuto es un elemento químico de la tabla periódica con símbolo químico Bi y número atómico 83 con un peso atómico de 208.98 u y está clasificado como metal del bloque p y forma parte del grupo 15 (familia del nitrógeno). El Bismuto es sólido a temperatura ambiente";
                break;
                                        
                case "Po":
                    number = 84 ;
                    name = "Polonio";
                    description = "El Polonio es un elemento químico de la tabla periódica con símbolo químico Po y número atómico 84 con un peso atómico de 209 u y está clasificado como metal del bloque p y forma parte del grupo 16 (familia del oxígeno). El Polonio es sólido a temperatura ambiente.";
                break;
    
                                        
                case "At":
                    number = 85 ;
                    name = "Astato";
                    description = "El Astato es un elemento químico de la tabla periódica con símbolo químico At y número atómico 85 con un peso atómico de 210 u y está clasificado como semimetal y forma parte del grupo 17 (familia del flúor). El Astato es sólido a temperatura ambiente.";
                break;
                                        
                case "Rn":
                    number = 86 ;
                    name = "Radón";
                    description = "El Radón es un elemento químico de la tabla periódica con símbolo químico Rn y número atómico 86 con un peso atómico de 222 u y está clasificado como gases nobles y forma parte del grupo 18 (gases nobles). El Radón es gas a temperatura ambiente.";
                break;
                                        
                case "Fr":
                    number = 87 ;
                    name = "Francio";
                    description = "El Francio es un elemento químico de la tabla periódica con símbolo químico Fr y número atómico 87 con un peso atómico de 223 u y está clasificado como alcalino y forma parte del grupo 1 (alcalino). El Francio es sólido a temperatura ambiente.";
                break;
                                        
                case "Ra":
                    number = 88 ;
                    name = "Radio";
                    description = "El Radio es un elemento químico de la tabla periódica con símbolo químico Ra y número atómico 88 con un peso atómico de 226 u y está clasificado como alcalinotérreos y forma parte del grupo 2 (alcalinotérreos). El Radio es sólido a temperatura ambiente.";
                break;
                                        
                case "Ac":
                    number = 89 ;
                    name = "Actinio";
                    description = "El Actinio es un elemento químico de la tabla periódica con símbolo químico Ac y número atómico 89 con un peso atómico de 227 u y está clasificado como actínido y forma parte del grupo 3 (familia del escandio). El Actinio es sólido a temperatura ambiente.";
                break;
    
                                        
                case "Th":
                    number = 90 ;
                    name = "Torio";
                    description = "El Torio es un elemento químico de la tabla periódica con símbolo químico Th y número atómico 90 con un peso atómico de 232.038 u y está clasificado como actínido. El Torio es sólido a temperatura ambiente.";
                break; 
    
                case "Pa":
                    number = 91 ;
                    name = "Protactinio";
                    description = "El Protactinio es un elemento químico de la tabla periódica con símbolo químico Pa y número atómico 91 con un peso atómico de 231.036 u y está clasificado como actínido. El Protactinio es sólido a temperatura ambiente.";
                break;
                                        
                case "U":
                    number = 92 ;
                    name = "Uranio";
                    description = "El Uranio es un elemento químico de la tabla periódica con símbolo químico U y número atómico 92 con un peso atómico de 238.029 u y está clasificado como actínido. El Uranio es sólido a temperatura ambiente.";
                break;
                                        
                case "Np":
                    number = 93 ;
                    name = "Neptunio";
                    description = "El Neptunio es un elemento químico de la tabla periódica con símbolo químico Np y número atómico 93 con un peso atómico de 237 u y está clasificado como actínido. El Neptunio es sólido a temperatura ambiente.";
                break;
                                        
                case "Pu":
                    number = 94 ;
                    name = "Plutonio";
                    description = "El Plutonio es un elemento químico de la tabla periódica con símbolo químico Pu y número atómico 94 con un peso atómico de 244 u y está clasificado como actínido. El Plutonio es sólido a temperatura ambiente.";
                break;
                                        
                case "Am":
                    number = 95 ;
                    name = "Americio"
                    description = "El Americio es un elemento químico de la tabla periódica con símbolo químico Am y número atómico 95 con un peso atómico de 243 u y está clasificado como actínido. El Americio es sólido a temperatura ambiente.";
                break;
                                
                case "Cm":
                    number = 96 ;
                    name = "Curio"
                    description = "El Curio es un elemento químico de la tabla periódica con símbolo químico Cm y número atómico 96 con un peso atómico de 247 u y está clasificado como actínido. El Curio es sólido a temperatura ambiente.";
                break;  
    
                case "Bk":
                    number = 97 ;
                    name = "Berkelio"
                    description = "El Berkelio es un elemento químico de la tabla periódica con símbolo químico Bk y número atómico 97 con un peso atómico de 247 u y está clasificado como actínido. El Berkelio es sólido a temperatura ambiente.";
                break;  
    
                case "Cf":
                    number = 98 ;
                    name = "Californio"
                    description = "El Californio es un elemento químico de la tabla periódica con símbolo químico Cf y número atómico 98 con un peso atómico de 251 u y está clasificado como actínido. El Californio es sólido a temperatura ambiente.";
                break;  
    
                case "Es":
                    number = 99 ;
                    name = "Einstenio"
                    description = "El Einstenio es un elemento químico de la tabla periódica con símbolo químico Es y número atómico 99 con un peso atómico de 252 u y está clasificado como actínido. El Einstenio es sólido a temperatura ambiente.";
                break;  
    
                case "Fm":
                    number = 100;
                    name = "Fermio"
                    description = "El Fermio es un elemento químico de la tabla periódica con símbolo químico Fm y número atómico 100 con un peso atómico de 257 u y está clasificado como actínido. El Fermio es sólido a temperatura ambiente.";
                break;  
    
                case "Md":
                    number = 101 ;
                    name = "Mendelevio"
                    description = "El Mendelevio es un elemento químico de la tabla periódica con símbolo químico Md y número atómico 101 con un peso atómico de 258 u y está clasificado como actínido. El Mendelevio es sólido a temperatura ambiente.";
                break;
    
                case "No":
                    number = 102 ;
                    name = "Nobelio"
                    description = "El Nobelio es un elemento químico de la tabla periódica con símbolo químico No y número atómico 102 con un peso atómico de 259 u y está clasificado como actínido. El Nobelio es sólido a temperatura ambiente.";
                break; 
    
                case "Lr":
                    number = 103 ;
                    name = "Lawrencio"
                    description = "El Lawrencio es un elemento químico de la tabla periódica con símbolo químico Lr y número atómico 103 con un peso atómico de 262 u y está clasificado como actínido. El Lawrencio es sólido a temperatura ambiente.";
                break;  
                              
                case "Rf":
                    number = 104 ;
                    name = "Rutherfordio"
                    description = "El Rutherfordio es un elemento químico de la tabla periódica con símbolo químico Rf y número atómico 104 con un peso atómico de 261 u y está clasificado como metal de transición y forma parte del grupo 4 (familia del titanio). El Rutherfordio es sólido a temperatura ambiente.";
                break; 
    
                case "Db":
                    number = 105 ;
                    name = "Dubnio"
                    description = "El Dubnio es un elemento químico de la tabla periódica con símbolo químico Db y número atómico 105 con un peso atómico de 268 u y está clasificado como metal de transición y forma parte del grupo 5 (familia del vanadio). El Dubnio es sólido a temperatura ambiente.";
                break;
    
                case "Sg":
                    number = 106 ;
                    name = "Seaborgio"
                    description = "El Seaborgio es un elemento químico de la tabla periódica con símbolo químico Sg y número atómico 106 con un peso atómico de 269 u y está clasificado como metal de transición y forma parte del grupo 6 (familia del cromo). El Seaborgio es sólido a temperatura ambiente.";
                break; 
    
                case "Bh":
                    number = 107 ;
                    name = "Bohrio"
                    description = "El Bohrio es un elemento químico de la tabla periódica con símbolo químico Bh y número atómico 107 con un peso atómico de 270.133 u y está clasificado como metal de transición y forma parte del grupo 7 (familia del manganeso). El Bohrio es sólido a temperatura ambiente.";
                break;
    
                case "Hs":
                    number = 108 ;
                    name = "Hasio"
                    description = "El Hasio es un elemento químico de la tabla periódica con símbolo químico Hs y número atómico 108 con un peso atómico de 269 u y está clasificado como metal de transición y forma parte del grupo 8 (familia del hierro). El Hassio es sólido a temperatura ambiente.";
                break;
    
                case "Mt":
                    number = 109 ;
                    name = "Meitnerio"
                    description = "El Meitnerio es un elemento químico de la tabla periódica con símbolo químico Mt y número atómico 109 con un peso atómico de 277.154 u y está clasificado como desconocido y forma parte del grupo 9 (familia del cobalto). El Meitnerio es sólido a temperatura ambiente.";
                break;
    
                case "Ds":
                    number = 110 ;
                    name = "Darmstatdio"
                    description = "El Darmstatio es un elemento químico de la tabla periódica con símbolo químico Ds y número atómico 110 con un peso atómico de 281 u y está clasificado como desconocido y forma parte del grupo 10 (familia del níquel). El Darmstatio es sólido a temperatura ambiente.";
                break;
    
                case "Rg":
                    number = 111 ;
                    name = "Roentgenio"
                    description = "El Roentgenio es un elemento químico de la tabla periódica con símbolo químico Rg y número atómico 111 con un peso atómico de 281 u y está clasificado como desconocido y forma parte del grupo 11 (metales de acuñación). El Roentgenio es sólido a temperatura ambiente";
                break; 
    
                case "Cn":
                    number = 112;
                    name = "Copernicio"
                    description = "El Copernicio es un elemento químico de la tabla periódica con símbolo químico Cn y número atómico 112 con un peso atómico de 285 u y está clasificado como metal de transición y forma parte del grupo 12 (familia del zinc). El Copernicio es gas a temperatura ambiente.";
                break; 
    
                case "Nh":
                    number = 113;
                    name = "Nihonio"
                    description = "El Nihonio es un elemento químico de la tabla periódica con símbolo químico Nh y número atómico 113 con un peso atómico de 286 u y está clasificado como desconocido y forma parte del grupo 13 (familia del boro). El Nihonio es sólido a temperatura ambiente.";
                break;
    
                case "Fl":
                    number = 114 ;
                    name = "Flerovio"
                    description = "El Flerovio es un elemento químico de la tabla periódica con símbolo químico Fl y número atómico 114 con un peso atómico de 289 u y está clasificado como metal del bloque p y forma parte del grupo 14 (familia del carbono). El Flerovio es sólido a temperatura ambiente.";
                break;
    
                case "Mc":
                    number = 115 ;
                    name = "Moscovio"
                    description = "El Moscovio es un elemento químico de la tabla periódica con símbolo químico Mc y número atómico 115 con un peso atómico de 288 u y está clasificado como desconocido y forma parte del grupo 15 (familia del nitrógeno). El Moscovio es sólido a temperatura ambiente.";
                break;
    
                case "Lv":
                    number = 116 ;
                    name = "Livermorio"
                    description = "El Livermorio es un elemento químico de la tabla periódica con símbolo químico Lv y número atómico 116 con un peso atómico de 293 u y está clasificado como desconocido y forma parte del grupo 16 (familia del oxígeno). El Livermorio es sólido a temperatura ambiente.";
                break; 
    
                case "Ts":
                    number = 117 ;
                    name = "Teneso"
                    description = "El Teneso es un elemento químico de la tabla periódica con símbolo químico Ts y número atómico 117 con un peso atómico de 294 u y está clasificado como desconocido y forma parte del grupo 17 (familia del flúor). El Teneso es sólido a temperatura ambiente.";
                break; 
    
                case "Og":
                    number = 118 ;
                    name = "Oganesón"
                    description = "El Oganesón es un elemento químico de la tabla periódica con símbolo químico Og y número atómico 118 con un peso atómico de 294 u y está clasificado como desconocido y forma parte del grupo 18 (gases nobles). El Oganesón es sólido a temperatura ambiente.";
                break;
                   
            default:
            number = 0;
            name = "N/D";
            description = "La descripcion de este elemento no esta disponible.";
            break;
    }

    infoDiv.innerHTML = `<h2>${name} (${symbol})</h2><p>Número atómico: ${number}</p><p>${description}</p>  <img src="${imageUrl}" alt="${name}">`;
    infoDiv.style.display = 'block';
}

function hideInfo() {
    const infoDiv = document.getElementById('element-info');
    infoDiv.style.display = 'none';
}

