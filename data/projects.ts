export interface ProjectDetail {
  id: string;
  slug: string; // Digunakan untuk nama folder gambar (misal: /projects/portaj/1.png)
  title: string;
  desc: string;
  tags: string[];
  headerColor: string;
  type: string;
  image: string; // Gambar utama untuk card
  fullDescription?: string; // Deskripsi lengkap untuk halaman detail
  images?: string[]; // Daftar nama file gambar untuk slider halaman detail
}

// Data utama untuk seluruh project (Card & Halaman Detail)
export const projectsData: Record<string, ProjectDetail> = {
  '01': {
    id: '01',
    slug: 'portaj',
    title: 'Sistem pendukung keputusan penyewaan ps',
    desc: 'Sistem pendukung keputusan berbasis web untuk membantu pengguna dalam memilih PlayStation yang sesuai dengan kebutuhan dan preferensi mereka.',
    tags: ['Bootstrap', 'PHP', 'MySQL'],
    headerColor: 'bg-primary',
    type: 'Web Application',
    image: '/projects/portaj/1.png',
    fullDescription: 'Sebuah sistem pendukung keputusan berbasis web yang dirancang untuk membantu pengguna dalam memilih PlayStation yang sesuai dengan kebutuhan dan preferensi mereka. Sistem ini menggunakan teknologi Three.js untuk visualisasi 3D, WebAudio untuk pengalaman audio yang imersif, dan Go untuk backend yang cepat dan efisien.',
    images: ['1.png', '2.png', '3.png']
  },
  '02': {
    id: '02',
    slug: 'portsam',
    title: 'Sistem dompet digital',
    desc: 'Sistem dompet digital berbasis web yang memungkinkan pengguna untuk menyimpan, mengelola, dan mentransfer aset digital dengan aman dan efisien.',
    tags: ['Flutter', 'CRDTs', 'WebRTC'],
    headerColor: 'bg-secondary',
    type: 'Mobile Application',
    image: '/projects/portsam/1.png',
    fullDescription: 'Sebuah sistem dompet digital berbasis web yang dirancang untuk memberikan pengalaman pengguna yang aman dan efisien dalam menyimpan, mengelola, dan mentransfer aset digital. Sistem ini menggunakan teknologi React untuk antarmuka pengguna yang responsif, CRDTs untuk kolaborasi real-time, dan WebRTC untuk komunikasi peer-to-peer yang aman.',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png']
  },
  '03': {
    id: '03',
    slug: 'portag',
    title: 'Inventaris Seragam',
    desc: 'Sistem inventaris seragam berbasis web untuk sekolah, memudahkan pengelolaan stok dan distribusi seragam.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    headerColor: 'bg-tertiary',
    type: 'Web Application',
    image: '/projects/portag/1.PNG',
    fullDescription: 'Sebuah sistem inventaris seragam berbasis web yang dirancang khusus untuk sekolah. Sistem ini memudahkan pengelolaan stok seragam, distribusi kepada siswa, dan pelacakan penggunaan seragam secara efisien.',
    images: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG', '6.PNG', '7.PNG', '8.PNG', '9.PNG']
  },
  
};

// Mengonversi Record (Object) ke Array untuk digunakan pada slider (List Projects)
export const projectsList = Object.values(projectsData).sort((a, b) => a.id.localeCompare(b.id));
