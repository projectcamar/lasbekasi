export interface Testimonial {
    id: string;
    name: string;
    projectType: string;
    rating: number;
    comment: string;
    date: string;
    response?: string;
    isVisitorComment?: boolean;
}

export const INITIAL_TESTIMONIALS: Testimonial[] = [
    {
        id: 'test-1',
        name: 'Bapak Heri Prasetyo',
        projectType: 'Kanopi Alderon Minimalis',
        rating: 5,
        comment: 'Sangat puas dengan pemasangan kanopi di rumah saya di Kranji. Hasilnya rapi, besi hollow tebal berkualitas, dan pengerjaan cepat. Rekomendasi sekali untuk wilayah Bekasi!',
        date: '2026-04-12',
        response: 'Terima kasih banyak Bapak Heri Prasetyo sudah memesan kanopi Alderon minimalis di bengkel las kami. Kami senang bisa memberikan perlindungan maksimal dari panas dan hujan dengan material SNI pilihan!'
    },
    {
        id: 'test-2',
        name: 'Ibu Rina Kartika',
        projectType: 'Pagar Besi & Pintu Gerbang',
        rating: 5,
        comment: 'Pagar besi minimalis pesanan saya di Cikarang sudah selesai dipasang. Hasil lasnya halus, catnya mulus, dan desainnya sangat modern sesuai dengan request saya. Bapak Maman sangat komunikatif.',
        date: '2026-04-28',
        response: 'Terima kasih banyak Ibu Rina di Cikarang. Suatu kebanggaan bagi kami untuk meningkatkan keamanan dan keindahan estetika hunian Anda dengan pagar besi bermutu tinggi dari workshop Mandiri Steel.'
    },
    {
        id: 'test-3',
        name: 'Bapak Gunawan Hartono',
        projectType: 'Konstruksi Baja WF Ruko',
        rating: 5,
        comment: 'Pekerjaan konstruksi baja berat untuk gudang logistik kami berjalan sangat profesional. Struktur rangka sangat presisi dan selesai tepat waktu sebelum deadline yang ditentukan.',
        date: '2026-05-05',
        response: 'Terima kasih Bapak Gunawan atas kepercayaannya bermitra dengan Mandiri Steel untuk pengerjaan konstruksi baja WF Anda. Sukses terus untuk bisnis logistiknya!'
    },
    {
        id: 'test-4',
        name: 'Bapak Ahmad Faisal',
        projectType: 'Teralis Jendela & Railing Tangga',
        rating: 5,
        comment: 'Teralis jendela minimalis dan railing tangga di rumah baru kami di Tambun hasilnya bagus sekali. Desainnya ramping tapi kokoh, dipasang dengan rapi tanpa merusak dinding.',
        date: '2026-05-10',
        response: 'Terima kasih Bapak Ahmad Faisal di Tambun. Kami selalu berhati-hati dalam proses instalasi teralis jendela dan railing tangga demi keamanan serta kerapian rumah kesayangan Anda.'
    }
];
