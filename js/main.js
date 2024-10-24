// Destinos
let destinos = [
    { id: 1, nombre: "París",
        imagen: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "La ciudad del amor y la luz." },
    { id: 2, nombre: "Roma",
        imagen: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "La ciudad eterna llena de historia." },
    { id: 3, nombre: "Barcelona",
        imagen: "https://images.pexels.com/photos/5005639/pexels-photo-5005639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "Una joya mediterránea de arquitectura y cultura." },
    { id: 4, nombre: "Nueva York",
        imagen: "https://images.pexels.com/photos/5845712/pexels-photo-5845712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "La Gran Manzana, una metrópolis vibrante." },
    { id: 5, nombre: "Tokio",
        imagen: "https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "Una mezcla fascinante de lo moderno y lo tradicional." },
    { id: 6, nombre: "Londres",
        imagen: "https://images.pexels.com/photos/5623946/pexels-photo-5623946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "Una ciudad global con rica historia y diversidad." },
    { id: 7, nombre: "Sídney",
        imagen: "https://images.pexels.com/photos/5707638/pexels-photo-5707638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "Icónica ciudad costera con impresionante arquitectura." },
    { id: 8, nombre: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Playas espectaculares y cultura vibrante." },
    { id: 9, nombre: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/3884483/pexels-photo-3884483.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Ciudad de canales, bicicletas y rica historia." },
    { id: 10, nombre: "Dubái",
        imagen: "https://images.pexels.com/photos/4471200/pexels-photo-4471200.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Oasis moderno con rascacielos futuristas." },
    { id: 11, nombre: "Kioto",
        imagen: "https://images.pexels.com/photos/27500519/pexels-photo-27500519/free-photo-of-naturaleza-punto-de-referencia-panorama-urbano-skyline.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Antigua capital japonesa llena de templos y tradiciones." },
    { id: 12, nombre: "Praga",
        imagen: "https://images.pexels.com/photos/2873971/pexels-photo-2873971.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "La ciudad de las cien torres, con arquitectura medieval." },
    { id: 13, nombre: "Estambul",
        imagen: "https://images.pexels.com/photos/6152262/pexels-photo-6152262.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Puente entre Europa y Asia con rica herencia cultural." },
    { id: 14, nombre: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/3770287/pexels-photo-3770287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripcion: "Belleza natural y diversidad cultural en Sudáfrica." },
    { id: 15, nombre: "Venecia",
        imagen: "https://images.pexels.com/photos/5216423/pexels-photo-5216423.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "La ciudad de los canales, romántica e histórica." }
];


// Hoteles
let hoteles = [
    // París
    { id: 1, nombre: "Hotel Ritz París", destino: "París",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo y elegancia en el corazón de París." },
    { id: 2, nombre: "Four Seasons Hotel George V", destino: "París",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Opulencia parisina cerca de los Campos Elíseos." },
    { id: 3, nombre: "Le Bristol Paris", destino: "París",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel palaciego con jardín interior en Rue du Faubourg Saint-Honoré." },

    // Roma
    { id: 4, nombre: "Hotel Colosseum Roma", destino: "Roma",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Vistas impresionantes al Coliseo romano." },
    { id: 5, nombre: "Hotel de Russie", destino: "Roma",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Oasis urbano entre Plaza de España y Plaza del Popolo." },
    { id: 6, nombre: "Palazzo Manfredi", destino: "Roma",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel boutique con vistas panorámicas al Coliseo." },

    // Barcelona
    { id: 7, nombre: "Hotel Arts Barcelona", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Diseño moderno frente al Mediterráneo." },
    { id: 8, nombre: "Mandarin Oriental Barcelona", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia en el corazón del Paseo de Gracia." },
    { id: 9, nombre: "W Barcelona", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel icónico en forma de vela junto a la playa." },

    // Nueva York
    { id: 10, nombre: "Plaza Hotel Nueva York", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Un ícono de lujo en Central Park South." },
    { id: 11, nombre: "The St. Regis New York", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia atemporal en Midtown Manhattan." },
    { id: 12, nombre: "1 Hotel Central Park", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel ecológico de lujo cerca de Central Park." },

    // Tokio
    { id: 13, nombre: "Park Hyatt Tokio", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia y vistas panorámicas de Tokio." },
    { id: 14, nombre: "Aman Tokyo", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Santuario urbano en lo alto de Otemachi Tower." },
    { id: 15, nombre: "The Ritz-Carlton Tokyo", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo elevado en el distrito de Roppongi." },

    // Londres
    { id: 16, nombre: "The Savoy Londres", destino: "Londres",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Historia y sofisticación junto al Támesis." },
    { id: 17, nombre: "Claridge's", destino: "Londres",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo art déco en el corazón de Mayfair." },
    { id: 18, nombre: "The Ritz London", destino: "Londres",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Icono de la elegancia británica en Piccadilly." },

    // Sídney
    { id: 19, nombre: "Park Hyatt Sydney", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo frente a la Ópera de Sídney." },
    { id: 20, nombre: "Four Seasons Hotel Sydney", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia con vistas al puerto de Sídney." },
    { id: 21, nombre: "The Langham Sydney", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Refinamiento en el histórico Rocks." },

    // Río de Janeiro
    { id: 22, nombre: "Copacabana Palace, A Belmond Hotel", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Icono de lujo en la playa de Copacabana." },
    { id: 23, nombre: "Fasano Rio de Janeiro", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Diseño sofisticado frente a Ipanema." },
    { id: 24, nombre: "Hotel Emiliano Rio", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia contemporánea en Copacabana." },

    // Ámsterdam
    { id: 25, nombre: "Waldorf Astoria Amsterdam", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo en seis palacios históricos del siglo XVII." },
    { id: 26, nombre: "Hotel De L'Europe Amsterdam", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia clásica a orillas del río Amstel." },
    { id: 27, nombre: "Conservatorium Hotel", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Diseño contemporáneo en un edificio histórico." },

    // Dubái
    { id: 28, nombre: "Burj Al Arab Jumeirah", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel de 7 estrellas con forma de vela." },
    { id: 29, nombre: "Atlantis, The Palm", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Resort icónico en la isla Palm Jumeirah." },
    { id: 30, nombre: "One&Only The Palm", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Oasis de lujo en Palm Jumeirah." },

    // Kioto
    { id: 31, nombre: "The Ritz-Carlton Kyoto", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo moderno con toques tradicionales junto al río Kamo." },
    { id: 32, nombre: "Four Seasons Hotel Kyoto", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia zen en un jardín histórico." },
    { id: 33, nombre: "Suiran, a Luxury Collection Hotel, Kyoto", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Ryokan de lujo en el distrito de Arashiyama." },

    // Praga
    { id: 34, nombre: "Four Seasons Hotel Prague", destino: "Praga",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Elegancia junto al río Vltava con vistas al Castillo." },
    { id: 35, nombre: "Mandarin Oriental Prague", destino: "Praga",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo en un antiguo monasterio." },
    { id: 36, nombre: "Augustine, a Luxury Collection Hotel, Prague", destino: "Praga",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel en un monasterio del siglo XIII." },

    // Estambul
    { id: 37, nombre: "Four Seasons Hotel Istanbul at Sultanahmet", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo en una antigua prisión otomana." },
    { id: 38, nombre: "Çırağan Palace Kempinski", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Palacio otomano convertido en hotel de lujo." },
    { id: 39, nombre: "Raffles Istanbul", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Moderno oasis de lujo con vistas al Bósforo." },

    // Ciudad del Cabo
    { id: 40, nombre: "The Silo Hotel", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel boutique en un antiguo silo con vistas a Table Mountain." },
    { id: 41, nombre: "One&Only Cape Town", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Resort urbano de lujo en el Victoria & Alfred Waterfront." },
    { id: 42, nombre: "Belmond Mount Nelson Hotel", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Hotel histórico rodeado de jardines en el centro de la ciudad." },

    // Venecia
    { id: 43, nombre: "The Gritti Palace, a Luxury Collection Hotel", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Palacio del siglo XV con vistas al Gran Canal." },
    { id: 44, nombre: "Aman Venice", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Lujo discreto en un palacio del siglo XVI." },
    { id: 45, nombre: "Belmond Hotel Cipriani", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Oasis de tranquilidad en la isla de Giudecca." }
];


// Restaurantes
let restaurantes = [
    // París
    { id: 1, nombre: "L'Arpège", destino: "París",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina vegetariana de alta gama con 3 estrellas Michelin." },
    { id: 2, nombre: "Le Chateaubriand", destino: "París",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina francesa contemporánea de alto nivel." },
    { id: 3, nombre: "Septime", destino: "París",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante neo-bistró con ambiente relajado y cocina creativa." },

    // Roma
    { id: 4, nombre: "La Pergola", destino: "Roma",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante con 3 estrellas Michelin y vistas panorámicas." },
    { id: 5, nombre: "Roscioli", destino: "Roma",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Salumeria, restaurante y panadería icónica de Roma." },
    { id: 6, nombre: "Armando al Pantheon", destino: "Roma",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina romana tradicional cerca del Panteón." },

    // Barcelona
    { id: 7, nombre: "Tickets", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tapas creativas en un ambiente divertido." },
    { id: 8, nombre: "Lasarte", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante con 3 estrellas Michelin de cocina moderna." },
    { id: 9, nombre: "El Nacional", destino: "Barcelona",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Complejo gastronómico con varios restaurantes y bares." },

    // Nueva York
    { id: 10, nombre: "Le Bernardin", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Exquisita cocina de mariscos con 3 estrellas Michelin." },
    { id: 11, nombre: "Katz's Delicatessen", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Icónico deli judío famoso por sus sándwiches de pastrami." },
    { id: 12, nombre: "Eleven Madison Park", destino: "Nueva York",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Experiencia gastronómica de alto nivel con menú plant-based." },

    // Tokio
    { id: 13, nombre: "Narisawa", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Innovadora cocina japonesa con ingredientes de temporada." },
    { id: 14, nombre: "Sukiyabashi Jiro", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Legendario restaurante de sushi del maestro Jiro Ono." },
    { id: 15, nombre: "Den", destino: "Tokio",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina kaiseki moderna con un toque personal y divertido." },

    // Londres
    { id: 16, nombre: "The Clove Club", destino: "Londres",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina británica moderna en un ambiente relajado." },
    { id: 17, nombre: "Dishoom", destino: "Londres",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Comida india inspirada en los cafés de Bombay." },
    { id: 18, nombre: "Core by Clare Smyth", destino: "Londres",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante con 3 estrellas Michelin de la chef Clare Smyth." },

    // Sídney
    { id: 19, nombre: "Quay", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Alta cocina con vistas espectaculares a la Ópera y el puerto." },
    { id: 20, nombre: "Tetsuya's", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Fusión japonesa-francesa del reconocido chef Tetsuya Wakuda." },
    { id: 21, nombre: "Bennelong", destino: "Sídney",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina australiana contemporánea dentro de la Ópera de Sídney." },

    // Río de Janeiro
    { id: 22, nombre: "Lasai", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina brasileña contemporánea con productos locales." },
    { id: 23, nombre: "Olympe", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Fusión de técnicas francesas con ingredientes brasileños." },
    { id: 24, nombre: "Churrascaria Palace", destino: "Río de Janeiro",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tradicional churrascaria brasileña de alta calidad." },

    // Ámsterdam
    { id: 25, nombre: "De Kas", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante en un invernadero con productos de su propio huerto." },
    { id: 26, nombre: "Rijks", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina holandesa moderna en el Rijksmuseum." },
    { id: 27, nombre: "Foodhallen", destino: "Ámsterdam",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Mercado gastronómico con variedad de puestos de comida." },

    // Dubái
    { id: 28, nombre: "Ossiano", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante submarino con vistas al acuario en Atlantis, The Palm." },
    { id: 29, nombre: "Nusr-Et", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Famoso restaurante de carnes del chef Salt Bae." },
    { id: 30, nombre: "Pierchic", destino: "Dubái",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante de mariscos sobre el mar con vistas al Burj Al Arab." },

    // Kioto
    { id: 31, nombre: "Kikunoi", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante kaiseki tradicional de tres estrellas Michelin." },
    { id: 32, nombre: "Nishiki Market", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Mercado cubierto con cientos de puestos de comida local." },
    { id: 33, nombre: "Hyotei", destino: "Kioto",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante de 400 años de antigüedad famoso por su kaiseki." },

    // Praga
    { id: 34, nombre: "La Degustation Bohême Bourgeoise", destino: "Praga",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina checa moderna con estrella Michelin." },
    { id: 35, nombre: "Lokál Dlouhááá", destino: "Praga",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cervecería tradicional con auténtica comida checa." },
    { id: 36, nombre: "Eska", destino: "Praga",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Panadería y restaurante con enfoque en ingredientes locales." },

    // Estambul
    { id: 37, nombre: "Mikla", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina turca contemporánea con vistas panorámicas." },
    { id: 38, nombre: "Çiya Sofrası", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Auténtica cocina de Anatolia con platos poco comunes." },
    { id: 39, nombre: "Neolokal", destino: "Estambul",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Reinterpretación moderna de la cocina turca tradicional." },

    // Ciudad del Cabo
    { id: 40, nombre: "The Test Kitchen", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Experiencia gastronómica de autor en el barrio de Woodstock." },
    { id: 41, nombre: "La Colombe", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Cocina francesa contemporánea con influencias asiáticas." },
    { id: 42, nombre: "Pot Luck Club", destino: "Ciudad del Cabo",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante con vistas panorámicas y platos para compartir." },

    // Venecia
    { id: 43, nombre: "Osteria Da Fiore", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Refinada cocina veneciana en un ambiente acogedor." },
    { id: 44, nombre: "Antiche Carampane", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Auténtica trattoria veneciana fuera de las rutas turísticas." },
    { id: 45, nombre: "Quadri", destino: "Venecia",
        imagen: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Restaurante histórico con estrella Michelin en la Plaza de San Marcos." }
];

    let usuarios = [
        { username: "Admin", email: "admin@admin.com", password: "Admin123.", favoritos: [], isAdmin: true },
        { username: "Camilo", email: "camilo@prueba.com", password: "Prueba123.", favoritos: []}
    ];
    let usuarioActual = null;
    let currentSection = 'destinos';

    function showSection(section) {
    currentSection = section;
    document.getElementById('searchInput').value = '';
    document.getElementById('filterContainer').style.display = section === 'favoritos' ? 'flex' : 'none';
    document.getElementById('content').innerHTML = '';

    if (section === 'admin') {
    mostrarPanelAdmin();
} else {
    cargarContenido();
}
}

    function mostrarPanelAdmin() {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = `
                <div id="adminSection">
                    <h2>Panel de Administrador</h2>
                    <h3>Agregar Nuevo Elemento</h3>
                    <form class="admin-form" onsubmit="return agregarElemento(event)">
                        <select id="tipoElemento" onchange="cambiarFormulario()">
                            <option value="destino">Destino</option>
                            <option value="hotel">Hotel</option>
                            <option value="restaurante">Restaurante</option>
                        </select>
                        <input type="text" id="nombreElemento" placeholder="Nombre" required>
                        <input type="text" id="imagenElemento" placeholder="URL de la Imagen" required>
                        <select id="destinoAsociado" style="display: none;">
                            <!-- Se llenará dinámicamente con los destinos disponibles -->
                        </select>
                        <textarea id="descripcionElemento" placeholder="Descripción" required></textarea>
                        <button type="submit">Agregar</button>
                    </form>
                </div>
            `;
    cambiarFormulario();
}

    function cargarContenido() {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
    let items = [];

    switch(currentSection) {
    case 'destinos':
    items = destinos;
    break;
    case 'hoteles':
    items = hoteles;
    break;
    case 'restaurantes':
    items = restaurantes;
    break;
    case 'favoritos':
    if (usuarioActual) {
    items = usuarioActual.favoritos;
}
    break;
}

    items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <h3>${item.nombre}</h3>
                    <p>${item.destino ? `En ${item.destino}` : `Descubre la magia de ${item.nombre}`}</p>
                    <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorito('${currentSection}', ${item.id})">
                        ${usuarioActual && usuarioActual.favoritos.some(fav => fav.id === item.id && fav.tipo === currentSection) ? '❤️' : '🤍'}
                    </button>
                `;
    card.onclick = () => mostrarDetalle(item);
    contentContainer.appendChild(card);
});
}

    function buscar() {
    const busqueda = document.getElementById('searchInput').value.toLowerCase();
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    let items = [];
    switch(currentSection) {
    case 'destinos':
    items = destinos;
    break;
    case 'hoteles':
    items = hoteles;
    break;
    case 'restaurantes':
    items = restaurantes;
    break;
    case 'favoritos':
    if (usuarioActual) {
    items = usuarioActual.favoritos;
}
    break;
}

    const itemsFiltrados = items.filter(item =>
    item.nombre.toLowerCase().includes(busqueda) ||
    (item.destino && item.destino.toLowerCase().includes(busqueda))
    );

    itemsFiltrados.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <h3>${item.nombre}</h3>
                    <p>${item.destino ? `En ${item.destino}` : `Descubre la magia de ${item.nombre}`}</p>
                    <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorito('${currentSection}', ${item.id})">
                        ${usuarioActual && usuarioActual.favoritos.some(fav => fav.id === item.id && fav.tipo === currentSection) ? '❤️' : '🤍'}
                    </button>
                `;
    card.onclick = () => mostrarDetalle(item);
    contentContainer.appendChild(card);
});
}

    function agregarElemento(event) {
    event.preventDefault();
    const tipo = document.getElementById('tipoElemento').value;
    const nombre = document.getElementById('nombreElemento').value;
    const imagen = document.getElementById('imagenElemento').value;
    const destino = document.getElementById('destinoAsociado').value;
    const descripcion = document.getElementById('descripcionElemento').value;

    let nuevoElemento = { id: Date.now(), nombre, imagen, descripcion };
    if (tipo !== 'destino') {
    nuevoElemento.destino = destino;
}

    switch(tipo) {
    case 'destino':
    destinos.push(nuevoElemento);
    break;
    case 'hotel':
    hoteles.push(nuevoElemento);
    break;
    case 'restaurante':
    restaurantes.push(nuevoElemento);
    break;
}

    document.getElementById('nombreElemento').value = '';
    document.getElementById('imagenElemento').value = '';
    document.getElementById('descripcionElemento').value = '';

    alert(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} agregado con éxito`);
}

    function cambiarFormulario() {
    const tipo = document.getElementById('tipoElemento').value;
    const destinoAsociado = document.getElementById('destinoAsociado');

    if (tipo === 'destino') {
    destinoAsociado.style.display = 'none';
} else {
    destinoAsociado.style.display = 'block';
    destinoAsociado.innerHTML = '';
    destinos.forEach(destino => {
    const option = document.createElement('option');
    option.value = destino.nombre;
    option.textContent = destino.nombre;
    destinoAsociado.appendChild(option);
});
}
}

    function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

    function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

    function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

    function validarPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}

    function registrarUsuario(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorElement = document.getElementById('regError');

    if (usuarios.some(u => u.username === username)) {
    errorElement.textContent = 'El nombre de usuario ya existe';
    return;
}

    if (usuarios.some(u => u.email === email)) {
    errorElement.textContent = 'El correo electrónico ya está registrado';
    return;
}

    if (!validarEmail(email)) {
    errorElement.textContent = 'Por favor, ingrese un correo electrónico válido';
    return;
}

    if (!validarPassword(password)) {
    errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales';
    return;
}

    usuarios.push({ username, email, password, favoritos: [], isAdmin: false });
    alert('Usuario registrado con éxito');
    closeModal('registerModal');
    errorElement.textContent = '';
}

    function loginUsuario(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    const usuario = usuarios.find(u => u.email === email && u.password === password);
    if (usuario) {
    usuarioActual = usuario;
    document.getElementById('favoritosLink').style.display = 'inline-block';
    document.getElementById('adminLink').style.display = usuario.isAdmin ? 'inline-block' : 'none';
    alert('Inicio de sesión exitoso');
    closeModal('loginModal');
    actualizarHeaderButtons();
    errorElement.textContent = '';
} else {
    errorElement.textContent = 'Correo electrónico o contraseña incorrectos';
}
}

    function cerrarSesion() {
    usuarioActual = null;
    document.getElementById('favoritosLink').style.display = 'none';
    document.getElementById('adminLink').style.display = 'none';
    actualizarHeaderButtons();
    showSection('destinos');
}

    function actualizarHeaderButtons() {
    const headerButtons = document.querySelector('.header-buttons');
    if (usuarioActual) {
    headerButtons.innerHTML = `
                    <span>Bienvenido, ${usuarioActual.username}</span>
                    <button onclick="cerrarSesion()">Cerrar Sesión</button>
                `;
} else {
    headerButtons.innerHTML = `
                    <button onclick="showModal('registerModal')">Registrarse</button>
                    <button onclick="showModal('loginModal')">Iniciar Sesión</button>
                `;
}
}

    function toggleFavorito(tipo, id) {
    if (!usuarioActual) {
    alert('Debes iniciar sesión para agregar favoritos');
    return;
}

    const index = usuarioActual.favoritos.findIndex(fav => fav.id === id && fav.tipo === tipo);
    if (index > -1) {
    usuarioActual.favoritos.splice(index, 1);
} else {
    let item;
    switch(tipo) {
    case 'destinos':
    item = destinos.find(d => d.id === id);
    break;
    case 'hoteles':
    item = hoteles.find(h => h.id === id);
    break;
    case 'restaurantes':
    item = restaurantes.find(r => r.id === id);
    break;
}
    if (item) {
    usuarioActual.favoritos.push({...item, tipo});
}
}
    cargarContenido();
}

    function filtrarFavoritos() {
    const tipoFiltro = document.getElementById('tipoFiltro').value;
    const destinoFiltro = document.getElementById('destinoFiltro').value;

    let favoritosFiltrados = usuarioActual.favoritos;

    if (tipoFiltro !== 'todos') {
    favoritosFiltrados = favoritosFiltrados.filter(item => item.tipo === tipoFiltro);
}

    if (destinoFiltro !== 'todos') {
    favoritosFiltrados = favoritosFiltrados.filter(item =>
    item.destino === destinoFiltro || item.nombre === destinoFiltro
    );
}

    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    favoritosFiltrados.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <h3>${item.nombre}</h3>
                    <p>${item.destino ? `En ${item.destino}` : `Descubre la magia de ${item.nombre}`}</p>
                    <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorito('${item.tipo}', ${item.id})">❤️</button>
                `;
    card.onclick = () => mostrarDetalle(item);
    contentContainer.appendChild(card);
});
}

    function mostrarDetalle(item) {
    document.getElementById('detalleNombre').textContent = item.nombre;
    document.getElementById('detalleImagen').src = item.imagen;
    document.getElementById('detalleDescripcion').textContent = item.descripcion;
    document.getElementById('detalleDestino').textContent = item.destino ? `Destino: ${item.destino}` : '';
    showModal('detalleModal');
}

    // Event listeners
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        this.closest('.modal').style.display = "none";
    }
});

    window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
}
}

    document.getElementById('searchInput').addEventListener('input', buscar);

    window.onload = () => {
    showSection('destinos');
    const destinoFiltro = document.getElementById('destinoFiltro');
    destinos.forEach(destino => {
    const option = document.createElement('option');
    option.value = destino.nombre;
    option.textContent = destino.nombre;
    destinoFiltro.appendChild(option);
});
};