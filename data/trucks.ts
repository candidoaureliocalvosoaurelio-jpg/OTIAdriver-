// data/trucks.ts

    export interface Truck {
    slug: string;
    name: string;
    file: string; // Caminho da imagem em /public
    description: string;
    specs: { label: string; value: string }[];
}

    export const trucks: Truck[] = [
    { 
        slug: "volvo-fh-2025", 
        name: "Volvo FH", 
        file: "/images/trucks/volvo.jpg",
        description: "O caminhão mais avançado em segurança e eficiência. Ideal para longas distâncias, combina conforto premium com a mais recente tecnologia de motorização Euro 6.",
        specs: [
            { label: "Potência Máxima", value: "540 hp" },
            { label: "Torque", value: "2600 Nm" },
            { label: "Transmissão", value: "I-Shift (Automática)" },
            { label: "Capacidade de Carga", value: "60 toneladas" },
        ],
    },
    { 
        slug: "daf-xf-2025", 
        name: "DAF XF", 
        file: "/images/trucks/daf_brasil_blue.jpg",
        description: "Reconhecido pelo baixo consumo de combustível e cabine espaçosa. O DAF XF 2025 é a escolha perfeita para o motorista que busca economia operacional sem abrir mão do conforto.",
        specs: [
            { label: "Potência Máxima", value: "530 hp" },
            { label: "Torque", value: "2550 Nm" },
            { label: "Transmissão", value: "ZF TraXon" },
            { label: "Tanque de Combustível", value: "1500 litros" },
        ],
    },
    { 
        slug: "mercedes-actros-2025", 
        name: "Mercedes Actros", 
        file: "/images/trucks/mercedes.jpg",
        description: "O Actros define o padrão em conectividade e assistência ao motorista. Possui MirrorCam e sistemas de segurança preditiva avançados para rodovias.",
        specs: [
            { label: "Potência Máxima", value: "630 hp" },
            { label: "Torque", value: "3000 Nm" },
            { label: "Sistema de Freios", value: "Eixo Traseiro" },
            { label: "Tecnologia", value: "MirrorCam e Active Brake Assist" },
        ],
    },
    { 
        slug: "scania-2025", 
        name: "Scania", 
        file: "/images/trucks/scania.jpg",
        description: "A linha Scania 2025 oferece motores modulares e manutenção simplificada. É o caminhão com a maior rede de assistência técnica na América Latina.",
        specs: [
            { label: "Potência Máxima", value: "660 hp" },
            { label: "Torque", value: "3300 Nm" },
            { label: "Tecnologia", value: "Scania Fleet Management" },
            { label: "Segmento", value: "Transporte Pesado e Florestal" },
        ],
    },
    { 
        slug: "iveco-s-way-2025", 
        name: "Iveco S-Way", 
        file: "/images/trucks/iveco.jpg",
        description: "Com design totalmente renovado, o S-Way foca na aerodinâmica para reduzir o arrasto e maximizar a eficiência, sendo uma excelente opção para o transporte regional.",
        specs: [
            { label: "Potência Máxima", value: "480 hp" },
            { label: "Torque", value: "2100 Nm" },
            { label: "Design", value: "Cabine Aerodinâmica de Teto Alto" },
            { label: "PBT", value: "45.000 kg" },
        ],
    },
    { 
        slug: "vw-meteor-2025", 
        name: "VW Meteor", 
        file: "/images/trucks/vw_meteor.jpg",
        description: "Desenvolvido especificamente para o mercado brasileiro, o Meteor é robusto e confiável, ideal para operações severas e de alta exigência em logística.",
        specs: [
            { label: "Potência Máxima", value: "520 hp" },
            { label: "Torque", value: "2500 Nm" },
            { label: "Origem", value: "Desenvolvido no Brasil" },
            { label: "Motor", value: "MAN D26" },
        ],
    },
];
              
